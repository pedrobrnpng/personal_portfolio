export default function Layout({ children }: any) {
  return (
    <div className="relative z-20 bg-dark-purple pt-24 shadow-2xl">
      <div className="m-auto px-6 py-4 lg:max-w-screen-lg lg:py-12">
        {children}
      </div>
    </div>
  );
}
