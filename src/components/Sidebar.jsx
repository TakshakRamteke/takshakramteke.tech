import { useState } from "react";

export default function Sidebar({ title }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 flex h-11 w-full animate-movedown items-center rounded-sm border-b border-black p-2 font-sans backdrop-blur-md lg:h-screen lg:w-11 lg:flex-col lg:border-b-0 lg:border-l">
      {open ? (
        <div
          className={`fixed top-0 bottom-0 right-0 h-screen w-screen animate-moveright overflow-hidden bg-black p-4`}
        >
          {/* <img src="/favicon.svg" className="w-1/12" /> */}
          <div className="flex items-center">
            <a
              className="text-xs font-medium uppercase text-white underline hover:text-purple-600 lg:text-sm"
              href="/"
            >
              takshakramteke.github.io
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="ml-auto h-7 w-7 lg:hidden"
              onClick={() => setOpen(!open)}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>

          <div className="mt-10 text-3xl uppercase italic text-white">
            <ul>
              <li className="flex items-center">
                <a href="/blogs" className="hover:underline">
                  Blogs
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-2 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </li>
              <li className="mt-2 flex items-center">
                <a href="/designs" className="hover:underline">
                  Designs
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-2 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </li>
              <li className="mt-2 flex items-center">
                <a href="/projects" className="hover:underline">
                  Projects
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-2 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </li>
              <li className="mt-2 flex items-center">
                <a href="/testimonials" className="hover:underline">
                  Testimonials
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-2 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </li>
              <li className="mt-2 flex items-center">
                <a href="/about" className="hover:underline">
                  About
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-2 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </li>
              <li className="mt-2 flex items-center">
                <a href="/contact" className="hover:underline">
                  Contact
                </a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="ml-2 h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </li>
            </ul>
          </div>

          <div></div>
        </div>
      ) : null}

      <div
        className={`grid h-11 place-content-center border-r border-black lg:w-11 lg:place-content-evenly lg:border-b ${
          title === "Testimonials"
            ? "lg:h-52"
            : title === "Blogs"
            ? "lg:h-40"
            : "lg:h-40"
        } ${open ? "text-white" : ""}`}
      >
        <p className="font-inter pr-2 text-center font-semibold uppercase lg:rotate-90 lg:p-1 lg:pr-0 lg:text-xl">
          {title}
        </p>
      </div>

      <div
        className={`ml-auto border-l border-black py-1 pl-2 pt-2 lg:mt-auto lg:border-l-0 lg:border-t lg:pl-0 ${
          open ? "border-white text-white lg:z-10" : ""
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-7 w-7"
          onClick={() => setOpen(!open)}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </nav>
  );
}
