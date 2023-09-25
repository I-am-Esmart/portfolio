import { nanoid } from "nanoid"
import { FaHtml5, FaJs, FaReact } from "react-icons/fa"
import GithubUsersPic from "../src/assets/GithubUsersPic.jpg"
import ColorGen from "../src/assets/Color Gen Pic.jpg"
import TodoPic from "../src/assets/Todo Project Pic.jpg"
import AccordionPic from "../src/assets/Accordion Project Pic.jpg"
import SliderPic from "../src/assets/Slider Project Pic.jpg"
import StrapiPic from "../src/assets/Strapi Project Pic.jpg"

export const links = [
  { id: nanoid(), href: "#home", text: "home" },
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
]

export const skills = [
  {
    id: nanoid(),
    title: "HTML&CSS",
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    text: "Highly skilled in HTML & CSS, adeptly crafting visually appealing and responsive websites for optimal user experiences.",
  },
  {
    id: nanoid(),
    title: "Javascript",
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in JavaScript, building interactive and dynamic web applications with a focus on seamless user interactions and functionality",
  },
  {
    id: nanoid(),
    title: "React",
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    text: "Advanced proficiency in React, developing efficient and interactive front-end applications with a strong emphasis on component-based architecture.",
  },
]

export const projects = [
  {
    id: nanoid(),
    img: GithubUsersPic,
    url: "https://project-github-users.netlify.app/",
    github: "https://github.com/I-am-Esmart/github-users",
    title: "Github users project",
    text: "This project fetches user information (like image, name, github link) from an API and renders it on the screen.",
  },
  {
    id: nanoid(),
    img: ColorGen,
    url: "https://color-generator-zone.netlify.app/",
    github: "https://github.com/I-am-Esmart/color-generator",
    title: "Color generator project",
    text: "A color generator that displays different shades of any color selected by the  user, automatically copies any shade of the color selected to the clipboard when the user clicks on the preferred color shade.",
  },
  {
    id: nanoid(),
    img: TodoPic,
    url: "https://mytodo-appli-cation.netlify.app/",
    github: "https://github.com/I-am-Esmart/todo-list",
    title: "third project",
    text: "A todo app with CRUD.",
  },
  {
    id: nanoid(),
    img: AccordionPic,
    url: "https://faq-accordion-app.netlify.app/",
    github: "https://github.com/I-am-Esmart/accordion",
    title: "third project",
    text: "Accordion project with expand and collapse features.",
  },
  {
    id: nanoid(),
    img: SliderPic,
    url: "https://slider-carousel-project.netlify.app",
    github: "https://github.com/I-am-Esmart/slider",
    title: "Slider project",
    text: "A Slider project.",
  },
  {
    id: nanoid(),
    img: StrapiPic,
    url: "https://strapi-hover-project.netlify.app",
    github: "https://github.com/I-am-Esmart/strapi-project",
    title: "Nav-hover project",
    text: "Displays submenus when each menu  item (product, solutions, resources in this case) is hovered .",
  },
]
