import { useState } from "react";

export default function Sidebar({ title }) {
  const [open, setOpen] = useState(false);

  return (
    <nav className='w-full h-8 border-b lg:border-b-0 lg:w-11 lg:h-screen lg:border-l border-black lg:py-4 flex lg:flex-col items-center animate-fadein lg:animate-movedown'>
      <div className='font-inter pl-4 pr-4 py-1 font-bold uppercase lg:rotate-90 lg:mt-14 lg:text-2xl border-r border-black lg:px-8'>
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
