import Link from 'next/link';

interface Props {
  link: string;
  Icon: React.ReactNode;
  odd?: number;
}

export const LinkIcon: React.FC<Props> = (props) => {
  const { Icon, link, odd } = props;
  return (
    <div
      className={`${
        odd ? 'md:pl-3 md:pr-0' : 'md:pr-3'
      } pr-3 text-3xl transition-all hover:cursor-pointer hover:text-brown-beaver`}
    >
      <Link href={link} passHref>
        <a>{Icon}</a>
      </Link>
    </div>
  );
};
