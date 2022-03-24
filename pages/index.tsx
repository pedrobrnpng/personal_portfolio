import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMe from '../page-components/AboutMe';
import BuiltProjectsSection from '../page-components/BuiltProjectsSection';
import ContactSection from '../page-components/ContactSection';
import LandingScreen from '../page-components/LandingScreen';
import OtherProjects from '../page-components/other-projects';

const Home: NextPage = () => {
  return (
    <div className="h-max bg-dark-purple">
      <Head>
        <title>Pedro Brandão | Personal Portfolio</title>
      </Head>

      <div className="bg-dark-purple">
        <LandingScreen />

        <section id="aboutme" className="bg-dark-purple">
          <AboutMe />
        </section>

        <section id="work" className="bg-dark-purple">
          <BuiltProjectsSection />
        </section>

        <section id="other">
          <OtherProjects />
        </section>

        <section id="contact">
          <ContactSection />
        </section>
      </div>
    </div>
  );
};

export default Home;
