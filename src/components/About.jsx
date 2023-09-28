import aboutSvg from "../assets/about.svg"
import SectionTitle from "./SectionTitle"
import MyPic from "../assets/My pic.jpg"

const About = () => {
  return (
    <section className="bg-white py-5" id="about">
      <div className="align-elements grid md:grid-cols-2 items-center">
        <img src={MyPic} alt="about svg" className="w-80 h-96 ml-6" />
        <article className="mr-4">
          <SectionTitle text="About me" className="" />
          <p className="text-slate-600 mt-8 leading-loose font-semibold">
            A frontend developer with an eye for detail and an open mind for
            learning. I am motivated to learn, grow and excel in my field.
            <br />
            <br />
            I have worked with Globamed as a volunteer and RCFFUTA as a
            volunteer as well, in which I have gained experience with real life
            projects.
            <br />
            <br /> I have also built several real life projects like color
            generator and movie website. I am always seeking to learn and expand
            my knowledge of web development and the internet at large.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
