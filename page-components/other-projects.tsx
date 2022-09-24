import Layout from '../components/layout';
import OtherProjectCard from '../components/OtherProjectsCard';
import SectionTitle from '../components/section-title';
import { ProjectData } from '../types/projectdata';

export default function OtherProjects() {
  const data: ProjectData[] = [
    {
      title: 'Blender Items Exporter',
      description:
        'A blender script that exports the selected items and it’s dimensions to a .CSV file.',
      tech: ['Python', 'Blender API'],
      github: 'https://github.com/pedrobrnpng/export_items_blender',
      pic: '/aasm_print.jpg',
    },
    {
      title: 'Transport Management and Planning',
      description:
        'A university group project that mimics a transportation company. Uses AI to find the best route for a given trip, and also is able to manage vehicles.',
      tech: ['Angular', 'C#', 'Prolog', 'MongoDB', 'Azure DB', 'OOP'],
      github:
        'https://github.com/pedrobrnpng/transport_management_planning_lapr5',
    },
    {
      title: 'Ride Sharing App',
      description:
        'A university group project where a Java application was built to manage a network of parks and vehicles, that can be rented via the app.',
      tech: ['Java', 'Oracle DB', 'Maven', 'OOP'],
      github: 'https://github.com/pedrobrnpng/ride-sharing-app-isep-lapr3',
    },
    {
      title: 'Factory Floor Management',
      description:
        'A university group project that allows to manage a production line of a factory floor. From controling stock to machine monitoring.',
      tech: ['Next.js', 'Prismic', 'NextAuth', 'Vercel', 'MongoDB'],
      github:
        'https://github.com/pedrobrnpng/factory-floor-management-isep-lapr4',
    },
    {
      title: 'Photo Organizer',
      description:
        'A python script built to organize the mess of folders provided by the download of your photo data from Google Photos.',
      tech: ['Python'],
      github: 'https://github.com/pedrobrnpng/photo_organizer',
    },
    {
      title: 'Arduino LED Morse translator',
      description:
        'An Arduino program built to translate text into Morse, using the built-in LED of the Arduino Board.',
      tech: ['Arduino'],
      github: 'https://github.com/pedrobrnpng/Arduino_LED_Morse',
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
