import { useState } from "react";

export default function Sidebar({ title }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className='w-full h-8 border-b lg:border-b-0 lg:w-11 lg:h-screen lg:border-l border-black lg:py-4 flex lg:flex-col items-center animate-fadein lg:animate-movedown'>
      <div
        className={`${
          open
            ? "bg-black z-10 shadow rounded-md w-full h-screen p-4 px-7 mt-auto rounded-tl-none rounded-bl-none animate-moveright"
            : "hidden"
        }`}>
        {/* Homepage link */}
        <div className='text-white flex flex-col h-full'>
          <a
            href='/'
            className='text-white underline font-inter flex items-end'>
            takshakramteke.tech
            <img
              src='/favicon.svg'
              className='w-6 h-6 ml-auto'
              alt='brand logo'
            />
          </a>

          {/* Nav section */}
          <ul className='mt-14'>
            <li>
              <a
                href='/blogs'
                className='flex items-center font-inter uppercase text-3xl my-1 hover:underline'>
                Blog's
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-8 h-8 ml-2'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href='/projects'
                className='flex items-center font-inter uppercase text-3xl my-1 hover:underline'>
                Project's
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-8 h-8 ml-2'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href='/designs'
                className='flex items-center font-inter uppercase text-3xl my-1 hover:underline'>
                Design's
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-8 h-8 ml-2'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href='/testimonials'
                className='flex items-center font-inter uppercase text-3xl my-1 hover:underline'>
                Testimonials
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-8 h-8 ml-2'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href='/about'
                className='flex items-center font-inter uppercase text-3xl my-1 hover:underline'>
                About
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-8 h-8 ml-2'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  />
                </svg>
              </a>
            </li>

            <li>
              <a
                href='/contact'
                className='flex items-center font-inter uppercase text-3xl my-1 hover:underline'>
                contact
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-8 h-8 ml-2'>
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  />
                </svg>
              </a>
            </li>
          </ul>

          {/* Decoration material */}
          <div className='mt-auto ml-auto'>
            <p className='text-right text-[.6rem]'>2022 ©</p>
            <img
              src='/assets/trademark.svg'
              className='w-[155px]'
              alt='Takshaks seal'
            />
          </div>
        </div>
      </div>
      <div
        className={`font-inter pl-4 pr-4 py-1 font-bold uppercase lg:rotate-90 ${
          title == "Testimonials" ? "lg:mt-20" : "lg:mt-14"
        } lg:text-2xl border-r border-black lg:px-8 fixed`}>
        {title}
      </div>
      <div
        className='ml-auto px-4 lg:mt-auto lg:ml-0 lg:border-t lg:pt-2 lg:px-0 lg:border-black lg:text-2xl border-l lg:border-l-0 border-black'
        onClick={() => setOpen(!open)}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='w-7 h-7'>
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'></path>
        </svg>
      </div>
    </nav>
  );
}
