import { AiOutlineLink } from 'react-icons/ai';
import { Illustration } from '../components/illustration';
import { LinkIcon } from '../components/LinkIcon';
import SocialIcons from '../components/social-icons';

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="sticky bottom-0 z-10 flex min-h-screen items-center justify-center bg-brown-beaver"
    >
      <div className="mx-4 my-4 flex flex-col items-center bg-dark-purple py-8 px-6 lg:flex-row lg:px-16">
        <div className="max-w-md text-lg">
          <h5 className="font-league text-3xl font-bold ">
            Want to work with me?
          </h5>
          <p className="pt-4 pb-2">
            Send me an{' '}
            <a
              className="underline hover:text-brown-beaver"
              href="mailto:hello@dev-pedrobrandao.com"
            >
              email
            </a>{' '}
            or you can also contact me on social media
          </p>
          <SocialIcons vertical={false} />
          <p className="pt-6 pb-2">Feel free to check my Curriculum as well</p>
          <LinkIcon Icon={<AiOutlineLink />} link={'/CV_Pedro_Brandao.pdf'} />
        </div>
        <div>
          <Illustration />
        </div>
      </div>
    </section>
  );
}
