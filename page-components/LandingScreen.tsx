import Image from 'next/image';
import Link from 'next/link';

import { Illustration } from '../components/illustration';
import SocialIcons from '../components/social-icons';

export default function LandingScreen() {
  return (
    <div
      id="#"
      className="mx-auto flex h-screen max-w-lg flex-col items-start justify-center px-6 py-8 lg:max-w-screen-xl lg:flex-row lg:items-center lg:justify-center"
    >
      <div className="lg:order-2 ">
        <Illustration />
      </div>

      <div className="lg:order-1 ">
        <h1 className="text-6xl" style={{ fontFamily: 'League Spartan' }}>
          Pedro <br /> Brandão<b className="text-brown-beaver">.</b>
        </h1>
        <hr className="w-1/3 border-y-2 border-brown-beaver" />
        <h3 className="text-2xl">Frontend Developer</h3>
        <SocialIcons vertical={false} />
      </div>
    </div>
  );
}
