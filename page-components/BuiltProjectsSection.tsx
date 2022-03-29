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
        'A Web app for the company’silable. It has authentication to limit the visibility to only people that work with the company, in order to prevent copying of ideas. Also works as a way to get to know the company better.',
      tech: ['Next.js', 'Prismic', 'NextAuth', 'Vercel', 'MongoDB'],
      github: 'https://www.github.com/pedrobrnpng/aasm-moveis',
      live: 'https://www.aasm-furniture.com',
      pic: '/aasm_print.jpg',
    },
    {
      type: 'Featured Project',
      title: "Inej's Portfolio",
      description:
        'Lörem ipsum antinusat ongar ifall decidäbelt. Astrologi doktig fir tesade. Kösk stenohyressade operasion. Bere delingar dolig trerade måling. Tetick saliga, termotism, res. Begt teleles pret. Del onera krolig. Trende fase homore.',
      tech: ['Next.js', 'Prismic', 'Vercel'],
      github: 'https://www.github.com/pedrobrnpng/inej-portfolio',
      live: 'https://www.inespinheiro.vercel.app',
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
