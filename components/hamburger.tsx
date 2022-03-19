export const Hamburger = () => {
  return (
    <div className="absolute block w-5 -translate-x-1/2 -translate-y-1/2 transform">
      <span className="sr-only">Open main menu</span>
      <span
        aria-hidden="true"
        className="absolute top-0 block h-0.5 w-5 transform bg-current transition duration-500 ease-in-out"
      ></span>
      <span
        aria-hidden="true"
        className="absolute top-2 block h-0.5 w-5 transform   bg-current transition duration-500 ease-in-out"
      ></span>
      <span
        aria-hidden="true"
        className="absolute top-4 block h-0.5 w-5 transform bg-current  transition duration-500 ease-in-out"
      ></span>
    </div>
  );
};
