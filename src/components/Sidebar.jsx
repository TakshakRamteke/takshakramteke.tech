import { useState } from "react";

export default function Sidebar({ title }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="flex h-11 w-full animate-movedown items-center rounded-sm border-b border-black p-2 lg:h-screen lg:w-11 lg:flex-col lg:border-b-0 lg:border-l">
      {open ? (
        <div className={`fixed inset-0 h-screen w-screen bg-black`}></div>
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
        <p className="pr-2 text-center font-inter font-semibold uppercase lg:rotate-90 lg:p-1 lg:pr-0 lg:text-xl">
          {title}
        </p>
      </div>

      <div
        className={`ml-auto border-l border-black py-1 pl-2 pt-2 lg:mt-auto lg:border-l-0 lg:border-t lg:pl-0 ${
          open ? "z-10 border-white text-white" : ""
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
