import { Illustration } from '../components/illustration';
import SocialIcons from '../components/social-icons';

export default function LandingScreen() {
  return (
    <div className="relative z-20 bg-dark-purple">
      <div
        id="#"
        className="relative z-20 mx-auto flex h-screen max-w-lg flex-col items-start justify-center  px-6 py-8 lg:max-w-screen-xl lg:flex-row lg:items-center lg:justify-center"
      >
        <div className="lg:order-2 ">
          <Illustration />
        </div>

        <div className="lg:order-1 ">
          <h1 className="py-2 font-league text-6xl md:text-8xl">
            Pedro <br /> Brandão<b className="text-brown-beaver">.</b>
          </h1>
          <hr className="w-1/3 border-t-4 border-brown-beaver pt-2 pb-1" />
          <h3 className="pt-2 text-2xl md:text-4xl">Full Stack Developer</h3>
          <SocialIcons vertical={false} />
        </div>
      </div>
    </div>
  );
}
