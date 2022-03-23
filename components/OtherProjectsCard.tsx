import { AiOutlineFolder, AiOutlineLink } from 'react-icons/ai';
import { ProjectData } from '../types/projectdata';
import { LinkIcon } from './LinkIcon';
import { RiGithubLine } from 'react-icons/ri';

export default function OtherProjectCard(
  { type, title, description, tech, github, live, pic }: ProjectData,
  index: number
) {
  let length = tech.length;
  return (
    <div className="group relative max-h-min min-h-fit rounded-md bg-darker-purple px-6 pt-8 pb-16 shadow-lg transition-all hover:-translate-y-1 hover:cursor-pointer hover:shadow-xl">
      <div className="flex items-center justify-between pb-4">
        <AiOutlineFolder className="text-6xl text-brown-beaver" />
        <ul className="">
          {github !== '' && (
            <li className="inline-flex">
              <LinkIcon link={github} Icon={<RiGithubLine />}></LinkIcon>
            </li>
          )}
          {live !== '' && (
            <li className="inline-flex">
              <LinkIcon link={live} Icon={<AiOutlineLink />}></LinkIcon>
            </li>
          )}
        </ul>
      </div>
      <div>
        <h3 className="font-league text-3xl font-bold tracking-wider transition-all group-hover:text-brown-beaver">
          {title}
        </h3>
        <p className="pt-4 pb-8 text-sm">{description}</p>
      </div>
      <ul role="list" className="absolute bottom-0 inline py-8">
        {tech.map((e, index, key) => {
          return (
            <li
              role="listitem"
              key={`technology-${e}-${key}`}
              className="inline px-2 text-sm text-brown-beaver first:pl-0 last:pr-0"
            >
              {e}{' '}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
