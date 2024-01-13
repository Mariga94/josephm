import React from "react";
import Image from "next/image";
import placeholder from "@/public/assets/pic10.jpg";
import Link from "next/link";
import { Button } from "../ui/button";
const Blog = () => {
  return (
    <section className="flex flex-col blog" id="blog">
      <h2 className="section-title ">Blog Posts</h2>
      <div className="flex lg:flex-row lg:flex-wrap flex-col items-center justify-center gap-8">
        <article className="project-card">
          <div className=" h-60 bg-black rounded-lg">
            <Image
              src="https://miro.medium.com/v2/resize:fit:640/format:webp/1*A6URfTh8ItitCCkC7QZImQ.png"
              width={300}
              height={240}
              alt="project-image"
              className="blog-image"
            />
          </div>
          <h3 className="project-title">How I build my first MVP.</h3>
          <p className="project-description">
            Check out how I build an furniture store using a simple challenging
            statement.
          </p>
          <div className="view-links">
            <Button asChild variant="default">
              <Link
                href="https://medium.com/@jsphmariga/how-i-build-mysimple-online-store-mvp-4359b5cbe993"
                target="_blank"
                className="view-live-link"
              >
                Read
              </Link>
            </Button>
          </div>
        </article>

        <article className="project-card">
          <Image
            src="https://miro.medium.com/v2/resize:fit:828/format:webp/1*s3mZaLTXBJuzeb2ne1XgoQ.jpeg"
            alt="project-image"
            width={300}
            height={240}
            className="blog-image"
          />
          <h3 className="project-title">
            What happens when you type the URL in your browser and press Enter?
          </h3>
          <p className="project-description">
            Ever what happens behind the seens when you search for your
            favourite cat photo ? Well lets did in.
          </p>
          <div className="view-links">
            <Button asChild variant="default">
              <Link
                href="https://medium.com/@jsphmariga/what-happens-when-you-type-the-url-in-your-browser-and-press-enter-fb10455afb91"
                target="_blank"
                className="view-live-link"
              >
                Read
              </Link>
            </Button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Blog;
