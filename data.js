import {RiComputerLine} from "react-icons/ri";
import {FaServer} from "react-icons/fa";
import {AiOutlineAntDesign} from "react-icons/ai"
import {BsCircle} from "react-icons/bs";



export const Services = [
    {
        title: 'frontend developer',
        about: 'Javascript, React.js, Next.JS, Redux, Redux-Saga, Redux-Toolkit, Typescript, React-hook-Form, Git, Github, JWT, SEO, axios, Heroku, Firebase, Vercel ',
        Icon: RiComputerLine
    },
    {
        title: 'frontend Styles',
        about: 'TailwindCSS,  Sass/Scss ,Css, Bootstrap',
        Icon: RiComputerLine
    },
    {
        title: 'backend developer',
        about: 'Strapi, Next.JS',
        Icon: FaServer
    },
    {
        title: 'UI/UX Developer',
        about: 'Figma UX',
        Icon: AiOutlineAntDesign
    },
]

export const Languages = [

    {
        name: 'Next.JS',
        level: '90%',
        Icon: BsCircle
    },
    {
        name: 'react.JS',
        level: '90%',
        Icon: BsCircle
    },
    {
        name: 'Typescript',
        level: '90%',
        Icon: BsCircle
    },
    {
        name: 'Javascript.JS',
        level: '70%',
        Icon: BsCircle
    },
    {
        name: 'Html',
        level: '90%',
        Icon: BsCircle
    },
    {
        name: 'Nest.JS',
        level: '30%',
        Icon: BsCircle
    },
    {
        name: 'Strapi',
        level: '50%',
        Icon: BsCircle
    },
    {
        name: 'CSS',
        level: '95%',
        Icon: BsCircle
    },
    {
        name: 'Sass/Scss',
        level: '90%',
        Icon: BsCircle
    },
    {
        name: 'tailwind',
        level: '95%',
        Icon: BsCircle
    },

]

export const Tools = [
    {
        name: 'SEO',
        level: '90%',
        Icon: BsCircle
    },
    {
        name: 'JWT',
        level: '90%',
        Icon: BsCircle
    },
    {
        name: 'Fetch/Axios',
        level: '95%',
        Icon: BsCircle
    },
    {
        name: 'UI/UX',
        level: '95%',
        Icon: BsCircle
    },
    {
        name: 'Heroku',
        level: '95%',
        Icon: BsCircle
    },
    {
        name: 'Firebase',
        level: '60%',
        Icon: BsCircle
    },
    {
        name: 'Git/Github',
        level: '85%',
        Icon: BsCircle
    },
]

export const Projects = [
    {
        id: 1,
        name: 'gothic shop',
        description: 'this project ',
        image_url: "/images/goth.jpg",
        deploy_url: 'https://gothicshop123.vercel.app',
        github_url: 'https://github.com/gio-lix/gothicshop123.git',
        key_techs: ['Strapi', 'next.js', 'tailwind'],
        category: ['react', "strapi"]
    },
    {
        id: 2,
        name: 'geo-Journal-typescript',
        description: 'This content ',
        image_url: "/images/geo.jpg",
        deploy_url: 'https://geo-journal-typescript.vercel.app',
        github_url: 'https://github.com/gio-lix/geo-journal-typescript',
        key_techs: ['next.js', 'tailwind'],
        category: ['react', "nest"]
    },
    {
        id: 3,
        name: 'commercial-typescrip',
        description: 'This content ',
        image_url: "/images/geo.jpg",
        deploy_url: 'https://commercial-app-typescript.vercel.app',
        github_url: 'https://github.com/gio-lix/commercial-app-typescript.git',
        key_techs: ['redux', 'redux-saga', 'next.js', 'tailwind'],
        category: ['next', "Redux", "Redux-Saga"]
    },
]

export const Categories = "Next"|"React"|"Strapi"|"Node"