import Layout from '../components/layout';
import { ProjectCard } from '../components/ProjectCard';
import SectionTitle from '../components/section-title';
import { ProjectData } from '../types/projectdata';

export default function BuiltProjectsSection() {
  const data: ProjectData[] = [
    {
      type: 'Featured Project',
      title: 'AASM Furniture',
      description:
        "A Web app for the company's clients be able to see their products. It has authentication to limit the visibility to only people that work with the company, in order to prevent copying of ideas. Also works as a way to get to know the company better.",
      tech: ['Next.js', 'Prismic', 'NextAuth', 'Vercel', 'MongoDB'],
      github: '',
      live: 'https://www.aasm-furniture.com',
      pic: '/aasm_print.jpg',
    },
    {
      type: 'Featured Project',
      title: "Inej's Portfolio",
      description:
        "A digital portfolio to showcase Inês's works. Built with Next.js for it's quick way to set up new pages, and uses Prismic as it's CMS to allow the client to add new data to the page.",
      tech: ['Next.js', 'Prismic', 'Vercel'],
      github: 'https://github.com/pedrobrnpng/inej_portfolio',
      live: 'https://inespinheiro.vercel.app',
      pic: '/inej_print.jpg',
    },
  ];

  return (
    <Layout>
      <div className="relative">
        <SectionTitle title="Built Projects" />
        <ul role="list" className="flex flex-col">
          {data.map((proj, index) => {
            return <ProjectCard project={proj} index={index} />;
          })}
        </ul>
      </div>
    </Layout>
  );
}
