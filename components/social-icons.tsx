import Link from 'next/link';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';
import { LinkIcon } from './LinkIcon';

interface Props {
  vertical: boolean;
}

export default function SocialIcons({ vertical }: Props) {
  const socials = [
    {
      Icon: IoLogoGithub,
      href: 'https://www.github.com/pedrobrnpng',
    },
    {
      Icon: MdOutlineEmail,
      href: 'mailto:hello@dev-pedrobrandao.com',
    },
    {
      Icon: IoLogoLinkedin,
      href: 'https://www.linkedin.com/in/pedrobrn',
    },
  ];

  return (
    <ul
      role="listitem"
      className={`flex ${vertical === true && 'flex-col'} pt-4`}
    >
      {socials.map(({ Icon, href }, key) => {
        if (vertical) {
          return (
            <li
              key={`social-icon-${key}`}
              className="my-1 first:mt-0 last:mb-0"
            >
              <LinkIcon Icon={<Icon />} link={href} />
            </li>
          );
        } else {
          return (
            <li
              key={`social-icon-${key}`}
              className="mx-2 first:ml-0 last:mr-0"
            >
              <LinkIcon Icon={<Icon />} link={href} />
            </li>
          );
        }
      })}
    </ul>
  );
}
