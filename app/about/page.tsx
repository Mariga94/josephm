import Project from "@/components/shared/project";
import React from "react";
import Image from "next/image";
import profilePhoto from "@/public/assets/profile-photo.jpeg";
import Link from "next/link";
import { AiFillLinkedin } from "react-icons/ai";
import Blog from "@/components/shared/blogpost";

const page = () => {
  return (
    <section
      id="#about"
      className="container flex flex-col mt-10 mb-24 lg:mt-28 text-gray-600 lg:gap-10 gap-5"
    >
      <h2 className="text-4xl font-semibold ">About Me</h2>
      <div className="flex lg:flex-row flex-col ">
        <div
          className=" flex-1 flex flex-col gap-2 
        items-center lg:pt-5 lg:px-10"
        >
          <p className="text-justify text-large">
            As a full-stack JavaScript developer with a strong emphasis on
            front-end expertise, I am dedicated to creating seamless and
            enjoyable web experiences for end-users. My skills set revolves
            around the JavaScript stack, utilising technologies such as{" "}
            <strong>React</strong>, <strong>Next.JS</strong>,{" "}
            <strong>Typescript</strong> and <strong>Node.JS</strong> to develop
            responsive and user-friendly interfaces.
          </p>

          <p className="text-justify text-large">
            Having a background in <strong>auditing</strong> and{" "}
            <strong>accounting</strong> adds a unique dimension to my
            problem-solving capabilities. This diverse experience equips me with
            the analytical skills and attention to detail necessary to address
            complex challenges. I'm good at turning complex needs into practical
            solutions, making sure things work well and users are happy.
          </p>
          <p className="text-justify text-large">
            My <strong>goal</strong> is to continue leveraging my expertise in
            full-stack development, with a focus on front-end excellence, to
            contribute to projects that demand a balance of technical
            proficiency and creative problem-solving. Whether it's enhancing
            user interfaces, optimizing performance, or overcoming complex
            challenges, I thrive on delivering high-quality solutions that
            elevate the overall web experience.
          </p>
          <div className=" w-full">
            <p className="font-semibold">Get in touch.</p>
            <div className="">
              <Link
                href="https://www.linkedin.com/in/joseph-mariga-266186219/"
                target="_blank"
              >
                <AiFillLinkedin className="react-icons" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex-1 lg:px-24 max-h-[55rem]">
          <Image
            src={profilePhoto}
            alt="profile-photo"
            className="rounded-lg w-full h-full"
          />
        </div>
      </div>

      <Project />
      <Blog />
    </section>
  );
};

export default page;
