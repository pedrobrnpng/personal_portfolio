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
    <ul className={`flex ${vertical === true && 'flex-col'}`}>
      {socials.map(({ Icon, href }, index, key) => (
        <li key={`social-icon-${key}`}>
          <Link href={href}>
            {vertical ? (
              <Icon
                className={`${index != 0 && 'mt-1'} ${
                  index != 2 && 'mb-1'
                } transition-all hover:cursor-pointer hover:text-brown-beaver`}
                style={{ fontSize: '32px' }}
              />
            ) : (
              <Icon
                className={`${index != 0 && 'ml-2'} ${
                  index != 2 && 'mr-2'
                } transition-all hover:cursor-pointer hover:text-brown-beaver`}
                style={{ fontSize: '32px' }}
              />
            )}
          </Link>
        </li>
      ))}
    </ul>
  );
}
