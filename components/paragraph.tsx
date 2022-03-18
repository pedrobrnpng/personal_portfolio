interface Props {
  text: string;
}

export const Paragraph = ({ text }: Props) => {
  return <p className="my-4 font-space">{text}</p>;
};
