export default function Layout({ children }: any, id: string) {
  return (
    <div id={id} className="relative z-20 bg-dark-purple shadow-2xl">
      <div className="m-auto px-6 py-4 lg:max-w-screen-lg">{children}</div>
    </div>
  );
}
