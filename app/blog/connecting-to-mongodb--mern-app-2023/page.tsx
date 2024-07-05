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
                MongoDB Connection
              </h1>
            </header>
            <div className="flex items-center gap-3 mb-2">
              <img className="w-10 h-10 rounded-full" src="/pp.jpg" alt="" />
              <div>
                <p className="font-bold text-lg">Niraj Chaurasiya</p>
                <p className="font-sans text-md">05 July 2024</p>
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
                src="/thumbnails/mern-app-2023/3.jpg"
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
                    <a href="#the-intro-to-connecting-cloud-mongodb-mern-blog-app">
                      The Introduction
                    </a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a href="#learning-outcomes-from-connecting-to-mongodb#">
                      Learning Outcomes
                    </a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a href="#getting-mongodb-connection-string">
                      Getting MongoDB connection string
                    </a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a href="#connecting-to-mongodb-cloud-from-backend-app">
                      Connecting to MongoDB cloud from NodeJS
                    </a>
                  </li>
                </ul>
              </div>
              <div id="the-intro-to-connecting-cloud-mongodb-mern-blog-app">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    The Introduction
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2">
                  <p>
                    The main part when making a full-stack project is its DB.
                    So, we are going to connect our backend application to
                    MongoDB.
                  </p>
                  <p>Lets directly jump into it.</p>
                </ul>
              </div>

              <div id="learning-outcomes-from-connecting-to-mongodb#">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Learning outcomes
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2 list-decimal pl-10">
                  <li>
                    We are going to create a new project in mongoDB cloud.
                  </li>
                  <li>Setting up the root user for cloud project.</li>
                  <li>Getting the connection string.</li>
                  <li>
                    Using the connection string to connect our app to MongoDB.
                  </li>
                </ul>
              </div>

              <div id="getting-mongodb-connection-string">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Getting MongoDB connection string
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2 list-decimal pl-10">
                  <p>
                    First of all, head to{" "}
                    <a
                      className="text-orange-500 underline"
                      href="https://cloud.mongodb.com"
                      target="_blank"
                    >
                      https://cloud.mongodb.com
                    </a>{" "}
                    , if you don&apos;t have a MongoDB account, then you should
                    have an account first. We are not going to discuss the
                    registration process as it is easy and you can create an
                    account with your Github, or Google account.
                  </p>
                  <p>
                    Now, after signing in, you will be navigated to the
                    dashboard or home page.
                  </p>
                  <p>
                    Inside the MongoDB logo, there is a box from where we can
                    create a new project, Click on that!
                  </p>
                  <p>
                    Now, you will get options to enter the project name, go and
                    fill that, and then click Next.
                  </p>
                  <p>
                    Hence, click on the big green button with text,{" "}
                    <span className="text-white cursor-pointer border border-green-600 px-2 py-1 rounded-lg">
                      Create Project
                    </span>
                    .
                  </p>
                  <p>
                    After clicking on the button, it will take some time to
                    create a project for you depending on the internet
                    connection.
                  </p>

                  <p className="font-bold text-lg">
                    Its time to create a cluster.
                  </p>
                  <p>
                    After creating a new project, it will redirect you to a page
                    where you can create a cluster, click on,{" "}
                    <span className="text-white cursor-pointer border border-green-600 px-2 py-1 rounded-lg">
                      Create
                    </span>
                    .
                  </p>
                  <p>
                    Now, you have to deploy your cluster, you might see three
                    options, M10, Serverless, and M10. We are going to use the
                    free version as it is free and will be enough for our
                    project. Choose on M10, write the cluster name, and click on
                    create deployement.
                  </p>
                  <p>
                    Again, the navigated page will provide you two options: the
                    first one is to add a connection IP address which will only
                    allow to do actions with your cluster from the added IP and
                    the second option is to create a database user in which you
                    can create a new user which will gain an access to the
                    created cluster with username and password.
                  </p>
                  <p className="text-yellow-500">
                    Note: only added IP address and user will be able to access
                    the project&apos;s cluster so choose wisely.
                  </p>
                  <p>
                    Now, close the dialog box, and come to the Databse tab after
                    adding the user and an IP address.
                  </p>
                  <div className="border border-gray-800 mt-2 mb-2"></div>
                  <p>
                    Click on connect button, a dialog box will popup with the
                    long connection string. It will look like this:
                    <br />
                    <span className="text-orange-500 font-semibold break-all">
                      {" "}
                      mongodb+srv://niraj:{"<password>"}
                      @cluster0.dibosvc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
                    </span>
                    <br />
                    where niraj = username, and {"<password>"} is the password
                    for this user.
                  </p>
                </ul>
              </div>

              <div id="connecting-to-mongodb-cloud-from-backend-app">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Connecting to MongoDB cloud from NodeJS
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2 list-decimal pl-10">
                  <p className="font-bold">
                    Now, after successfully getting the connection string, lets
                    move to the mongoDB connection part.
                  </p>
                  <div className="">
                    First of all come to the .env file inside the backend app,
                    and write a variable as
                    <SyntaxHighlighter
                      customStyle={{
                        background: "black",
                        color: "white",
                        margin: "10px 0",
                      }}
                      language="terminal"
                      style={docco}
                    >
                      {`  
  PORT=8000                 
  MONGO_DB_URI=mongodb+srv://niraj:<password>@cluster0.dibosvc.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
  # Make sure to replace the <password> with the real one
                `}
                    </SyntaxHighlighter>
                    <p className="mt-2">
                      So, we have successfully added the MONGO_DB_URI in our
                      .env file.
                    </p>
                    <p>
                      Now, our task is to connect our backend app to MongoDB
                      account. Make two folders as utils, and connection in your
                      root folder. Create constants.js in utils and conn.js in
                      connection folder.
                    </p>
                    <div className="border border-gray-800 mt-2 mb-2"></div>
                    <div className="flex flex-col gap-2">
                      <p className="font-bold">
                        Open constants.js and write the following line!
                      </p>
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="javascript"
                        style={docco}
                      >
                        {`  
  export const DBName = "new-yt-mern-blog-app";
                `}
                      </SyntaxHighlighter>
                      <p>Open conn.js and write</p>
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="terminal"
                        style={docco}
                      >
                        {`  
  import mongoose from "mongoose";
  import { DBName } from "../utils/constants.js";

  const connectDB = async () => {
    try {
      const connection = await mongoose.connect(
        \`\${process.env.MONGO_DB_URI}/\${DBName}\`
      );
      console.log(\`Database connected: \`, connection.connection.host);
    } catch (error) {
      console.log(\`Mongodb connection failed \`, error);
      process.exit(1);
    }
  };
  export default connectDB;
  `}
                      </SyntaxHighlighter>
                      <p>
                        If you are wondering without importing and writing
                        configDotenv inside our conn.js file and we are using a
                        environment variable, you should watch the second video
                        of this series on configuration part.
                      </p>
                      <p className="font-bold">
                        Come to <code className="bg-gray-500">app.js</code> and
                        write:
                      </p>{" "}
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="terminal"
                        style={docco}
                      >
                        {`  
  import express from "express";

  const PORT = process.env.PORT;
  const app = express();

  import connectDB from "./connection/conn.js";

  connectDB();

  app.listen(PORT, () => {
    console.log(\`Backend running on \${PORT}\`\);
  });
                `}
                      </SyntaxHighlighter>
                      <p className="font-bold">
                        Now, run <span className="bg-gray-500">npm start</span>{" "}
                        in the terminal. You should see:
                      </p>{" "}
                      <SyntaxHighlighter
                        customStyle={{ background: "black", color: "white" }}
                        language="terminal"
                        style={docco}
                      >
                        {`  
  ┌──(niraj㉿kali)-[~/…/js/reactjs/yt-mern-blog-app-new/backend]
  └─$ npm start    

  > backend@1.0.0 start
  > nodemon -r dotenv/config --experimental-json-modules app.js

  [nodemon] 3.1.4
  [nodemon] to restart at any time, enter \`rs\`
  [nodemon] watching path(s): *.*
  [nodemon] watching extensions: js,mjs,cjs,json
  [nodemon] starting \`node -r dotenv/config --experimental-json-modules app.js\`
  Backend running on 8000
  Database connected:  ac-q3o0xym-shard-00-01.v53dghk.mongodb.net
  `}
                      </SyntaxHighlighter>
                    </div>
                  </div>
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
                  src="https://www.youtube.com/embed/2WhrO_cJtE0?si=wW6qKc0_NGw7PM3P"
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
