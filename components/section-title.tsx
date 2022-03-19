interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <div className="font-bold md:flex md:flex-row md:items-center">
      <h1 className="font-league text-5xl">{title}</h1>
      <hr className="border-y-1 w-20 border-brown-beaver opacity-40 md:mx-8 md:w-1/3" />
    </div>
  );
}
