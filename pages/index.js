import Head from 'next/head';
import Navbar from '@/components/Navbar';
import About from '@/components/About';
import Main from '@/components/Main';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Eugen | Front-End Developer</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/fav2.png" />
      </Head>
      <main>
        <Navbar />
        <Main />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </>
  );
}
