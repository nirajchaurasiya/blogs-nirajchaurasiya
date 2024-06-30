"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BlogsListTypes } from "../types/types";
import { useRouter } from "next/navigation";
import { extractFilter } from "../utils/keyTitle";
export default function Blogs({ blogs }: { blogs: BlogsListTypes[] }) {
  const [filteredBlogs, setFilteredBlogs] = useState<BlogsListTypes[]>([]);
  const [key, setKey] = useState("");
  const [loader, setLoader] = useState(true);
  const router = useRouter();

  const uniqueCourseKeys = Array.from(
    new Set(blogs.map((blog) => blog.course.key))
  );

  const handleBlogsFilter = (key: string) => {
    setKey(key || "");
    router.push(`?filter=${key}`);
    if (key === "all") setFilteredBlogs(blogs);
    else setFilteredBlogs(blogs.filter((e) => e.course.key === key));
  };

  useEffect(() => {
    const filterKey = extractFilter(window.location.href);
    setKey(filterKey || "");
    if (filterKey === "all" || !filterKey) setFilteredBlogs(blogs);
    else setFilteredBlogs(blogs.filter((e) => e.course.key === filterKey));
    setTimeout(() => {
      setLoader(false);
    }, 1000);
  }, []);

  return (
    <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-4 mx-auto">
        <div className="mt-4 flex gap-3 mb-6 flex-wrap">
          <p
            className="select-none text-sm text-white text-nowrap p-1 pl-3 pr-3 cursor-pointer rounded-full bg-orange-500"
            onClick={() => {
              handleBlogsFilter("all");
            }}
          >
            All
          </p>
          {uniqueCourseKeys.map((e, index) => (
            <p
              className={`${
                e === key ? "bg-orange-800" : "bg-orange-500"
              } select-none text-sm text-white hover:bg-orange-800 text-nowrap p-1 pl-3 pr-3 cursor-pointer rounded-full`}
              key={index}
              onClick={() => {
                handleBlogsFilter(e);
              }}
            >
              #{e}
            </p>
          ))}
        </div>
        <div className="flex flex-wrap -m-4">
          {loader ? (
            <div className="flex justify-center w-full items-center h-[60vh]">
              <div className="border-4 w-10 h-10 rounded-full border-l-transparent animate-spin"></div>
            </div>
          ) : filteredBlogs.length < 1 ? (
            <div className="">
              <p>No blogs found</p>
              <p>Try changing the title</p>
            </div>
          ) : (
            filteredBlogs.map((blog) => (
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

                      <h2 className="tracking-widest title-font mt-4 flex flex-wrap gap-1 font-medium text-white mb-1">
                        {blog.tags.map((tag, index) => (
                          <p
                            key={index}
                            style={{ fontSize: "10px" }}
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
            ))
          )}
        </div>
      </div>
    </section>
  );
}
