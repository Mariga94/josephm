import React from "react";
import Image from "next/image";
import furnishImg from "@/public/assets/furnish.png";
import Link from "next/link";
import { Button } from "../ui/button";
import VedioPlayer from "./vedioPlayer";

const Project = () => {
  return (
    <section className="flex flex-col projects" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="flex flex-wrap lg:flex-row gap-8 items-center justify-center">
        <article className="project-card">
          <VedioPlayer url={"https://youtu.be/l2gelp5PJ0k"} />
          <h3 className="project-title">HomeHub</h3>
          <h4>React, Tailwind, MongoDB</h4>
          <p className="project-description">
            House listing web application that allows owners, agents and tenants
            to post and find properties.
          </p>
          <div className="view-links">
            <Button asChild variant="default">
              <Link
                href="https://homehub-tan.vercel.app/"
                className="view-live-link"
              >
                View Live
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="https://github.com/Mariga94/homehub"
                className="view-code-link"
              >
                View Code
              </Link>
            </Button>
          </div>
        </article>

        <article className="project-card">
          <VedioPlayer url={"https://youtu.be/rPmGXYOmCJ0"} />
          <h3 className="project-title">Porfolio website</h3>
          <h4>Next, React, Tailwind</h4>
          <p className="project-description">
            My personal website build to showcase my porfolio and experiences as
            a software developer
          </p>
          <div className="view-links">
            <Button asChild variant="default">
              <Link
                href="https://josephmariga.vercel.app/"
                className="view-live-link"
              >
                View Live
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="https://github.com/Mariga94/josephm"
                className="view-code-link"
              >
                View Code
              </Link>
            </Button>
          </div>
        </article>

        <article className="project-card">
          <Image
            src={furnishImg}
            alt="project-image"
            className="project-image"
          />
          <h3 className="project-title">Online Furniture Store</h3>
          <h4>React, CSS, Python, Flask, MYSQL</h4>
          <p className="project-description">
            Furniture store where shoppers can access the best furniture.
          </p>
          <div className="view-links">
            <Button asChild variant="default">
              <Link
                href="https://fake-store-eight.vercel.app/"
                className="view-live-link"
              >
                View Live
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link
                href="https://github.com/Mariga94/Fake-Store"
                className="view-code-link"
              >
                View Code
              </Link>
            </Button>
          </div>
        </article>

        <article className="project-card">
          <VedioPlayer url={"https://youtu.be/QwoJ8fW-r2k"} />
          <h3 className="project-title">Seek</h3>
          <h4>React Tailwind MongoDB</h4>

          <div className="project-description block bg-red-500 text-white rounded-full p-2 w-60 text-center">
            Client project In progress
          </div>
          <div className="view-links">
            <Button asChild variant="default">
              <Link
                href="https://seek-ruddy.vercel.app/"
                className="view-live-link"
              >
                View Live
              </Link>
            </Button>
            <Button asChild variant="outline">
              <Link href="" className="view-code-link">
                View Code
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Project;
