import Link from 'next/link';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import { MdOutlineEmail } from 'react-icons/md';

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
      href: 'mailto:dev.pedrobrandao@gmail.com',
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
              <Link href={href} passHref>
                <>
                  <Icon className="my-1 text-3xl transition-all hover:cursor-pointer hover:text-brown-beaver md:text-4xl" />
                </>
              </Link>
            </li>
          );
        } else {
          return (
            <li
              key={`social-icon-${key}`}
              className="mx-2 first:ml-0 last:mr-0"
            >
              <Link href={href} passHref>
                <>
                  <Icon className="flex text-3xl transition-all hover:cursor-pointer hover:text-brown-beaver md:text-4xl" />
                </>
              </Link>
            </li>
          );
        }
      })}
    </ul>
  );
}
