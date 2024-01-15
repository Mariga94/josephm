import React from "react";
import Link from "next/link";
import { AiFillLinkedin, AiOutlineTwitter, AiFillGithub } from "react-icons/ai";
import { CgWebsite } from "react-icons/cg";
import {
  FaGem,
  FaReact,
  FaRocket,
  FaPython,
  FaHtml5,
  FaCss3Alt,
  FaSass,
  FaNodeJs,
  FaGithub,
  FaLinux,
} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import {
  SiTailwindcss,
  SiTypescript,
  SiMongodb,
  SiNextdotjs,
  SiJira,
  SiExpress,
  SiGmail,
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import Blog from "@/components/shared/blogpost";
import Project from "@/components/shared/project";

const Home = () => {
  return (
    <div className="container text-gray-600 space-y-10 mb-20 lg:mb-0">
      <header className="mt-10 lg:mt-32 pb-10 md:mt-32" id="home">
        <h2 className="text-4xl mb-[0.35rem] font-semibold">Hello, i'm</h2>
        <h1 className="text-5xl mb-3 font-semibold">Joseph Mariga</h1>
        
        <p className="text-lg mb-6">
          Fullstack developer with specialization on Front-end. I create
          seamless web experiences for end-users.
        </p>
        <div className="mb-6">
          <Button asChild variant="default">
            <Link href="/about" className="about-link">
              About me
            </Link>
          </Button>
        </div>
        <div className="flex flex-row gap-4">
          <div className="flex lg:flex-row md:flex-row">
            <Link
              href="https://www.linkedin.com/in/joseph-mariga-266186219/"
              target="_blank"
            >
              <AiFillLinkedin className="react-icons" />
            </Link>
          </div>
          <div>
            <Link href="https://twitter.com/joseph_m254" target="_blank">
              <AiOutlineTwitter className="react-icons" />
            </Link>
          </div>
          <div>
            <Link href="https://github.com/Mariga94" target="_blank">
              <AiFillGithub className="react-icons" />
            </Link>
          </div>
        </div>
      </header>

      {/* Projects section */}
      <Project />
      {/* blog section */}
      <Blog />
      {/*Services section  */}
      <section className="service">
        <h2 className="section-title">Services I offer</h2>
        <div className="service-section">
          <article className="service-section-card">
            <CgWebsite className="service-icon" />
            <div>
              <h3 className="project-title">Website Development</h3>
              <p className="project-description">
                Building custom websites from scratch using HTML, CSS, React and
                JavaScript.
              </p>
            </div>
          </article>
          <article className="service-section-card">
            <FaReact className="service-icon" />
            <div>
              <h3 className="project-title">Front-end Development</h3>
              <p className="project-description">
                I specialize in developing interactive and dynamic user
                interfaces using modern JavaScript frameworks like React and
                Next.js. Additionally, I have hands-on experience in
                implementing user interfaces (UI) and crafting engaging user
                experiences (UX) designs.
              </p>
            </div>
          </article>
          <article className="service-section-card">
            <FaPython className="service-icon" />
            <div>
              <h3 className="project-title">Back-end Development</h3>
              <p className="project-description">
                Building server-side applications and APIs using technologies
                like Node.js, Python, etc.
              </p>
            </div>
          </article>
          <article className="service-section-card">
            <FaRocket className="service-icon" />
            <div>
              <h3 className="project-title">Full-stack Development</h3>
              <p className="project-description">
                I offer comprehensive end-to-end solutions to clients,
                encompassing both front-end and back-end development. By
                seamlessly integrating front-end and back-end components, I
                ensure a cohesive and user-friendly experience for users.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="tools">
        <h2 className="section-title">Tools & Skills</h2>
        <section className="tool-section">
          <article className="tool-card">
            <h3 className="project-title">Front-end</h3>
            <ul className="tool-list">
              <li>
                <FaHtml5 className="tool-icon" />
                <span>HTML</span>
              </li>
              <li>
                <FaCss3Alt className="tool-icon" />
                <span>CSS</span>
              </li>
              <li>
                <IoLogoJavascript className="tool-icon" />
                <span>Javascript</span>
              </li>
              <li>
                <SiTypescript className="tool-icon" />
                <span>Typescript</span>
              </li>
              <li>
                <FaReact className="tool-icon" />
                <span>React</span>
              </li>
              <li>
                <SiNextdotjs className="tool-icon" />
                <span>Next</span>
              </li>
              <li>
                <SiTailwindcss className="tool-icon" />
                <span>Taiwind</span>
              </li>
              <li>
                <FaSass className="tool-icon" />
                <span>Sass</span>
              </li>
            </ul>
          </article>
          <article className="tool-card">
            <h3 className="project-title">Backend</h3>
            <ul className="tool-list">
              <li>
                <FaNodeJs className="tool-icon" />
                <span>Nodejs</span>
              </li>
              <li>
                <IoLogoJavascript className="tool-icon" />
                <span>Javascript</span>
              </li>
              <li>
                <SiTypescript className="tool-icon" />
                <span>Typescript</span>
              </li>
              <li>
                <SiExpress className="tool-icon" />
                <span>ExpressJS</span>
              </li>
              <li>
                <FaPython className="tool-icon" />
                <span>Python</span>
              </li>
              <li>
                <SiMongodb className="tool-icon" />
                MongoDB
              </li>
            </ul>
          </article>
          <article className="tool-card">
            <h3 className="project-title">Miscellaneous</h3>
            <ul className="tool-list">
              <li>
                <FaGithub className="tool-icon" />
                <span>Github</span>
              </li>
              <li>
                <FaLinux className="tool-icon" />
                <span>Linux</span>
              </li>
              <li>
                <SiJira className="tool-icon" />
                <span>Jira</span>
              </li>
            </ul>
          </article>
        </section>
      </section>

      {/* Contact section */}
      <section className="contact" id="contact">
        <h3 className="section-title">Connect with me</h3>
        <section className="contact-section">
          <h3 className="project-title">Reach me through socials</h3>
          <section className="contact-section-socials">
            <div>
              <Link href="mailto:josephmariga@duck.com" target="_blank">
                <SiGmail className="contact-react-icons" />
              </Link>
            </div>
            <div>
              <Link
                href="https://www.linkedin.com/in/joseph-muriuki-266186219"
                target="_blank"
              >
                <AiFillLinkedin className="contact-react-icons" />
              </Link>
            </div>
            <div>
              <Link href="https://twitter.com/joseph_m254" target="_blank">
                <AiOutlineTwitter className="contact-react-icons" />
              </Link>
            </div>
            <div>
              <Link href="https://github.com/Mariga94" target="_blank">
                <AiFillGithub className="contact-react-icons" />
              </Link>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
};

export default Home;

// My focus is in creating
// responsive layouts using JavaScript stack of React, Nextjs and NodeJs,
// and with my background with auditing and accounting I'm well
// acquainted to bringing out solutions to complex problems.

{
  /* <section>
          <h2 className="section-title">About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
            exercitationem porro temporibus quod eligendi iure ipsum, alias
            quidem ullam expedita velit. Dignissimos est itaque expedita commodi
            ea maiores voluptatibus a!
          </p>
        </section> */
}
