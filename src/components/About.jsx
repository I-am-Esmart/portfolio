import aboutSvg from "../assets/about.svg"
import SectionTitle from "./SectionTitle"

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={aboutSvg} alt="about svg" className="w-full h-64" />
        <article>
          <SectionTitle text="Code and Code" className="" />
          <p className="text-slate-600 mt-8 leading-loose">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt
            iure praesentium ea tenetur autem natus, nihil ipsum. Placeat
            expedita facere veniam officiis rem fugiat laudantium reprehenderit!
            Tenetur inventore dolorum incidunt?
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
