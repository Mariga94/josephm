import React from "react";
import Link from "next/link";
import Image from "next/image";
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
import placeholder from "@/public/assets/pic10.jpg";
const Home = () => {
  return (
    <>
      <header className="containers" id="home">
        <h1 className="title">Hello, I'm Joseph M.</h1>
        <p className="title-p">
          Fullstack developer with specialization on Front-end. I create
          seamless web experiences for end-users.
        </p>
        <div>
          <Link href="/about" className="about-link">
            About me
          </Link>
        </div>
        <div className="social-links">
          <div>
            <Link
              href="https://www.linkedin.com/in/joseph-muriuki-266186219"
              target="_blank"
            >
              LinkedIn
            </Link>
            <AiFillLinkedin className="react-icons" />
          </div>
          <div>
            <Link href="https://wellfound.com/u/joseph-mariga" target="_blank">
              Wellfound
            </Link>
          </div>
          <div>
            <Link href="https://twitter.com/joseph_m254" target="_blank">
              Twitter
            </Link>
            <AiOutlineTwitter className="react-icons" />
          </div>
          <div>
            <Link href="https://github.com/Mariga94" target="_blank">
              Github
            </Link>
            <AiFillGithub className="react-icons" />
          </div>
        </div>
        <section>
          <h2 className="section-title">About me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti,
            exercitationem porro temporibus quod eligendi iure ipsum, alias
            quidem ullam expedita velit. Dignissimos est itaque expedita commodi
            ea maiores voluptatibus a!
          </p>
        </section>
      </header>
      <section className="containers project-section" id="projects">
        <h2 className="section-title">Featured Projects</h2>
        <div className="projects-div">
          <article>
            <Image src={placeholder} alt="project-image" layout="responsive" />
            <h3 className="project-title">Porfolio website</h3>
            <h4>Next React Tailwind</h4>
            <p>
              My personal website build to showcase my porfolio and experiences
              as a software developer
            </p>
            <div className="view-links">
              <Link href="" className="view-live-link">
                View Live
              </Link>
              <Link href="" className="view-code-link">
                View Code
              </Link>
            </div>
          </article>
          <article>
            <Image src={placeholder} alt="project-image" layout="responsive" />
            <h3 className="project-title">Porfolio website</h3>
            <h4>Next React Tailwind</h4>
            <p>
              My personal website build to showcase my porfolio and experiences
              as a software developer
            </p>
            <div className="view-links">
              <Link href="" className="view-live-link">
                View Live
              </Link>
              <Link href="" className="view-code-link">
                View Code
              </Link>
            </div>
          </article>
          <article>
            <Image src={placeholder} alt="project-image" layout="responsive" />
            <h3 className="project-title">Porfolio website</h3>
            <h4>Next React Tailwind</h4>
            <p>
              My personal website build to showcase my porfolio and experiences
              as a software developer
            </p>
            <div className="view-links">
              <Link href="" className="view-live-link">
                View Live
              </Link>
              <Link href="" className="view-code-link">
                View Code
              </Link>
            </div>
          </article>
          <article>
            <Image src={placeholder} alt="project-image" layout="responsive" />
            <h3 className="project-title">Porfolio website</h3>
            <h4>Next React Tailwind</h4>
            <p>
              My personal website build to showcase my porfolio and experiences
              as a software developer
            </p>
            <div className="view-links">
              <Link href="" className="view-live-link">
                View Live
              </Link>
              <Link href="" className="view-code-link">
                View Code
              </Link>
            </div>
          </article>
        </div>
      </section>
      <section className="containers service">
        <h2 className="section-title">Services I offer</h2>
        <div className="service-section">
          <article>
            <CgWebsite className="service-icon" />
            <div>
              <h3 className="project-title">Website Development</h3>
              <p>
                Building custom websites from scratch using HTML, CSS, and
                JavaScript.
              </p>
            </div>
          </article>
          <article>
            <FaReact className="service-icon" />
            <div>
              <h3 className="project-title">Front-end Development</h3>
              <p>
                I specialize in developing interactive and dynamic user
                interfaces using modern JavaScript frameworks like React and
                Next.js. Additionally, I have hands-on experience in
                implementing user interfaces (UI) and crafting engaging user
                experiences (UX) designs.
              </p>
            </div>
          </article>
          <article>
            <FaPython className="service-icon" />
            <div>
              <h3 className="project-title">Back-end Development</h3>
              <ul>
                <li>
                  Building server-side applications and APIs using technologies
                  like Node.js, Python, etc.
                </li>
              </ul>
            </div>
          </article>
          <article>
            <FaRocket className="service-icon" />
            <div>
              <h3 className="project-title">Full-stack Development</h3>
              <p>
                "I offer comprehensive end-to-end solutions to clients,
                encompassing both front-end and back-end development. By
                seamlessly integrating front-end and back-end components, I
                ensure a cohesive and user-friendly experience for users."
              </p>
            </div>
          </article>
        </div>
      </section>
      <section className="containers tools">
        <h2 className="section-title">Tools & Skills</h2>
        <section className="tool-section">
          <article>
            <h3 className="project-title">Front-end</h3>
            <ul>
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
          <article>
            <h3 className="project-title">Backend</h3>
            <ul>
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
          <article>
            <h3 className="project-title">Miscellaneous</h3>
            <ul>
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
        <section className="languages">
          <p>
            I speak <span className="flag">English GB</span>
          </p>

          <p>
            Nazungumza <span>Kiswahi SWA</span>
          </p>
        </section>
      </section>
      <section className="containers" id="contact">
        <h3 className="section-title">Connect with me:</h3>
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
    </>
  );
};

export default Home;
