import Link from "next/link";
import React from "react";
import blogs from "@/app/data/blogs.json";
export default function Blogs() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -m-4">
          {blogs.map((blog) => (
            <div key={blog.key} className="p-4 md:w-1/3">
              <div className="h-full border-2 border-gray-800 rounded-lg overflow-hidden">
                <img
                  className="lg:h-64 md:h-36 w-full object-cover object-center"
                  src={blog.photo}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {blog.title}
                  </h1>

                  <div className="flex items-center flex-wrap ">
                    <Link
                      href={`/blog/${blog.key}`}
                      className="bg-indigo-400 text-red-50 p-2 w-full justify-center rounded-lg mt-2 inline-flex items-center md:mb-2 lg:mb-0"
                    >
                      View Blog
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M5 12h14"></path>
                        <path d="M12 5l7 7-7 7"></path>
                      </svg>
                    </Link>

                    <h2 className="tracking-widest text-xs title-font mt-4 flex gap-1 font-medium text-white mb-1">
                      {blog.tags.map((tag, index) => (
                        <p
                          key={index}
                          className="bg-orange-500 p-1 rounded-full"
                        >
                          {tag.toUpperCase()}
                        </p>
                      ))}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
