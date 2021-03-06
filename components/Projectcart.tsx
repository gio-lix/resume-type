import React, {FC, useState} from 'react';
import {IProject} from "../types";
import Link from 'next/link'
import {AiFillProject} from "react-icons/ai";
import {AiFillGithub} from "react-icons/ai";
import {MdClose} from "react-icons/md";
import Image from "next/image";
import {motion} from 'framer-motion';
import {fadeInUp, stagger} from "../animations";

const ProjectCart: FC<{
    project: IProject,
    setShowDetail: (id: number | null) => void;
    showDetail: number | null
}> = ({
          project: {
              name,
              image_url,
              category,
              github_url,
              deploy_url,
              description,
              key_techs,
              id
          },
          setShowDetail,
          showDetail
      }) => {
    return (
        <div className=''>
            <Image
                width={300}
                height={150}
                layout='responsive'
                quality='100'
                onClick={() => setShowDetail(id)}
                src={image_url} alt={name} className='cursor-pointer'/>
            <p className='my-2 text-center'>{name}</p>
            {showDetail === id && (
                <motion.div
                    className='absolute top-0 left-0 z-20 grid md:grid-cols-2 p-2
                    h-auto w-full gap-x-12 dark:text-white dark:bg-dark-100  text-black bg-gray-100 '>
                    <motion.div variants={stagger} initial="initial" animate="animate">
                        <motion.div variants={fadeInUp}>
                            <Image width={300}
                                   height={150}
                                   layout='responsive'
                                   quality='100' src={image_url} alt={name}/>
                        </motion.div>

                        <motion.div variants={fadeInUp} className='flex justify-center my-4 space-x-3'>
                            <Link href={github_url}>
                                <a className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-100 dark:bg-dark-200'>
                                    <AiFillGithub /> <span>Github</span>
                                </a>
                            </Link>
                            <Link href={deploy_url}>
                                <a className='flex items-center px-4 py-2 space-x-3 text-lg bg-gray-100 dark:bg-dark-200'>
                                    <AiFillProject /> <span>project</span>
                                </a>
                            </Link>
                        </motion.div>
                    </motion.div>
                    <motion.div variants={stagger} initial="initial" animate="animate">
                        <motion.div variants={fadeInUp}>
                            <h2  className='mb-3 text-xl font-medium md:text-2xl'>{name}</h2>
                            <h3 className='mb-3 font-medium'>{description}</h3>
                        </motion.div>
                        <motion.div variants={fadeInUp} className='flex flex-wrap mt-5 space-x-2 text-sm tracking-wider'>
                            {key_techs.map(tech => (
                                <span className='px-2 py-1 my-1 bg-gray-200 dark:bg-dark-200 rounded' key={tech}>{tech}</span>
                            ))}
                        </motion.div>
                    </motion.div>
                    <button
                        className='absolute top-3 right-3 rounded-full p-1 outline-none bg-gray-200 dark:bg-dark-200'
                        onClick={() => setShowDetail(null)} >
                        <MdClose size={30} />
                    </button>
                </motion.div>
            )}

        </div>
    );
};

export default ProjectCart;
