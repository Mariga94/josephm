import React from "react";
import Image from "next/image";
import placeholder from "@/public/assets/pic10.jpg";
import Link from "next/link";
import { Button } from "../ui/button";
const Project = () => {
  return (
    <section className="flex flex-col projects" id="projects">
      <h2 className="section-title">Featured Projects</h2>
      <div className="flex flex-wrap lg:flex-row gap-8 items-center justify-center">
        <article className="project-card">
          <Image
            src={placeholder}
            alt="project-image"
            className="project-image"
          />
          <h3 className="project-title">HomeHub</h3>
          <h4>React MongoDB</h4>
          <p className="project-description">
            House listing web application that allows owners, agents and tenants
            to post and find properties.
          </p>
          <div className="view-links">
            <Button asChild variant="default">
              <Link href="" className="view-live-link">
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
          <Image
            src={placeholder}
            alt="project-image"
            className="project-image"
          />
          <h3 className="project-title">Porfolio website</h3>
          <h4>Next React Tailwind</h4>
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
            src={placeholder}
            alt="project-image"
            className="project-image"
          />
          <h3 className="project-title">Porfolio website</h3>
          <h4>Next React Tailwind</h4>
          <p className="project-description">
            My personal website build to showcase my porfolio and experiences as
            a software developer
          </p>
          <div className="view-links">
            <Button asChild variant="default">
              <Link href="" className="view-live-link">
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
        <article className="project-card">
          <Image
            src={placeholder}
            alt="project-image"
            className="project-image"
          />
          <h3 className="project-title">Porfolio website</h3>
          <h4>Next React Tailwind</h4>
          <p className="project-description">
            My personal website build to showcase my porfolio and experiences as
            a software developer
          </p>
          <div className="view-links">
            <Button asChild variant="default">
              <Link href="" className="view-live-link">
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
