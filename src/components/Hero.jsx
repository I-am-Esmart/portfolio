import heroImg from "../assets/hero.svg"
import {
  FaGithubSquare,
  FaLinkedin,
  FaTwitter,
  FaTwitterSquare,
} from "react-icons/fa"

import resume from "../assets/Emmanuel Joseph CV.pdf"

const Hero = () => {
  return (
    <div className=" w-full bg-emerald-100 py-24 ">
      <div
        className="align-element grid 
      md:grid-cols-2 items-center gap-8"
      >
        <article>
          <h2 className=" text-5xl font-bold tracking-wider">I'm Emmanuel</h2>
          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front End developer
          </p>
          <p className="mt-2 text-lg text-slate-700 capitalize tracking-wide">
            turning ideas into interactive reality
          </p>
          <div className="flex gap-x-4 mt-4">
            <a href="https://github.com/I-am-Esmart/">
              <FaGithubSquare
                className="h-8 w-8 text-slate-500
               hover:text-black duration-300"
              />
            </a>
            <a href="https://www.linkedin.com/in/emmanuel-joseph-478937211/">
              <FaLinkedin
                className="h-8 w-8 text-slate-500
               hover:text-black duration-300"
              />
            </a>
            <a href="https://twitter.com/EsmartOfAfrica">
              <FaTwitterSquare
                className="h-8 w-8 text-slate-500
               hover:text-black duration-300"
              />
            </a>
          </div>
          <div className="resume-container">
            <button
              style={{
                marginTop: "1rem",
                background: "white",
                fontSize: "1rem",
                width: "8rem",
                padding: "0.5rem 0.5rem",
                fontWeight: "bold",
              }}
            >
              <a download href={resume}>
                Download CV
              </a>
            </button>
          </div>
        </article>

        <article className="hidden md:block">
          <img src={heroImg} alt="hero image" className="h-80 lg:h-96" />
        </article>
      </div>
    </div>
  )
}

export default Hero
