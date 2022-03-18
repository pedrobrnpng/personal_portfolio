import type { NextPage } from 'next';
import AboutMe from '../page-components/AboutMe';
import LandingScreen from '../page-components/LandingScreen';

const Home: NextPage = () => {
  return (
    <div>
      <LandingScreen />
      <AboutMe />
    </div>
  );
};

export default Home;
