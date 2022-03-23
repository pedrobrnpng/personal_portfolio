import { ProjectData } from '../types/projectdata';
import { IoLogoGithub } from 'react-icons/io';
import { AiOutlineLink } from 'react-icons/ai';
import Link from 'next/link';
import { LinkIcon } from './LinkIcon';
import Image from 'next/image';

export default function ProjectCard(
  { type, title, description, tech, github, live, pic }: ProjectData,
  index: number
) {
  const length = tech.length - 1;
  return (
    <li
      role="listitem"
      key={`project-${title}-${index}`}
      className="group my-4 flex w-full first:mt-8 last:mb-8 hover:cursor-pointer md:relative md:items-center md:justify-between"
    >
      <div className="z-10 flex md:relative">
        <Link href="/project/aasm" passHref>
          <div className="rounded-lg bg-darker-purple px-6 pt-8 pb-4 shadow-lg transition-all hover:shadow-xl md:bg-transparent md:shadow-none md:hover:shadow-none">
            <h1 className="font-bold text-brown-beaver ">{type} </h1>
            <h2 className="md:group-hover:text-whitegroup-hover:text-brown-beaver font-league text-3xl font-bold transition-all md:pb-4">
              {title}
            </h2>
            <p className="rounded-lg bg-darker-purple py-4 md:mt-2 md:mb-4 md:max-w-md md:px-6">
              {description}
            </p>
            <ul role="list" className="inline py-2">
              {tech.map((e, index, key) => {
                return (
                  <li
                    role="listitem"
                    key={`technology-${e}-${key}`}
                    className="inline px-2 text-brown-beaver first:pl-0 last:pr-0"
                  >
                    {e} {index < length && '-'}
                  </li>
                );
              })}
            </ul>
            <div className="bottom-0 flex pt-4 pb-2">
              <LinkIcon Icon={<IoLogoGithub />} link={github} />
              <LinkIcon Icon={<AiOutlineLink />} link={live} />
            </div>
          </div>
        </Link>
      </div>
      <div className="right-0 hidden brightness-50 transition-all group-hover:brightness-100 md:absolute md:flex">
        <Image src={pic} width={530} height={360} alt={`image-${pic}`} />
      </div>
    </li>
  );
}
