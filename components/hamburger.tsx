export const Hamburger = (isOpen: boolean) => {
  return (
    <div className="relative h-10 w-10 bg-black focus:outline-none">
      <span className="sr-only">Open main menu</span>
      <div className="absolute left-1/2 top-1/2 block w-5 -translate-x-1/2 -translate-y-1/2 transform">
        <span
          aria-hidden="true"
          className={`
        ${isOpen ? 'rotate-45' : 'translate-y-0 rotate-0'}
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
        ${isOpen ? '-rotate-45' : 'translate-y-0 rotate-0'}
        absolute top-4 block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out`}
        />
      </div>
    </div>
  );
};
