import Link from 'next/link';

interface Props {
  link: string;
  Icon: React.ReactNode;
}

export const LinkIcon: React.FC<Props> = (props) => {
  const { Icon, link } = props;
  return (
    <div className="pr-3 text-3xl transition-all hover:cursor-pointer hover:text-brown-beaver">
      <Link href={link} passHref>
        <a>{Icon}</a>
      </Link>
    </div>
  );
};
