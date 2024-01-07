import { nanoid } from "nanoid";
import { FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { BiLogoTailwindCss } from "react-icons/bi";
import { RiPsychotherapyFill } from "react-icons/ri";
import { SiStyledcomponents } from "react-icons/si";
import { BsGit } from "react-icons/bs";
import ImageSearchPic from "../src/assets/Image Search Pic.jpg";
import GithubUsersPic from "../src/assets/GithubUsersPic.jpg";
import ColorGen from "../src/assets/Color Gen Pic.jpg";
import TodoPic from "../src/assets/Todo Project Pic.jpg";
import AccordionPic from "../src/assets/Accordion Project Pic.jpg";
import MovieImage from "../src/assets/MovieImage.jpg";
import CocktailImage from "../src/assets/cocktail project img.jpg";
import ContentfulProjectImage from "../src/assets/ContentfulProjectImage.jpg";

export const links = [
  { id: nanoid(), href: "#skills", text: "skills" },
  { id: nanoid(), href: "#about", text: "about" },
  { id: nanoid(), href: "#projects", text: "projects" },
];

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
  {
    id: nanoid(),
    title: "TailwindCSS",
    icon: <BiLogoTailwindCss className="h-16 w-16 text-emerald-500" />,
    text: "Expertise in TailwindCSS, designing beautiful and responsive user interfaces appealing to end-users",
  },
  {
    id: nanoid(),
    title: "Styled-components",
    icon: <SiStyledcomponents className="h-16 w-16 text-emerald-500" />,
    text: "Skilled in Styled Components, combining design and logic for elegant React components. Expertise in enhancing code readability and scalability through Styled Components.",
  },
  {
    id: nanoid(),
    title: "Git",
    icon: <BsGit className="h-16 w-16 text-emerald-500" />,
    text: "Proficient in Git version control, ensuring efficient collaboration and code management.",
  },
  {
    id: nanoid(),
    title: "Others",
    icon: <RiPsychotherapyFill className="h-16 w-16 text-emerald-500" />,
    text: "Sound knowledge and well experienced using tools including context API, React Query for better optimization of web apps.",
  },
];

export const projects = [
  {
    id: nanoid(),
    img: ContentfulProjectImage,
    url: "https://contentfulcms-project.netlify.app/",
    github:
      "https://github.com/YourGitHubUsername/your-contentful-project-repo",
    title: "Contentful app",
    text: "A React-based portfolio showcasing past projects, powered by Contentful API. Explore my work with dynamic content loading, seamless navigation, and a user-friendly interface.",
  },
  {
    id: nanoid(),
    img: CocktailImage,
    url: "https://cocktail-teacher.netlify.app/",
    github: "https://github.com/I-am-Esmart/cocktails",
    title: "Cocktail Teacher",
    text: "A web app that teaches users how to make cocktails. fetches cocktails Data using thecocktailDb API, with search functionality ",
  },
  {
    id: nanoid(),
    img: ImageSearchPic,
    url: "https://image-searchsite.netlify.app",
    github: "https://github.com/I-am-Esmart/image-generator",
    title: "Image searcher ",
    text: "This project fetches data from unsplash API, with search, automatic light/dark mode functionalities and error handling",
  },
  {
    id: nanoid(),
    img: ColorGen,
    url: "https://color-generator-zone.netlify.app/",
    github: "https://github.com/I-am-Esmart/color-generator",
    title: "Color generator ",
    text: "A color generator that displays different shades of any color selected by the  user, automatically copies any shade of the color selected to the clipboard when the user clicks on the preferred color shade.",
  },
  {
    id: nanoid(),
    img: GithubUsersPic,
    url: "https://project-github-users.netlify.app/",
    github: "https://github.com/I-am-Esmart/github-users",
    title: "Github users ",
    text: "This project fetches user information (like image, name, github link) from an API and renders it on the screen.",
  },

  {
    id: nanoid(),
    img: TodoPic,
    url: "https://mytodo-appli-cation.netlify.app/",
    github: "https://github.com/I-am-Esmart/todo-list",
    title: "Todo ",
    text: "A tasks app connected to a backend server. Performs CRUD operations.",
  },
  {
    id: nanoid(),
    img: MovieImage,
    url: "https://moviesearcher-site.netlify.app/",
    github: "https://github.com/I-am-Esmart/slider",
    title: "Movie app ",
    text: "A movie app integrated with TMDb API, fetches movie info with search functionality.",
  },
];
