"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
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
            <header className="mb-4 lg:mb-7">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl dark:text-white text-center">
                Solving our problem with pages
              </h1>
            </header>
            <header className="mb-4 lg:mb-7">
              <h1 className="mb-4 text-lg font-extrabold leading-tight lg:mb-6 lg:text-lg dark:text-white text-center">
                Updating soon...
              </h1>
            </header>
          </article>
        </div>
      </main>
    </>
  );
}
