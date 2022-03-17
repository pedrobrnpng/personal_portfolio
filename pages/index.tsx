import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Navbar from '../components/navbar';
import LandingScreen from '../page-components/LandingScreen';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return <LandingScreen />;
};

export default Home;
