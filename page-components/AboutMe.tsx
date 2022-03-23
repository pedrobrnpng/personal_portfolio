import Image from 'next/image';
import { Illustration } from '../components/illustration';
import Layout from '../components/layout';
import { Paragraph } from '../components/paragraph';
import SectionTitle from '../components/section-title';

export default function AboutMe() {
  const intro =
    'Hi! I’m Pedro and I enjoy creating things, mostly the ones that live on the internet. ';
  const interest =
    'My interest in Web Development started in 2020 when I had to do an assignment for university that involved creating a Single Page Application. Messing with visual elements while coding really clicked with me, and made me realize that this is what I wanted for my carreer.';
  const privilege =
    'I’ve had the privilege to work as an intern in a successfull start-up. These days my focus has been developing custom Web Apps as a freelancer, and some other cool tools, while deepening my capabilites.';
  const tech = 'Here are some technologies that I’ve been using lately:';

  const technologies = [
    {
      title: 'Node.js',
    },
    {
      title: 'React',
    },
    {
      title: 'Typescript',
    },
    {
      title: 'Prismic',
    },
    {
      title: 'MongoDB',
    },
  ];

  return (
    <Layout>
      <SectionTitle title="About Me" />
      <div className="lg:flex lg:flex-row lg:items-center">
        <div className="hidden pr-8 lg:flex">
          <Image
            src="/pic.png"
            width={300}
            height={300}
            alt="Portrait Illustration"
          />
        </div>
        <div className="lg:w-2/3">
          <Paragraph text={intro} />
          <Paragraph text={interest} />
          <Paragraph text={privilege} />
          <Paragraph text={tech} />
          <ul className="columns-2">
            {technologies.map(({ title }, key) => (
              <li key={`technology-${title}-${key.toString()}`}> - {title}</li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
