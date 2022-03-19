import Layout from '../components/layout';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/section-title';
import { ProjectData } from '../types/projectdata';

export default function BuiltProjectsSection() {
  const data: ProjectData[] = [
    {
      type: 'Featured Project',
      title: 'AASM Furniture',
      description:
        'A Web app for the company’s clients to visualize the collections available. It has authentication to limit the visibility to only people that work with the company, in order to prevent copying of ideas. Also works as a way to get to know the company better.',
      tech: ['Next.js', 'Prismic', 'NextAuth', 'Vercel', 'MongoDB'],
      github: 'https://www.github.com/pedrobrnpng/aasm-moveis',
      live: 'https://www.aasm-furniture.com',
      pic: '/aasm_print.jpg',
    },
    {
      type: 'Featured Project',
      title: 'AASM Furniture',
      description:
        'A Web app for the company’s clients to visualize the collections available. It has authentication to limit the visibility to only people that work with the company, in order to prevent copying of ideas. Also works as a way to get to know the company better.',
      tech: ['Next.js', 'Prismic', 'NextAuth', 'Vercel', 'MongoDB'],
      github: 'https://www.github.com/pedrobrnpng/aasm-moveis',
      live: 'https://www.aasm-furniture.com',
      pic: '/aasm_print.jpg',
    },
  ];

  return (
    <Layout>
      <SectionTitle title="Built Projects" />
      <ul className="flex flex-col">
        {data.map((proj, index) => {
          return <ProjectCard {...proj} />;
        })}
      </ul>
      {/* <div className="flex flex-col ">
        {data.map((proj, index) => {
          return <ProjectCard {...proj} />;
        })}
      </div> */}
    </Layout>
  );
}
