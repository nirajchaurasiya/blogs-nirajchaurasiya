"use client";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import { useRouter } from "next/navigation";
export default function Page() {
  const router = useRouter();
  const jsCode = `
  const hours = document.querySelector("#hours");
  const startCustomTimerButton = document.querySelector(
    "#startCustomTimerButton"
  );
  
  function startCustomTimer() {
    // Get the selected values from the dropdowns
    const selectedHours = document.querySelector("#hours").value;
    const selectedMinutes = document.querySelector("#minutes").value * 5;
    console.log(selectedHours);
    console.log(selectedMinutes);
    // Convert hours and minutes to seconds
    const durationInSeconds = selectedHours * 3600 + selectedMinutes * 60;
  
    // Start the custom timer
    startTimer(durationInSeconds);
  }
  
  startCustomTimerButton.addEventListener("click", startCustomTimer);
  
  const optionsHTML = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 15, 20, 24]
    .map(
      (e) => \`
    <option key="\${e}" value="\${e}">
      \${e.toString().padStart(2, "0")}
    </option>
  \`
    )
    .join("");
  
  hours.insertAdjacentHTML("afterbegin", optionsHTML);
  
  const minutes = document.querySelector("#minutes");
  
  const minutesOptionsHTML = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
    .map(
      (e) => \`
    <option key="\${e}" value="\${e}">
      \${e * (5).toString().padStart(2, "0")}
    </option>
  \`
    )
    .join("");
  
  minutes.insertAdjacentHTML("afterbegin", minutesOptionsHTML);
  
  const timer = document.querySelector("#timer");
  const clock = document.querySelector("#clock");
  let currentTimerId; // Store the current timer ID
  
  function updateClock() {
    const getTime = new Date();
    let hours =
      getTime.getHours() >= 10 ? getTime.getHours() : getTime.getHours();
    let minutes =
      getTime.getMinutes() >= 10
        ? getTime.getMinutes()
        : "0" + getTime.getMinutes();
    let seconds =
      getTime.getSeconds() >= 10
        ? getTime.getSeconds()
        : "0" + getTime.getSeconds();
    let formatHours = hours > 12 ? hours - 12 : hours;
    formatHours = formatHours >= 10 ? formatHours : "0" + formatHours;
    let isAM_PM = hours > 12 ? "PM" : "AM";
    let timeInMinutesAndSeconds =
      formatHours + \`:\` + minutes + \`:\` + seconds + \` \` + isAM_PM;
  
    // Update the content of the #clock element
    clock.innerHTML = \`<span class="time-sign">\${timeInMinutesAndSeconds}</span>\`;
  }
  
  // Initial call to update the clock
  updateClock();
  
  setInterval(updateClock, 1000);
  
  // timer
  function startTimer(durationInSeconds) {
    // Clear the previous timer content
    timer.innerHTML = "";
  
    let timeRemaining = durationInSeconds;
  
    function updateTimer() {
      const hr =
        Math.floor(timeRemaining / 3600) > 9
          ? Math.floor(timeRemaining / 3600)
          : "0" + Math.floor(timeRemaining / 3600);
  
      let minutes = Math.floor((timeRemaining % 3600) / 60);
      const seconds =
        timeRemaining % 60 < 10 ? "0" + (timeRemaining % 60) : timeRemaining % 60;
  
      timer.innerHTML = timeRemaining
        ? \`<span>\${hr}:\${
            minutes < 10 ? \`0\${minutes}\` : minutes
          }:\${seconds}</span>\`
        : \`<span class="message-sign">Select  <span>a timer</span> </span>\`;
  
      if (timeRemaining > 0) {
        timeRemaining--;
        currentTimerId = setTimeout(updateTimer, 1000);
      } else {
        playAlarm();
      }
    }
  
    // Clear the previous timer if it exists
    if (currentTimerId) {
      clearTimeout(currentTimerId);
    }
  
    updateTimer();
  }
  
  startTimer();
  
  function playAlarm() {
    const alarm = new Audio("alarm.mp3");
    alarm.play();
  }
    `;
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
                Building a Timer Clock
              </h1>
            </header>
            <div className="flex items-center gap-3 mb-2">
              <img className="w-10 h-10 rounded-full" src="/pp.jpg" alt="" />
              <div>
                <p className="font-bold text-lg">Niraj Chaurasiya</p>
                <p className="font-sans text-md">03 June 2024</p>
              </div>
            </div>
            <div className="pb-2 flex gap-2">
              <p>Visit at:</p>
              <a
                target="_blank"
                className="text-orange-500 font-bold"
                href="https://timer.nirajchaurasiya.com"
              >
                https://timer.nirajchaurasiya.com
              </a>
            </div>
            <figure>
              <img
                className="w-full object-cover rounded-"
                src="/thumbnails/timer-app/timer-ss.png"
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
                    <a href="#downloadable-assets">Downloadable Assets</a>
                  </li>

                  <li className="cursor-pointer hover:underline">
                    <a href="#initializing-a-project">Initialize a project</a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a href="#writing-html-code">
                      Structuring the site with HTML
                    </a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a href="#styling-with-css">Styling with CSS</a>
                  </li>
                  <li className="cursor-pointer hover:underline">
                    <a href="#adding-logic-with-js">
                      Adding logic with JavaScript
                    </a>
                  </li>
                </ul>
              </div>
              <div id="downloadable-assets">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Downloadable Assets
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2">
                  <p>For this project, we need to download two assets.</p>
                  <p>
                    The first one is the logo, and the second is the alarm
                    sound.{" "}
                    <span className="text-yellow-500">
                      Download them in your root folder!
                    </span>
                  </p>
                  <p>
                    Download alarm sound,{" "}
                    <a
                      className="underline text-orange-500"
                      href="/thumbnails/timer-app/alarm.mp3"
                      download
                    >
                      here
                    </a>
                  </p>
                  <p>
                    Download logo,{" "}
                    <a
                      className="underline text-orange-500"
                      href="/thumbnails/timer-app/logo.png"
                      download
                    >
                      here
                    </a>
                  </p>
                </ul>
              </div>

              <div className="initializing-a-project">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Initializing a project
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2">
                  <p>
                    Now, you have done downloading with the required assets from
                    above.
                  </p>
                  <p>Its time to initialize a project.</p>
                  <p>
                    In the same folder where you download the both assets, make
                    three files as{" "}
                    <span className="bg-gray-600 pl-1 pr-1">index.html</span>
                    {", "}
                    <span className="bg-gray-600 pl-1 pr-1">index.css</span>
                    {", "}
                    <span className="bg-gray-600 pl-1 pr-1">index.js</span>.
                  </p>
                  <p>Such that:</p>
                  <img
                    className="mt-2"
                    src="/thumbnails/timer-app/file-struct.png"
                    alt=""
                  />
                </ul>
              </div>

              <div id="writing-html-code">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Structuring the site with HTML
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2">
                  <p>
                    Now that we are done with downloading assets and
                    initializing a project, lets create the structure with HTML.
                  </p>
                  <p>
                    Firstly, go inside index.html file and write the basic HTML
                    strucuture code.
                  </p>
                  <div className="flex flex-col gap-2">
                    <SyntaxHighlighter
                      customStyle={{ background: "black", color: "white" }}
                      language="c"
                      style={docco}
                    >
                      {`  
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="index.css" />
    <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Timer-App</title>
  </head>
  <body>
    
  </body>
  <script src="index.js"></script>
</html>

                `}
                    </SyntaxHighlighter>
                  </div>
                  <p>
                    In the above code, we also include{" "}
                    <span className="bg-gray-600 pl-1 pr-1">index.css</span> and{" "}
                    <span className="bg-gray-600 pl-1 pr-1">index.js</span>{" "}
                    along with the{" "}
                    <span className="bg-gray-600 pl-1 pr-1">logo</span>.
                  </p>
                  <p>
                    Now, we will create a div with class name, container with
                    the heading inside the body. We also added two div as id
                    clock and timer. The div with ID clock will be responsible
                    for showing the current time.
                    <br />
                    And, the div with ID timer will be responsible for fetching
                    the time dynamically set by user and showing the timer in
                    decreasing format.
                  </p>

                  <div className="flex flex-col gap-2">
                    <SyntaxHighlighter
                      customStyle={{ background: "black", color: "white" }}
                      language="c"
                      style={docco}
                    >
                      {`  
<div id="container">
    <h3 class="top-msg">Welcome to the Timer-App👋</h3>
    <div id="clock"></div>
    <div id="timer"></div>
</div>

                `}
                    </SyntaxHighlighter>
                  </div>
                  <p>
                    Now, we will add a div with class name dropdown after the
                    div with ID timer. This will be responsible for all the
                    actions that user can perform like setting up hours,
                    minutes, and start a timer.
                  </p>
                  <p>The code looks like:</p>
                  <div className="flex flex-col gap-2">
                    <SyntaxHighlighter
                      customStyle={{ background: "black", color: "white" }}
                      language="c"
                      style={docco}
                    >
                      {`  
<div class="dropdown">
    <label for="hours">Hours:</label>
        <select id="hours">
            <!-- Add hours dynamically -->
        </select>

    <label for="minutes">Minutes:</label>
        <select id="minutes">
            <!-- Add minutes dynamically -->
        </select>

    <button class="animated-button" id="startCustomTimerButton">
        <svg
          viewBox="0 0 24 24"
          class="arr-2"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>
        <span class="text">Set Timer</span>
        <span class="circle"></span>
        <svg
          viewBox="0 0 24 24"
          class="arr-1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
          ></path>
        </svg>
    </button>
</div>

                `}
                    </SyntaxHighlighter>
                  </div>
                  <header className="not-format">
                    <h1 className="text-1xl font-extrabold leading-tight lg:text-2xl dark:text-white">
                      We are going to add hours and minutes options dynamically
                      with JS.
                    </h1>
                  </header>
                  <p>The final HTML codes look like:</p>
                  <div className="flex flex-col gap-2">
                    <SyntaxHighlighter
                      customStyle={{ background: "black", color: "white" }}
                      language="c"
                      style={docco}
                    >
                      {`  
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="stylesheet" href="index.css" />
    <link rel="shortcut icon" href="logo.png" type="image/x-icon" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Timer-App</title>
  </head>
  <body>
    <div id="container">
      <h3 class="top-msg">Welcome to the Timer-App👋</h3>
      <div id="clock"></div>
      <div id="timer"></div>

      <div class="dropdown">
        <label for="hours">Hours:</label>
        <select id="hours">
          <!-- Add hours dynamically -->
        </select>

        <label for="minutes">Minutes:</label>
        <select id="minutes">
          <!-- Add minutes dynamically -->
        </select>

        <button class="animated-button" id="startCustomTimerButton">
          <svg
            viewBox="0 0 24 24"
            class="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
          <span class="text">Set Timer</span>
          <span class="circle"></span>
          <svg
            viewBox="0 0 24 24"
            class="arr-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  </body>
  <script src="index.js"></script>
</html>
                `}
                    </SyntaxHighlighter>
                  </div>
                </ul>
              </div>
              <div id="styling-with-css">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Styling with CSS
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2">
                  <p>
                    CSS codes are simple to understand, so I will not explain
                    those. I will provide you with the code directly.
                  </p>
                  <p>Below is the all CSS codes.</p>
                  <div className="flex flex-col gap-2">
                    <SyntaxHighlighter
                      customStyle={{ background: "black", color: "white" }}
                      language="css"
                      style={docco}
                    >
                      {`  
body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: rgb(0, 0, 0);
    color: white;
    font-family: Arial, sans-serif;
  }
  
  #container {
    background-color: #0d0d0c;
    width: 80vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    box-shadow: rgba(50, 51, 50, 0.888) 0px 7px 29px 0px;
  }
  
  #clock,
  #timer {
    text-align: center;
    font-size: 100px;
  }
  
  @media (max-width: 1000px) {
    #clock,
    #timer {
      text-align: center;
      font-size: 80px;
    }
  }
  
  @media (max-width: 815px) {
    #clock,
    #timer {
      text-align: center;
      font-size: 60px;
    }
  }
  
  @media (max-width: 610px) {
    #clock,
    #timer {
      text-align: center;
      font-size: 40px;
    }
  }
  
  @media (max-width: 560px) {
    #clock,
    #timer {
      text-align: center;
      font-size: 30px;
    }
    .dropdown {
      display: flex;
      flex-direction: column;
      gap: 20px;
      align-items: center;
      margin-top: 20px;
    }
    select {
      padding: 10px 40px !important;
      border: 2px solid rgb(255, 255, 255);
      border-radius: 10px;
      background-color: white;
      color: black;
      margin-right: 10px;
    }
    .message-sign {
      color: rgb(253, 192, 202);
      text-shadow: 1px 1px 0 rgb(236, 159, 172) !important;
    }
    .message-sign span {
      color: rgb(104, 173, 252);
      text-shadow: 1px 1px 0 rgb(81, 135, 160) !important;
    }
    .time-sign {
      color: rgb(215, 146, 194);
      text-shadow: 1px 1px 0 rgb(160, 81, 81) !important;
    }
    .dropdown {
      text-shadow: 2px 2px 0 rgb(100, 97, 97);
    }
  }
  
  #clock span,
  #timer span {
    font-weight: 800;
  }
  
  .animated-button {
    position: relative;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 10px 36px;
    border: 4px solid;
    border-color: transparent;
    font-size: 16px;
    background-color: inherit;
    border-radius: 100px;
    font-weight: 600;
    color: #44d52a;
    box-shadow: 0 0 0 2px #44d52a;
    cursor: pointer;
    overflow: hidden;
    transition: all 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  .animated-button svg {
    position: absolute;
    width: 24px;
    fill: #44d52a;
    z-index: 9;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  .animated-button .arr-1 {
    right: 16px;
  }
  
  .animated-button .arr-2 {
    left: -25%;
  }
  
  .animated-button .circle {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 20px;
    height: 20px;
    background-color: #44d52a;
    border-radius: 50%;
    opacity: 0;
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  .animated-button .text {
    position: relative;
    z-index: 1;
    transform: translateX(-12px);
    transition: all 0.8s cubic-bezier(0.23, 1, 0.32, 1);
  }
  
  .animated-button:hover {
    box-shadow: 0 0 0 12px transparent;
    color: #212121;
    border-radius: 12px;
  }
  
  .animated-button:hover .arr-1 {
    right: -25%;
  }
  
  .animated-button:hover .arr-2 {
    left: 16px;
  }
  
  .animated-button:hover .text {
    transform: translateX(12px);
  }
  
  .animated-button:hover svg {
    fill: #212121;
  }
  
  .animated-button:active {
    scale: 0.95;
    box-shadow: 0 0 0 4px #44d52a;
  }
  
  .animated-button:hover .circle {
    width: 220px;
    height: 220px;
    opacity: 1;
  }
  
  .dropdown {
    display: flex;
    align-items: center;
    margin-top: 20px;
  }
  
  label {
    margin-right: 5px;
    font-size: 1em;
    color: white;
  }
  
  select {
    padding: 10px;
    border: 2px solid rgb(255, 255, 255);
    border-radius: 10px;
    background-color: white;
    color: black;
    margin-right: 10px;
  }
  
  button.startCustomTimer {
    padding: 10px 20px;
    border-radius: 20px;
  }
  .message-sign {
    color: rgb(253, 192, 202);
    text-shadow: 4px 2px 0 rgb(236, 159, 172);
  }
  .message-sign span {
    color: rgb(104, 173, 252);
    text-shadow: 4px 2px 0 rgb(81, 135, 160);
  }
  .time-sign {
    color: rgb(215, 146, 194);
    text-shadow: 4px 2px 0 rgb(160, 81, 81);
  }
  .dropdown {
    text-shadow: 2px 2px 0 rgb(100, 97, 97);
  }
  
  .top-msg {
    font-size: 30px;
    color: #44d52a;
    text-align: center;
  }
`}
                    </SyntaxHighlighter>
                  </div>
                </ul>
              </div>
              <div id="adding-logic-with-js">
                <header className="lg:mb-4 not-format">
                  <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                    Adding logic with JS!
                  </h1>
                </header>
                <ul className="border rounded-md border-gray-700 p-5 flex flex-col gap-2">
                  <p>
                    To understand the JS codes in-depth, please watch the video
                    embeded below.
                  </p>
                  <p>For now, I will write all the JS code together!</p>
                  <SyntaxHighlighter
                    customStyle={{ background: "black", color: "white" }}
                    language="js"
                    style={docco}
                  >
                    {jsCode}
                  </SyntaxHighlighter>
                </ul>
              </div>
            </div>
            <div className="mt-4 flex flex-col gap-4">
              <p className="font-bold text-xl">
                I hope you have gain a solid understanding on making a timer app
                from scratch.
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
                  href="https://twitter.com/@loveforrobotics"
                >
                  https://twitter.com/@niraj.chaurasiya
                </a>
              </p>
            </div>
            <div>
              <header className="lg:mb-4 mt-6 not-format">
                <h1 className="mb-4 text-1xl font-extrabold leading-tight lg:mb-4 lg:text-2xl dark:text-white">
                  Video on this project
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
                {["html", "css", "js", "timer-app"].map((e, index) => (
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
