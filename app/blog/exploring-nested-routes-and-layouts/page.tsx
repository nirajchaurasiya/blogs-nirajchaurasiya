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
            <header className="mb-4 lg:mb-7 not-format">
              <h1 className="mb-4 text-3xl font-extrabold leading-tight lg:mb-6 lg:text-4xl dark:text-white text-center">
                Exploring Nested Routes and Layouts
              </h1>
            </header>
            <div className="flex items-center gap-3 mb-5">
              <img className="w-10 h-10 rounded-full" src="/pp.jpg" alt="" />
              <div>
                <p className="font-bold text-lg">Niraj Chaurasiya</p>
                <p className="font-sans text-md">01 June 2024</p>
              </div>
            </div>
            <figure>
              <img
                className="w-full object-cover rounded-"
                src="/thumbnails/exploring-nested-routes-and-layouts/nested-routes-and-layouts.png"
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
                    <a href="#what-is-nested-routes">What is Nested Routes?</a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a href="#implement-nested-routes-in-nextjs">
                      Implement Nested Routes in NextJS 14!
                    </a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a href="#what-is-layout">What is Layout?</a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a href="#adding-layout-in-nextjs">
                      Creating the Dashboard Layout!
                    </a>
                  </li>
                </ul>
              </div>
              <div id="what-is-nested-routes">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    What are Nested Routes?
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2">
                  <p>
                    Nested routing might sound complicated, but it&apos;s a
                    powerful way to organize and navigate web applications.
                    Let&apos;s break it down into easy-to-understand pieces.
                  </p>
                  <p>Imagine a project management tool with these sections:</p>
                  <div className="flex flex-col gap-2">
                    <p>For example:</p>
                    <SyntaxHighlighter
                      customStyle={{ background: "black", color: "white" }}
                      language="javascript"
                      style={docco}
                    >
                      {`  
  Home: /
  Dashboard: /dashboard
  Profile: /dashboard/profile
  Settings: /dashboard/settings
                `}
                    </SyntaxHighlighter>
                  </div>
                  <p>
                    In the above code snippet, the home i.e.{" "}
                    <span className="bg-gray-600 pl-1 pr-1">
                      <code>{`/`}</code>
                    </span>
                    , is the root URL of the website. The dashboard URL i.e.{" "}
                    <span className="bg-gray-600 pl-1 pr-1">
                      <code>{`/dashboard`}</code>
                    </span>
                    , serves as a parent route, and within this parent, you have
                    nested routes such as profile and settings.
                  </p>
                  <p>
                    These nested routes can be visualized as sub-sections or
                    pages that belong to the main section, helping to keep the
                    navigation organized. For example, the Profile and Settings
                    routes are both nested under the Dashboard route, creating a
                    hierarchical structure.
                  </p>
                  <p>
                    This approach allows for a more intuitive and structured
                    navigation experience, making it easier for users to find
                    and manage related content within the application.
                  </p>
                  <p>
                    <span className="font-bold">Next.js</span> uses file-system
                    routing where <span className="font-bold">folders</span> are
                    used to create nested routes. Each folder represents a route
                    segment that maps to a{" "}
                    <span className="font-bold">URL segment</span>.
                  </p>
                  <p>Below is the image!</p>
                  <img
                    typeof="image/avif"
                    src="/thumbnails/exploring-nested-routes-and-layouts/folders-to-url-segments.avif"
                    alt=""
                  />
                  <p>
                    You can create separate UIs for each route using layout.tsx
                    and page.tsx files. page.tsx is a special Next.js file that
                    exports a React component, and it&apos;s required for the
                    route to be accessible.
                  </p>
                  <p>
                    In your application, you already have a page file:
                    /app/page.tsx - this is the home page associated with the
                    route /. To create a nested route, you can nest folders
                    inside each other and add page.tsx files inside them.
                  </p>
                  <p>For example:</p>
                  <img
                    src="/thumbnails/exploring-nested-routes-and-layouts/dashboard-route.avif"
                    alt=""
                  />
                  <p>
                    <span className="bg-gray-600 pl-1 pr-1">
                      <code>{`/app/dashboard/page.tsx`}</code>
                    </span>{" "}
                    is associated with the{" "}
                    <span className="bg-gray-600 pl-1 pr-1">
                      <code>{`/dashboard`}</code>
                    </span>{" "}
                    path.
                  </p>
                  <p>Let&apos;s create the page to see how it works!</p>
                </ul>
              </div>

              <div id="implement-nested-routes-in-nextjs">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Implementing Nested Routes on NextJS 14!
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2">
                  <p>
                    First of all, we will create a dashboard route i.e{" "}
                    <span className="bg-gray-600 pl-1 pr-1">
                      <code>{`/dashboard`}</code>.
                    </span>
                  </p>
                  <p>
                    For that we need to go inside the root folder i.e. app
                    folder in our NextJS 14 app, and we will create a dashboard
                    folder.
                  </p>
                  <p>
                    Then, create a new page.tsx file inside the dashboard folder
                    with the following content:
                  </p>
                  <div className="flex flex-col gap-2">
                    <SyntaxHighlighter
                      customStyle={{ background: "black", color: "white" }}
                      language="tsx"
                      style={docco}
                    >
                      {`  
 export default function Page() {
  return <p>Dashboard Page</p>;
}
                `}
                    </SyntaxHighlighter>
                  </div>
                  <p>
                    Now, make sure that the development server is running and
                    visit{" "}
                    <a href="http://localhost:3000/dashboard" target="_blank">
                      <span className="underline">
                        http://localhost:3000/dashboard
                      </span>
                    </a>
                    .
                  </p>
                  <p>You should see the &ldquo;Dashboard Page&ldquo; text.</p>
                  <p>
                    This is how you can create different pages in Next.js:
                    create a new route segment using a folder, and add a page
                    file inside it.
                  </p>
                  <header className="lg:mb-4 not-format">
                    <h1 className="text-1xl font-extrabold leading-tight lg:text-2xl dark:text-white">
                      Practice: Creating the dashboard pages
                    </h1>
                    <div className="flex flex-col gap-2">
                      <p>Lets now practice it by creating two more folders.</p>
                      <p>
                        Firstly, we will create two more folders inside the
                        dashboard folder i.e. Customers and Invoices
                      </p>
                      <p>
                        Secondly, we will create a file, page.tsx, in each
                        folder.
                      </p>
                      <p>
                        The image belows shows how our folders look like once we
                        these create two folders.
                      </p>
                    </div>
                    <img
                      className="mt-4"
                      src="/thumbnails/exploring-nested-routes-and-layouts/routing-solution.avif"
                      alt=""
                    />
                  </header>
                  <p>
                    Now, when you visit{" "}
                    <a
                      href="http://localhost:3000/dashboard/customers"
                      target="_blank"
                    >
                      http://localhost:3000/dashboard/customers
                    </a>
                    , it should shows Customers Page
                  </p>
                  <p>
                    Similarly, when you visit{" "}
                    <a
                      href="http://localhost:3000/dashboard/invoices"
                      target="_blank"
                    >
                      http://localhost:3000/dashboard/invoices
                    </a>
                    , it should shows Invoices Page
                  </p>
                </ul>
              </div>
              <div id="what-is-layout">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    What is Layout?
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2">
                  <p>
                    The term layout refers to the way something is designed,
                    arranged, or laid out. In written text, this is usually how
                    visual elements, such as pictures, fonts, and headings, are
                    presented on the page.
                  </p>
                  <p>For eg:</p>
                  <img
                    src="/thumbnails/exploring-nested-routes-and-layouts/layout.png"
                    alt=""
                  />

                  <p>
                    Just like, In NextJS 14, you can use a special{" "}
                    <span className="bg-gray-400">layout.tsx</span> file to
                    create UI that is shared between multiple pages.
                  </p>
                </ul>
              </div>
              <div id="adding-layout-in-nextjs">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Creating the Dashboard Layout!
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2">
                  <p>So, Let&apos;s create a layout for the dashboard pages!</p>
                  <p>
                    Inside the <span className="bg-gray-400">/dashboard</span>{" "}
                    folder, add a new file called{" "}
                    <span className="bg-gray-400">layout.tsx</span> and paste
                    the following code:
                  </p>
                  <SyntaxHighlighter
                    customStyle={{ background: "black", color: "white" }}
                    language="tsx"
                    style={docco}
                  >
                    {`  
  import SideNav from &apos;@/app/ui/dashboard/sidenav&apos;;
  
  export default function Layout({ children }: { children: React.ReactNode }) {
    return (
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow p-6 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    );
  }
                `}
                  </SyntaxHighlighter>
                  <p>Lets now understand the code line by line</p>
                  <p>
                    First of all, we will import{" "}
                    <span className="bg-gray-500">SideNav</span> from{" "}
                    <span className="bg-gray-500">
                      @/app/ui/dashboard/sidenav
                    </span>
                    .
                  </p>
                  <p>
                    Remember, any components you import into this file will be
                    part of the layout.
                  </p>
                  <p>
                    The{" <Layout />"} component receives a children prop. This
                    child can either be a page or another layout. In your case,
                    the pages inside /dashboard will automatically be nested
                    inside a{" <Layout />"} like so:
                  </p>
                  <img
                    className="mt-2"
                    src="/thumbnails/exploring-nested-routes-and-layouts/shared-layout.avif"
                    alt=""
                  />
                  <p>
                    Now, lets check that everything is working correctly by
                    saving our changes and checking our localhost. We should see
                    the following:
                  </p>
                  <img
                    className="mt-2"
                    src="/thumbnails/exploring-nested-routes-and-layouts/shared-layout-page.avif"
                    alt=""
                  />
                  <p>
                    One benefit of using layouts in Next.js is that on
                    navigation, only the page components update while the layout
                    won&apos;t re-render.
                  </p>
                  <img
                    src="/thumbnails/exploring-nested-routes-and-layouts/partial-rendering-dashboard.avif"
                    alt=""
                  />
                </ul>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <p className="font-bold text-xl">
                I hope you are now cleared with Nested Routes and Layouts.
              </p>
              <p>
                In the next blog, we will solve the issue of page reloading when
                you visit in any nested layout from the dashboard page.
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
                <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                  Video
                </h1>
              </header>
              <figure>
                <iframe
                  width="100%"
                  height="500px"
                  src="https://www.youtube.com/embed/PCVrS2FIUpU?si=i8UTCxv7gDHQDtq6"
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
                {["routes", "nested routes", "layout", "nextjs 14"].map(
                  (e, index) => (
                    <p
                      className="bg-orange-500 pl-2 pr-2 pt-1 pb-1 rounded-full"
                      key={index}
                    >
                      {e}
                    </p>
                  )
                )}
              </div>
            </div>
          </article>
        </div>
      </main>
    </>
  );
}
