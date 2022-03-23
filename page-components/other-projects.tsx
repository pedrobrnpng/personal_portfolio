import Layout from '../components/layout';
import OtherProjectCard from '../components/OtherProjectsCard';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/section-title';
import { ProjectData } from '../types/projectdata';

export default function OtherProjects() {
  const data: ProjectData[] = [
    {
      type: 'Featured Project',
      title: 'AASM Furniture',
      description:
        'A Web app for the with the company, in order to prevent copying of ideas. Also works as a way to get to know the company better.',
      tech: ['Next.js', 'Prismic', 'NextAuth', 'Vercel', 'MongoDB'],
      github: 'https://www.github.com/pedrobrnpng/aasm-moveis',
      live: 'https://www.aasm-furniture.com',
      pic: '/aasm_print.jpg',
    },
    {
      type: 'Featured Project',
      title: 'AASM Furniture',
      description:
        'A Web app for theas. Also works as a way to get to know the company better.',
      tech: ['Next.js', 'Prismic', 'NextAuth', 'Vercel', 'MongoDB'],
      github: 'https://www.github.com/pedrobrnpng/aasm-moveis',
      live: 'https://www.aasm-furniture.com',
      pic: '/aasm_print.jpg',
    },
    {
      type: 'Featured Project',
      title: 'AASM Furniture',
      description:
        'A Web app for to only people that work with the company, in order to prevent copying of ideas. Also works as a way to get to know the company better.',
      tech: ['Next.js', 'Prismic', 'NextAuth', 'Vercel', 'MongoDB'],
      github: 'https://www.github.com/pedrobrnpng/aasm-moveis',
      live: 'https://www.aasm-furniture.com',
      pic: '/aasm_print.jpg',
    },
    {
      type: 'Featured Project',
      title: 'AASM Furniture',
      description:
        'A Web app for the companys ly people that work with the company, in order to prevent coks as a way to get to know the company better.',
      tech: ['Next.js', 'Prismic', 'NextAuth', 'Vercel', 'MongoDB'],
      github: 'https://www.github.com/pedrobrnpng/aasm-moveis',
      live: 'https://www.aasm-furniture.com',
      pic: '/aasm_print.jpg',
    },
    {
      type: 'Featured Project',
      title: 'AASM Furniture',
      description:
        'A Web app for the company’s clients  peoompany, in order to prevent copying of ideas. Also works as a way to get to know the company better.',
      tech: ['Next.js', 'Prismic', 'NextAuth', 'Vercel', 'MongoDB'],
      github: 'https://www.github.com/pedrobrnpng/aasm-moveis',
      live: 'https://www.aasm-furniture.com',
      pic: '/aasm_print.jpg',
    },
    {
      type: 'Featured Project',
      title: 'AASM Furniture',
      description:
        'A Web app for the company’s clients totion to limit the vismpany, in order to prevent copying of ideas. Also works as a way to get to know the company better.',
      tech: ['Next.js', 'Prismic', 'NextAuth', 'Vercel', 'MongoDB'],
      github: 'https://www.github.com/pedrobrnpng/aasm-moveis',
      live: 'https://www.aasm-furniture.com',
      pic: '/aasm_print.jpg',
    },
  ];

  return (
    <Layout>
      <SectionTitle title="Other Relevant Experience" />
      <div className="my-8 grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {data.map((proj, index) => {
          return <OtherProjectCard {...proj} {...index} />;
        })}
      </div>
    </Layout>
  );
}
