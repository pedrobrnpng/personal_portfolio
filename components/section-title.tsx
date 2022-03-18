interface Props {
  title: string;
}

export default function SectionTitle({ title }: Props) {
  return (
    <div className="lg:flex lg:flex-row lg:items-center">
      <h1 className="font-league text-5xl">{title}</h1>
      <hr className="border-y-1 w-20 border-brown-beaver lg:mx-8 lg:w-1/3" />
    </div>
  );
}
