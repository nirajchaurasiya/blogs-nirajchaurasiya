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
                Backend Setup | NodeJS
              </h1>
            </header>
            <div className="flex items-center gap-3 mb-2">
              <img className="w-10 h-10 rounded-full" src="/pp.jpg" alt="" />
              <div>
                <p className="font-bold text-lg">Niraj Chaurasiya</p>
                <p className="font-sans text-md">02 July 2024</p>
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
                src="/thumbnails/mern-app-2023/2.jpg"
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
                    <a href="#the-intro-to-professional-backend-setup-with-nodejs">
                      The Introduction
                    </a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a href="#learning-outcomes#">Learning Outcomes</a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a href="#installing-nodejs-in-our-system">
                      Installing NodeJS
                    </a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a href="#creating-a-server-with-expressjs">
                      Creating a server with ExpressJS
                    </a>
                  </li>

                  <li className="cursor-pointer hover:underline">
                    <a href="#using-environment-file-professionally">
                      Using environment file professionally
                    </a>
                  </li>
                </ul>
              </div>
              <div id="the-intro-to-professional-backend-setup-with-nodejs">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    The Introduction
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2">
                  <p>
                    In this blog, I am going to write the all the process that
                    we have discussed in the video.
                  </p>
                  <p>
                    From installing{" "}
                    <a href="https://nodejs.org/en" target="_blank">
                      <span className="font-bold text-orange-500 underline">
                        (NODEJS)
                      </span>
                    </a>{" "}
                    to creating a backend server with ExpressJS, we will gain a
                    solid understanding in NodeJS.
                  </p>
                </ul>
              </div>

              <div id="learning-outcomes#">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Learning outcomes
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2 list-decimal pl-10">
                  <li>Installing NodeJS in Windows, MacOS, and Linux</li>
                  <li>Creating a basic backend server with ExpressJS</li>
                  <li>Using environment file professionally</li>
                </ul>
              </div>
              <div className="installing-nodejs-in-our-system">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Installing NodeJS
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2 list-decimal pl-10">
                  <p>
                    To start with making the backend with NodeJS, we need to
                    make sure that we have NodeJS installed in our system.
                  </p>
                  <p>
                    If you are unaware about NodeJS, it is a JavaScript runtime
                    environment that lets us run Javascript on our system and in
                    terminal.
                  </p>
                  <p>
                    For more info: check{" "}
                    <a href="https://nodejs.org/en" target="_blank">
                      <span className="font-bold text-orange-500 underline">
                        (NODEJS)
                      </span>
                    </a>{" "}
                    official website.
                  </p>
                  <header className="not-format">
                    <h1 className="text-xl font-extrabold leading-tight lg:text-lg dark:text-white">
                      NodeJS installation process
                    </h1>
                  </header>
                  <div>
                    <li className="lg:text-lg text-xl font-bold">
                      Installing in Linux OS
                    </li>
                    <p>Lets start with the installation process in Linux OS</p>
                    <div className="flex flex-col gap-2">
                      <p>Open your bash run these commands!</p>
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="terminal"
                        style={docco}
                      >
                        {`  
  sudo apt update
  sudo apt upgrade
  sudo apt-get update
  sudo apt-get upgrade
  sudo apt install nodejs
                `}
                      </SyntaxHighlighter>
                      <p>
                        After the installation is finished, make sure to
                        checkout the version!
                      </p>
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="terminal"
                        style={docco}
                      >
                        {`  
  nodejs -v
  # It should show the current version of NodeJS
  npm -v
  # It should show the current version of npm
                `}
                      </SyntaxHighlighter>
                    </div>

                    <li className="lg:text-lg text-xl font-bold mt-3">
                      Installing in Mac OS
                    </li>
                    <p>
                      Unlikely as the installation process in Linux OS where
                      there is only one way to install NodeJS via command, there
                      are two ways to install in MacOS.
                    </p>
                    <p className="ml-4 font-bold text-xl lg:text-lg mt-2">
                      First one is prebuilt installer.{" "}
                    </p>
                    <p className="ml-8">
                      <a
                        href="https://nodejs.org/dist/v20.15.0/node-v20.15.0.pkg"
                        target="_blank"
                        className="font-bold text-orange-500 underline"
                      >
                        Click here
                      </a>{" "}
                      to download the prebuild installer package for MacOS.
                    </p>
                    <div className="flex flex-col gap-2 ml-4 mt-2">
                      <p className="font-bold text-xl lg:text-lg">
                        The second one is using bash
                      </p>
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="terminal"
                        style={docco}
                      >
                        {`  
  # installs nvm (Node Version Manager)
  curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash

  # download and install Node.js (you may need to restart the terminal)
  nvm install 20
                `}
                      </SyntaxHighlighter>
                      <p>
                        After the installation is finished, make sure to
                        checkout the version!
                      </p>
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="terminal"
                        style={docco}
                      >
                        {`  
  nodejs -v
  # It should show the current version of NodeJS
  npm -v
  # It should show the current version of npm
                `}
                      </SyntaxHighlighter>
                    </div>
                    <li className="lg:text-lg text-xl font-bold mt-3">
                      Installing in Windows OS
                    </li>
                    <p>
                      Like as Mac OS, there are two ways to install NodeJS in
                      Windows OS.
                    </p>
                    <p className="ml-4 font-bold text-xl lg:text-lg mt-2">
                      First one is prebuilt installer.{" "}
                    </p>
                    <p className="ml-8">
                      <a
                        href="https://nodejs.org/dist/v20.15.0/node-v20.15.0-x64.msi"
                        target="_blank"
                        className="font-bold text-orange-500 underline"
                      >
                        Click here
                      </a>{" "}
                      to download the prebuild installer package for Windows OS.
                    </p>
                    <div className="flex flex-col gap-2 ml-4 mt-2">
                      <p className="font-bold text-xl lg:text-lg">
                        The second one is using powershell
                      </p>
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="terminal"
                        style={docco}
                      >
                        {`  
  # installs fnm (Fast Node Manager)
  winget install Schniz.fnm

  # download and install Node.js
  fnm use --install-if-missing 20
                `}
                      </SyntaxHighlighter>
                      <p>
                        After the installation is finished, make sure to
                        checkout the version!
                      </p>
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="terminal"
                        style={docco}
                      >
                        {`  
  nodejs -v
  # It should show the current version of NodeJS
  npm -v
  # It should show the current version of npm
                `}
                      </SyntaxHighlighter>
                    </div>
                  </div>
                </ul>
              </div>

              <div id="creating-a-server-with-expressjs">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Creating a server with ExpressJS
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2 list-decimal pl-10">
                  <p className="font-bold">
                    Now, we have successfully finished installing NodeJS in our
                    system, lets create a simple server to check its working.
                  </p>
                  <div className="">
                    There are two ways to initialize a server app.
                    <p className="mt-2">
                      Using{" "}
                      <code className="bg-gray-500  font-bold text-xl lg:text-lg">
                        npm init
                      </code>{" "}
                      and{" "}
                      <code className="bg-gray-500  font-bold text-xl lg:text-lg">
                        npm init -y
                      </code>
                    </p>
                    <p>
                      You might wonder that what is the differences between in
                      creating a server project with both of them because we
                      have just added an{" "}
                      <span>
                        <code className="bg-gray-500  font-bold text-xl lg:text-lg">
                          -y
                        </code>
                      </span>{" "}
                      at last. Lets us create a server to understand
                      practically.
                    </p>
                    <div className="border border-gray-800 mt-2 mb-2"></div>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">
                        {" "}
                        Creating a server using{" "}
                        <code className="bg-gray-500">npm init</code>
                      </p>
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="terminal"
                        style={docco}
                      >
                        {`  
  └─$ npm init              
  This utility will walk you through creating a package.json file.
  It only covers the most common items, and tries to guess sensible defaults.

  See 'npm help init' for definitive documentation on these fields
  and exactly what they do.

  Use 'npm install <pkg>' afterwards to install a package and
  save it as a dependency in the package.json file.

  Press ^C at any time to quit.
  package name: (folder_name_here) _
                `}
                      </SyntaxHighlighter>
                      <p>
                        It means it will ask you to write every field inside
                        terminal. After completing the steps, it should looks
                        like:
                      </p>
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="terminal"
                        style={docco}
                      >
                        {`  
  ┌──(niraj㉿kali)-[~/Desktop/js/nodejs/blog-mern-yt]
  └─$ npm init              
  This utility will walk you through creating a package.json file.
  It only covers the most common items, and tries to guess sensible defaults.

  See "npm help init" for definitive documentation on these fields
  and exactly what they do.

  Use "npm install <pkg>" afterwards to install a package and
  save it as a dependency in the package.json file.

  Press ^C at any time to quit.
  package name: (blog-mern-yt) 
  version: (1.0.0) 
  description: backend app for mern blog app
  entry point: (index.js) 
  test command: 
  git repository: 
  keywords: backend mern blog-app
  author: Niraj Chaurasiya
  license: (ISC) 
  About to write to /home/niraj/Desktop/js/nodejs/blog-mern-yt/package.json:

  {
    "name": "blog-mern-yt",
    "version": "1.0.0",
    "description": "backend app for mern blog app",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [
      "backend",
      "mern",
      "blog-app"
    ],
    "author": "Niraj Chaurasiya",
    "license": "ISC"
  }


  Is this OK? (yes) 

  ┌──(niraj㉿kali)-[~/Desktop/js/nodejs/blog-mern-yt]
  └─$ 
                `}
                      </SyntaxHighlighter>
                      <p>
                        When it prompts above, it means a package.json file has
                        been created inside the root foleder of the current
                        directory.
                      </p>
                      <p className="font-bold">
                        {" "}
                        A <code className="bg-gray-500">package.json</code> file
                        looks something like:
                      </p>{" "}
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="terminal"
                        style={docco}
                      >
                        {`  
  {
    "name": "blog-mern-yt",
    "version": "1.0.0",
    "description": "backend app for mern blog app",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [
      "backend",
      "mern",
      "blog-app"
    ],
    "author": "Niraj Chaurasiya",
    "license": "ISC"
  }
                `}
                      </SyntaxHighlighter>
                      <p className="font-bold">
                        Now, lets initialize it by adding{" "}
                        <span className="bg-gray-500">-y</span> at last.
                      </p>{" "}
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="terminal"
                        style={docco}
                      >
                        {`  
 ┌──(niraj㉿kali)-[~/Desktop/js/nodejs/blog-mern-yt]
 └─$ npm init -y
  Wrote to /home/niraj/Desktop/js/nodejs/blog-mern-yt/package.json:

  {
    "name": "blog-mern-yt",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  }

  ┌──(niraj㉿kali)-[~/Desktop/js/nodejs/blog-mern-yt]
  └─$ 
  `}
                      </SyntaxHighlighter>
                      <p className="font-bold">
                        Now, our package.json looks like:
                      </p>{" "}
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="terminal"
                        style={docco}
                      >
                        {`  
  {
    "name": "blog-mern-yt",
    "version": "1.0.0",
    "description": "",
    "main": "index.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1"
    },
    "keywords": [],
    "author": "",
    "license": "ISC"
  }
  `}
                      </SyntaxHighlighter>
                      <p>
                        In both the cases, it creates a package.json file but
                        one with default value and the other with user entered
                        value.
                      </p>
                      <p>
                        So, this is the main difference in creating a
                        package.json file with and without{" "}
                        <span className="bg-gray-500">-y</span> at last.
                      </p>
                      <div className="border border-gray-800 mt-2 mb-2"></div>
                      <p>
                        Now, that we have successfully created a package.json
                        file, lets create a basic backend server.
                      </p>
                      <p>
                        Inside the same folder, create an index.js file as
                        written inside the package.json as main file.
                      </p>
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="terminal"
                        style={docco}
                      >
                        {`  
  Root folder
  --- index.js
  --- package.json
  `}
                      </SyntaxHighlighter>
                      <p>We are going to make the server with ExpressJS.</p>
                      <p>
                        In case you don&apos;t know ExpressJS, it is a JS
                        library that helps to create servers with NodeJS{" "}
                      </p>
                      <p>
                        For more info:{" "}
                        <a
                          href="https://expressjs.com/"
                          target="_blank"
                          className="text-orange-500 underline"
                        >
                          ExpressJS Official website
                        </a>
                      </p>
                      <p>
                        Now, install express and nodemon using{" "}
                        <span className="bg-gray-500">
                          npm install express nodemon
                        </span>{" "}
                        by using terminal.
                      </p>
                      <p>
                        Open index.js file and write the following module code!
                      </p>
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="javascript"
                        style={docco}
                      >
                        {`  
  import express from "express";

  const PORT = 8000;
  const app = express();

  app.listen(PORT, () => {
    console.log("Backend running on + ", ${"PORT"});
  });
  `}
                      </SyntaxHighlighter>
                      <p>Now, open package.json and modify it.</p>
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="json"
                        style={docco}
                      >
                        {`  
  {
    "name": "backend",
    "version": "1.0.0",
    "description": "Backend for blog app",
    "main": "app.js",
    "type": "module",
    "scripts": {
      "start": "nodemon index.js" // changes here
    },
    "keywords": [],
    "author": "Niraj Chaurasiya",
    "license": "ISC",
    "dependencies": {
      "dotenv": "^16.4.5",
      "express": "^4.19.2",
      "nodemon": "^3.1.4"      
    },
    "devDependencies": {
      "@types/express": "^4.17.21"
    }
  }
  `}
                      </SyntaxHighlighter>
                      <p>
                        After making all the changes, run{" "}
                        <span className="bg-gray-500">npm start</span>.
                      </p>
                      <p>It should show:</p>
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="terminal"
                        style={docco}
                      >
                        {`  
  ┌──(niraj㉿kali)-[~/Desktop/js/nodejs/blog-mern-yt]
  └─$ npm start    

  > blog-mern-yt@1.0.0 start
  > nodemon index.js

  [nodemon] 3.1.4
  [nodemon] to restart at any time, enter "rs"
  [nodemon] watching path(s): *.*
  [nodemon] watching extensions: js,mjs,cjs,json
  [nodemon] starting node index.js
  Backend running on 8000
  `}
                      </SyntaxHighlighter>
                      <p>
                        Now, we have successfully created a basic backend server
                        with Express!
                      </p>
                      <p>
                        Open,{" "}
                        <a
                          className="text-orange-500 underline"
                          target="_blank"
                          href="http://localhost:8000"
                        >
                          http://localhost:8000
                        </a>
                        , and you should see,{" "}
                        <span className="bg-gray-700 px-1">cannot get /</span>
                      </p>
                    </div>
                  </div>
                </ul>
              </div>
              <div id="using-environment-file-professionally">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Using environment file professionally
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2 list-decimal pl-10">
                  <p className="font-bold">Why to use environment file?</p>
                  <p>
                    The answer is simple, we don&apos;t want to expose our
                    secret variables to public, right? Lets us suppose, you
                    created a mongoDB connection string from their website with
                    the help of your account. Being the owner, you don&apos;t
                    want to anyone to mess with your DB, right? But, if you just
                    put your connection string publicly in your project, than
                    anyone can mess with your DB.
                  </p>
                  <p>
                    Hence, there comes the use of environment variables. You can
                    simply write all your variables in this file and it will be
                    only available to you.{" "}
                    <span className="font-bold text-orange-500">
                      Interesting, isn&apos;t it?
                    </span>
                  </p>
                  <p>
                    Now, lets understand how we can configure environment
                    variables in our project.
                  </p>
                  <p>
                    First of all, to configure environment variables in our
                    project, we need to install a package, &quot;Dotenv&quot;.
                  </p>
                  <SyntaxHighlighter
                    customStyle={{ background: "black", color: "white" }}
                    language="terminal"
                    style={docco}
                  >
                    {`  
  npm install dotenv
  `}
                  </SyntaxHighlighter>
                  <p>
                    After installing dotenv package, we can use it in our
                    project with a line of code.
                  </p>
                  <p>Open index.js file, and update the code.</p>
                  <SyntaxHighlighter
                    customStyle={{ background: "black", color: "white" }}
                    language="javascript"
                    style={docco}
                  >
                    {`  
  import express from "express";
  import { configDotenv } from "dotenv"; // Add this line
  configDotenv(); // Add this line

  const PORT = process.env.PORT; // Update PORT
  const app = express();

  app.listen(PORT, () => {
    console.log("Backend running on + ", ${"PORT"});
  });
  `}
                  </SyntaxHighlighter>
                  <p>
                    After making all the changes, run{" "}
                    <span className="bg-gray-500">npm start</span> again.
                  </p>
                  <p>It should show same as previous:</p>
                  <SyntaxHighlighter
                    customStyle={{ background: "black", color: "white" }}
                    language="terminal"
                    style={docco}
                  >
                    {`  
  ┌──(niraj㉿kali)-[~/Desktop/js/nodejs/blog-mern-yt]
  └─$ npm start    

  > blog-mern-yt@1.0.0 start
  > nodemon index.js

  [nodemon] 3.1.4
  [nodemon] to restart at any time, enter "rs"
  [nodemon] watching path(s): *.*
  [nodemon] watching extensions: js,mjs,cjs,json
  [nodemon] starting node index.js
  Backend running on 8000
  `}
                  </SyntaxHighlighter>
                  <p className="text-orange-500 font-bold">#TIP</p>
                  <p>
                    The above code works great but there is one problem, when we
                    want to give access to any of the other file than index.js,
                    we need to again cnfigure add those two lines.
                  </p>
                  <p>So, whats the permanent solution here?🤔</p>
                  <p>
                    Here comes an interesting way, we need to make changes
                    inside our package.json file.
                  </p>
                  <p>Open your package.json and update the start command.</p>
                  <SyntaxHighlighter
                    customStyle={{ background: "black", color: "white" }}
                    language="terminal"
                    style={docco}
                  >
                    {`  
  {
    "name": "backend",
    "version": "1.0.0",
    "description": "Backend for blog app",
    "main": "app.js",
    "type": "module",
    "scripts": {
      "start": "nodemon -r dotenv/config --experimental-json-modules app.js" // changes here
    },
    "keywords": [],
    "author": "Niraj Chaurasiya",
    "license": "ISC",
    "dependencies": {
      "dotenv": "^16.4.5",
      "express": "^4.19.2",
      "mongoose": "^8.4.3",
      "nodemon": "^3.1.4"
    },
    "devDependencies": {
      "@types/express": "^4.17.21"
    }
  }
  `}
                  </SyntaxHighlighter>
                  <p>
                    This will solve the issue and works without importing dotenv
                    in every file.
                  </p>
                </ul>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <p className="font-bold text-xl">
                This blog is a solid overview about the content of the video,
                for full explaination about all the codes, refer the video
                embeded below!
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
                  src="https://www.youtube.com/embed/2-LwVEVcspk?si=DjJCBc1GdkGukK88"
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
