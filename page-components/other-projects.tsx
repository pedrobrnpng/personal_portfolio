import Layout from '../components/layout';
import OtherProjectCard from '../components/OtherProjectsCard';
import ProjectCard from '../components/ProjectCard';
import SectionTitle from '../components/section-title';
import { ProjectData } from '../types/projectdata';

export default function OtherProjects() {
  const data: ProjectData[] = [
    {
      title: 'Blender Items Exporter',
      description:
        'A blender script that exports the selected items and it’s dimensions to a .CSV file.',
      tech: ['Python', 'Blender API'],
      github: 'https://www.github.com/pedrobrnpng/aasm-moveis',
      pic: '/aasm_print.jpg',
    },
    {
      title: 'Transport Management and Planning',
      description:
        'A university group project where a Java application was built to manage a network of parks and vehicles, that can be rented via the app.',
      tech: [
        'Angular',
        'C#',
        'Prolog',
        'Typescript',
        'MongoDB',
        'Azure DB',
        'OOP',
      ],
      github: 'https://www.github.com/pedrobrnpng/aasm-moveis',
    },
    {
      title: 'Ride Sharing App',
      description:
        'A university group project where a Java application was built to manage a network of parks and vehicles, that can be rented via the app.',
      tech: ['Java', 'Oracle DB', 'Maven', 'OOP'],
      github: 'https://www.github.com/pedrobrnpng/aasm-moveis',
    },
    {
      title: 'Factory Floor Management',
      description:
        'A Web app for the companys ly people that work with the company, in order to prevent coks as a way to get to know the company better.',
      tech: ['Next.js', 'Prismic', 'NextAuth', 'Vercel', 'MongoDB'],
      github: 'https://www.github.com/pedrobrnpng/aasm-moveis',
    },
    {
      title: 'Photo Organizer',
      description:
        'A python script built to organize the mess of folders provided by the download of your photo data from Google Photos.',
      tech: ['Python'],
      github: 'https://www.github.com/pedrobrnpng/aasm-moveis',
    },
    {
      title: 'Arduino LED Morse translator',
      description:
        'An Arduino program built to translate text into Morse, using the built-in LED of the Arduino Board.',
      tech: ['Arduino'],
      github: 'https://www.github.com/pedrobrnpng/aasm-moveis',
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
