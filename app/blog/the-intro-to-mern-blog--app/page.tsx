"use client";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();

  return (
    <>
      <main className="pt-8 pb-16 lg:pt-10 lg:pb-24 antialiased">
        <div className="flex text-gray-100 dark:text-gray-200 justify-between px-4 mx-auto max-w-screen-2xl ">
          <article className="mx-auto w-full max-w-5xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
            <div
              onClick={() => {
                router.back();
              }}
              className="w-10 h-10 p-2 transition-all pb-4 hover:bg-blue-500  rounded-full cursor-pointer"
            >
              <img src="/back-arrow-svgrepo-com.svg" />
            </div>
            <header className="mb-4 lg:mb-7 not-format">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl dark:text-white text-center">
                MERN BLOG APP | THE INTRO
              </h1>
            </header>
            <div className="flex items-center gap-3 mb-2">
              <img className="w-10 h-10 rounded-full" src="/pp.jpg" alt="" />
              <div>
                <p className="font-bold text-lg">Niraj Chaurasiya</p>
                <p className="font-sans text-md">29 June 2024</p>
              </div>
            </div>
            <div className="pb-2 flex gap-2">
              <p>Visit at:</p>
              <a
                target="_blank"
                className="text-orange-500 font-bold"
                href="https://new-blog-app-yt.vercel.app"
              >
                https://new-blog-app-yt.vercel.app
              </a>
            </div>
            <figure>
              <img
                className="w-full object-cover"
                src="/thumbnails/mern-app-2023/thumbnail.png"
                alt=""
              />
            </figure>

            <div className="flex flex-col gap-4 mt-4">
              <div>
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Table of Contents
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2">
                  <li className="cursor-pointer hover:underline">
                    <a href="#the-intro-to-blog-app">The Introduction</a>
                  </li>

                  <li className="cursor-pointer hover:underline">
                    <a href="#key-features-of-blog-app">Key features</a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a href="#learning-outcomes-from-blog-app">
                      Learning outcomes
                    </a>
                  </li>
                </ul>
              </div>
              <div id="the-intro-to-blog-app">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    The Introduction
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2">
                  <p>
                    I am thrilled to anounced that we are going to build a MERN
                    blog app in this series.
                  </p>
                  <p>
                    This will be the popular MERN stack{" "}
                    <span className="font-bold">
                      (MONGODB, EXPRESSJS, REACTJS, NODEJS)
                    </span>{" "}
                    series in which we are going to learn how we can build a
                    professionally level project by writing production level
                    code.
                  </p>
                </ul>
              </div>

              <div className="key-features-of-blog-app">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Key features
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2 list-decimal pl-10">
                  <li>
                    <span className="font-bold">User Authentication</span> :
                    Secure user registration and login functionality using JWT
                    (JSON Web Tokens).
                  </li>
                  <li>
                    <span className="font-bold">Dynamic Content Creation</span>{" "}
                    : Users can create, edit(Change Profile), with a rich text
                    editor.
                  </li>
                  <li>
                    <span className="font-bold">Responsive Design</span> : A
                    mobile-friendly layout that ensures a great user experience
                    on any device.
                  </li>

                  <li>
                    <span className="font-bold">Rich Media Support</span> : We
                    can use visuals by uploading an image to make the post more
                    user-engaging.
                  </li>
                  <li>
                    <span className="font-bold">Profile Management</span> :
                    Users can manage their profiles by changing their profile
                    pictures for free on Cloudinary.
                  </li>
                </ul>
              </div>

              <div id="learning-outcomes-from-blog-app">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Learning outcomes
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2 list-decimal pl-10">
                  <p className="font-bold">
                    Building Blogify with the MERN stack (MongoDB, Express.js,
                    React, Node.js) will help you:
                  </p>
                  <li>
                    <span className="font-bold">
                      Understand Full-Stack Development
                    </span>{" "}
                    : Gain hands-on experience with developing a web
                    application&apos;s front-end and back-end.
                  </li>
                  <li>
                    <span className="font-bold">Implement Authentication</span>{" "}
                    : Learn how to handle user authentication and authorization
                    using JWT securely.
                  </li>
                  <li>
                    <span className="font-bold">Work with RESTful APIs</span> :
                    Develop and consume RESTful APIs for various functionalities
                    like user management, and post creation.
                  </li>
                  <li>
                    <span className="font-bold">Manage State with React</span> :
                    Use React and state management libraries like Redux to
                    handle application state efficiently.
                  </li>
                  <li>
                    <span className="font-bold">Perform CRUD Operations</span> :
                    Master Create, Read, Update (user profile), in a real-world
                    context.
                  </li>
                  <li>
                    <span className="font-bold">
                      Responsive Design Practices
                    </span>{" "}
                    : Create a responsive design that works well on both desktop
                    and mobile devices.
                  </li>
                  <li>
                    <span className="font-bold">Optimize Performance</span> :
                    Learn techniques to optimize the performance of your
                    application, both on the server-side and client-side.
                  </li>
                  <li>
                    <span className="font-bold">Deploy Applications</span> :
                    Understand the process of deploying a MERN stack application
                    to a platform like Vercel (Frontend) and Render (NodeJS) for
                    free.
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <p className="font-bold text-xl">
                I hope you will gain a solid understanding on building MERN blog
                application professionally.
              </p>
              <p>
                Follow me on X:{" "}
                <a
                  className="text-orange-500 underline"
                  target="_blank"
                  href="https://twitter.com/@loveforrobotics"
                >
                  https://twitter.com/@loveforrobotics
                </a>
              </p>
              <p>
                My YouTube channel link where I share amazing videos like this:{" "}
                <a
                  className="text-orange-500 underline"
                  target="_blank"
                  href="https://youtube.com/@niraj.chaurasiya"
                >
                  https://youtube.com/@niraj.chaurasiya
                </a>
              </p>
            </div>
            <div>
              <header className="lg:mb-4 mt-6 not-format">
                <h1 className="text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                  Playlist video on YouTube
                </h1>
                <a
                  href="https://youtube.com/playlist?list=PLYeR6R4wMO-8ToOG8X7vA7ELDdSX9D2w-&si=w0rpCeXJQYodean7"
                  className="text-orange-500 underline"
                >
                  https://youtube.com/playlist?list=PLYeR6R4wMO-8ToOG8X7vA7ELDdSX9D2w-&si=w0rpCeXJQYodean7
                </a>
              </header>
              <figure>
                <iframe
                  width="100%"
                  height="500px"
                  src="https://www.youtube.com/embed/videoseries?si=4DYtFSguzUGs8sMj&amp;list=PLYeR6R4wMO-8ToOG8X7vA7ELDdSX9D2w-"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </figure>
            </div>
            <div>
              <header className="lg:mb-4 mt-6 not-format">
                <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                  Tags
                </h1>
              </header>
              <div className="flex flex-row gap-3">
                {["mern", "blog-app"].map((e, index) => (
                  <p
                    className="bg-orange-500 pl-2 pr-2 pt-1 pb-1 rounded-full"
                    key={index}
                  >
                    {e}
                  </p>
                ))}
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
