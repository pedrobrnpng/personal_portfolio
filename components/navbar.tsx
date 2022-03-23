import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrollDown, setScrollDown] = useState(true);
  const [pageTop, setPageTop] = useState(true);

  const links = [
    { name: 'Home', url: '#' },
    { name: 'About Me', url: '#aboutme' },
    { name: 'Work', url: '#work' },
    { name: 'Contact', url: '#contact' },
  ];

  if (typeof window !== 'undefined') {
    let lastScrollY = window.scrollY;

    window.addEventListener('scroll', () => {
      if (lastScrollY < window.scrollY) {
        setScrollDown(false);
      } else {
        setScrollDown(true);
      }

      if (window.scrollY == 0) {
        setPageTop(true);
      } else {
        setPageTop(false);
      }

      lastScrollY = window.scrollY;
    });
  }

  return (
    <nav
      className={`${!scrollDown && '-translate-y-24 shadow-none'} ${
        !pageTop && 'shadow-xl'
      } fixed top-0 left-0 z-50 h-24 w-screen bg-dark-purple transition-all duration-200`}
    >
      <div className="mx-auto flex h-full w-screen max-w-screen-xl items-center justify-between px-6 py-8">
        <Link href={'#'}>
          <a className="flex justify-start">
            <svg
              width="75"
              height="40"
              viewBox="0 0 76 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.88 0.399998V40H9.904V25.312H15.328C23.056 25.312 28.864 20.752 28.864 12.592C28.864 4.384 23.056 0.399998 15.328 0.399998H0.88ZM9.904 18.112V7.6H12.448C16 7.6 19.36 8.8 19.36 12.88C19.36 16.912 16 18.112 12.448 18.112H9.904ZM32.8488 0.399998V40H47.8728C56.0808 40 60.8328 35.488 60.8328 28.96C60.8328 22.576 57.3288 19.84 52.3848 18.976C55.7448 17.248 57.3288 14.128 57.3288 10.48C57.3288 2.944 51.9528 0.399998 45.1368 0.399998H32.8488ZM41.8728 15.904V7.36H42.5928C46.5288 7.36 48.5928 8.56 48.5928 11.392C48.5928 14.704 46.4808 15.904 42.5928 15.904H41.8728ZM41.8728 33.04V23.68H44.7048C48.9768 23.68 51.3288 24.976 51.3288 28.624C51.3288 31.744 48.9768 33.04 44.7048 33.04H41.8728Z"
                fill="white"
              />
              <path
                d="M70.2895 29.728C67.2655 29.728 64.8175 32.176 64.8175 35.248C64.8175 38.272 67.2655 40.72 70.2895 40.72C73.3615 40.72 75.8095 38.272 75.8095 35.248C75.8095 32.176 73.3615 29.728 70.2895 29.728Z"
                fill="#A8806B"
              />
            </svg>
          </a>
        </Link>
        <div className="flex focus:outline-none focus-visible:outline-none lg:hidden">
          <button
            className="transition-all focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="relative h-10 w-10 bg-darker-purple focus:outline-none">
              <span className="sr-only">Open main menu</span>
              <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-2 transform focus:outline-none">
                <span
                  aria-hidden="true"
                  className={`
        ${isOpen ? 'translate-y-2 rotate-45' : 'translate-y-0 rotate-0'}
        absolute top-0 block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out`}
                />
                <span
                  aria-hidden="true"
                  className={`
        ${isOpen && 'opacity-0'}
        absolute top-2 block h-0.5 w-5 transform  bg-current transition duration-500 ease-in-out`}
                />
                <span
                  aria-hidden="true"
                  className={`
        ${isOpen ? '-translate-y-2 -rotate-45' : 'translate-y-0 rotate-0'}
        absolute top-4 block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out`}
                />
              </div>
            </div>
          </button>
        </div>
        <div className="hidden justify-end font-league text-2xl lg:flex">
          <ul className="flex">
            {links.map(({ name, url }, key) => {
              return (
                <li
                  key={key}
                  className="px-2 tracking-wider transition-all duration-200 hover:text-brown-beaver"
                  onClick={() => setIsOpen(!open)}
                >
                  <Link href={url}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>

      {isOpen && (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-dark-purple">
          {/* <div className="flex justify-center">
            <svg
              width="76"
              height="41"
              viewBox="0 0 76 41"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.88 0.399998V40H9.904V25.312H15.328C23.056 25.312 28.864 20.752 28.864 12.592C28.864 4.384 23.056 0.399998 15.328 0.399998H0.88ZM9.904 18.112V7.6H12.448C16 7.6 19.36 8.8 19.36 12.88C19.36 16.912 16 18.112 12.448 18.112H9.904ZM32.8488 0.399998V40H47.8728C56.0808 40 60.8328 35.488 60.8328 28.96C60.8328 22.576 57.3288 19.84 52.3848 18.976C55.7448 17.248 57.3288 14.128 57.3288 10.48C57.3288 2.944 51.9528 0.399998 45.1368 0.399998H32.8488ZM41.8728 15.904V7.36H42.5928C46.5288 7.36 48.5928 8.56 48.5928 11.392C48.5928 14.704 46.4808 15.904 42.5928 15.904H41.8728ZM41.8728 33.04V23.68H44.7048C48.9768 23.68 51.3288 24.976 51.3288 28.624C51.3288 31.744 48.9768 33.04 44.7048 33.04H41.8728Z"
                fill="white"
              />
              <path
                d="M70.2895 29.728C67.2655 29.728 64.8175 32.176 64.8175 35.248C64.8175 38.272 67.2655 40.72 70.2895 40.72C73.3615 40.72 75.8095 38.272 75.8095 35.248C75.8095 32.176 73.3615 29.728 70.2895 29.728Z"
                fill="#A8806B"
              />
            </svg>
          </div> */}
          <ul className="flex flex-col py-6 font-league text-2xl">
            {links.map(({ name, url }, key) => {
              return (
                <li
                  key={key}
                  className="bold px-2 py-4 transition-all duration-200 hover:text-brown-beaver"
                  onClick={() => setIsOpen(!open)}
                >
                  <Link href={url}>{name}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </nav>
  );
}
