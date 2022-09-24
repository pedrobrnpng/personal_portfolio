import Image from 'next/image';
import Layout from '../components/layout';
import { Paragraph } from '../components/paragraph';
import SectionTitle from '../components/section-title';

export default function AboutMe() {
  const intro = `
  Hi! I’m Pedro and I enjoy creating things, mostly the ones that live on the internet. 
    
  My interest in Web Development started in 2020 when I had to do an assignment for university that involved creating a Single Page Application. Messing with visual elements while coding really clicked with me, and made me realize that this is what I wanted for my career.
  
  These days, I work as a Full-Stack Developer @[Pixelmatters](https://www.pixelmatters.com) building cool web applications, while deepening my capabilities.
  
  Here are some technologies that I’ve been using lately:`;

  const technologies = [
    {
      title: 'NestJS',
    },
    {
      title: 'React',
    },
    {
      title: 'Typescript',
    },
    {
      title: 'PostgreSQL',
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
          <ul className="customList columns-2">
            {technologies.map(({ title }, key) => (
              <li key={`technology-${title}-${key.toString()}`}>
                {` ${title}`}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Layout>
  );
}
