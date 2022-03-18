import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: 'Home', url: '#' },
    { name: 'About Me', url: '#aboutme' },
    { name: 'Work', url: '#work' },
    { name: 'Contact', url: '#contact' },
  ];

  return (
    <nav className="container fixed top-0 left-0 z-50 w-screen">
      {!isOpen && (
        <div className="flex w-screen items-center justify-between px-6 py-8">
          <div className="flex justify-start">
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
          </div>
          <div className="flex lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="hidden justify-end lg:flex">
            <ul className="flex">
              {links.map(({ name, url }, key) => {
                return (
                  <li key={key} className="bold px-2">
                    <Link href={url}>{name}</Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      )}

      {isOpen && (
        <div className="flex h-screen w-screen flex-col items-center justify-center bg-dark-purple">
          <div className="fixed top-0 right-0 items-center px-4 py-8">
            <button onClick={() => setIsOpen(!isOpen)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <div className="flex justify-center">
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
          </div>
          <ul className="flex flex-col">
            {links.map(({ name, url }, key) => {
              return (
                <li key={key} className="bold px-2">
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
