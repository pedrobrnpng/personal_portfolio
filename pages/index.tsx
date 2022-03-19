import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMe from '../page-components/AboutMe';
import BuiltProjectsSection from '../page-components/BuiltProjectsSection';
import ContactSection from '../page-components/ContactSection';
import ExperienceSection from '../page-components/experience';
import LandingScreen from '../page-components/LandingScreen';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pedro Brandão | Personal Portfolio</title>
      </Head>

      <LandingScreen />
      <section id="aboutme">
        <AboutMe />
      </section>
      {/* <section id="about">
        <ExperienceSection />
      </section> */}

      <section id="work">
        <BuiltProjectsSection />
      </section>

      <ContactSection />
    </div>
  );
};

export default Home;
