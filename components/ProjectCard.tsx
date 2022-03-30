import { ProjectData } from '../types/projectdata';
import { IoLogoGithub } from 'react-icons/io';
import { AiOutlineLink } from 'react-icons/ai';
import Link from 'next/link';
import { LinkIcon } from './LinkIcon';
import Image from 'next/image';

interface Props {
  project: ProjectData;
  index: number;
}

export const ProjectCard: React.FC<Props> = (props) => {
  const { project, index } = props;
  let { type, title, description, tech, github, live, pic } = project;
  const length = tech.length - 1;

  if (!github) github = '';
  if (!live) live = '';
  if (!pic) pic = '';

  const odd = index % 2;
  return (
    <li
      role="listitem"
      key={`project-${title}-${index}`}
      className="group my-4 flex w-full transition-all duration-200 first:mt-8 last:mb-8 hover:-translate-y-1 hover:cursor-pointer md:relative md:items-center md:justify-between md:hover:translate-y-0"
    >
      <Link href={live} passHref>
        <a className="flex flex-row items-center">
          <div
            className={`z-10 rounded-lg bg-darker-purple px-6 pt-8 pb-4 md:bg-transparent md:px-0 md:shadow-none md:hover:shadow-none${
              odd == 1
                ? ' md:order-2 md:-translate-x-5 md:text-right'
                : ' md:translate-x-5'
            }`}
          >
            <h1 className="font-bold text-brown-beaver ">{type} </h1>
            <h2 className="font-league text-3xl font-bold tracking-widest transition-all group-hover:text-brown-beaver md:pb-4 md:group-hover:text-white">
              {title}
            </h2>
            <p className="rounded-lg bg-darker-purple py-4 text-left shadow-lg transition-all hover:shadow-xl md:mt-2 md:mb-4 md:max-w-md md:px-6">
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
            <div
              className={`bottom-0 flex pt-4 pb-2 ${
                odd == 1 && 'md:justify-end'
              }`}
            >
              {github != '' && (
                <LinkIcon Icon={<IoLogoGithub />} link={github} odd={odd} />
              )}

              {live != '' && (
                <LinkIcon Icon={<AiOutlineLink />} link={live} odd={odd} />
              )}
            </div>
          </div>
          <div
            className={`relative right-0 z-0 order-2 hidden items-center brightness-50 transition-all group-hover:brightness-100 md:flex ${
              odd == 1 ? ' md:-order-1 md:translate-x-5' : ' md:-translate-x-5'
            }`}
          >
            <Image src={pic} width={530} height={360} alt={`image-${pic}`} />
          </div>
        </a>
      </Link>
    </li>
  );
};
