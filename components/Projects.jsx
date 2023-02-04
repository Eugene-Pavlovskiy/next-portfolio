import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import petscareImg from '../public/assets/projects/petscare.png';
import bmwImg from '../public/assets/projects/bmwImg.png';
import Dashboard from '../public/assets/projects/dashboard.png';
import twitchImg from '../public/assets/projects/twitch.png';
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Pets Care"
            backgroundImg={petscareImg}
            projectUrl="/petscare"
            tech="React JS"
          />
          <ProjectItem
            title="BMW App"
            backgroundImg={bmwImg}
            projectUrl="/bmw"
            tech="React JS"
          />
          <ProjectItem
            title="Dashboard App"
            backgroundImg={Dashboard}
            projectUrl="/dashboard"
            tech="Next JS"
          />
          <ProjectItem
            title="Twitch UI"
            backgroundImg={twitchImg}
            projectUrl="/twitch"
            tech="Next JS"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
