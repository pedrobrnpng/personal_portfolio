import type { NextPage } from 'next';
import Head from 'next/head';
import AboutMe from '../page-components/AboutMe';
import BuiltProjectsSection from '../page-components/BuiltProjectsSection';
import LandingScreen from '../page-components/LandingScreen';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Pedro Brandão | Personal Portfolio</title>
      </Head>
      <LandingScreen />
      <AboutMe />
      <BuiltProjectsSection />
    </div>
  );
};

export default Home;
