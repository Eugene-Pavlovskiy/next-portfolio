import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>Eugen | Resume</title>
        <meta
          name="description"
          content="I am a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Eugen Pavlovskyi</h2>
          <div className="flex">
            <a
              href="https://www.linkedin.com/in/eugen-pawlowski/"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href="https://github.com/Eugene-Pavlovskiy"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className="text-center py-4 text-xl font-bold uppercase tracking-wider">
          <div className="hidden sm:block">
            <p>
              <span className="px-1">|</span> Full-Stack Web Development{' '}
              <span className="px-1">|</span>
            </p>
          </div>
          <div className="block sm:hidden">
            <p>Proven Leadership</p>
            <p className="py-2">Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          I am a Front-End Developer looking for a full-time work and remote. I
          focus on HTML, CSS, JS, React, Node.js, Next.js, Tailwindcss.
          Interested to grow in Front-End technologies working with modern
          projects.
        </p>

        {/* Skills */}
        <div className="text-center py-4">
          <h5 className="text-center underline text-[18px] py-2">Skills</h5>
          <p className="py-2">
            <span className="font-bold">Technical Skills</span>
            <span className="px-2">|</span>Front-End Web Developer
            <span className="px-2">|</span> HTML
            <span className="px-2">|</span>CSS
            <span className="px-2">|</span>Javascript
            <span className="px-2">|</span>React
            <span className="px-2">|</span>Next JS
            <span className="px-2">|</span>Tailwind
            <span className="px-2">|</span> RESTAPI
          </p>
          <p className="py-2">
            <span className="font-bold">Design Skills</span>
            <span className="px-2">|</span>Adaptive Design
            <span className="px-2">|</span> Potoshop
            <span className="px-2">|</span>Figma
          </p>
        </div>

        <h5 className="text-center underline text-[18px] py-4">
          Professional Experience
        </h5>
        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">INSTRUMENT K</span>
            <span className="px-2">|</span>Kyiv, Ukraine
          </p>
          <p className="py-1 italic">
            Front End Web Developer & Web Master (2020 - 2022)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              <b>Site administration based on CMS OpenCart: </b>
              Filling the site with content, SEO promotion, improving site
              design using HTML/CSS, working with plugins, working with site
              files on the company&#39;s corporate server.
            </li>
            <li>
              <b>Site administration based on CMS PrestaShop: </b>
              Filling the site with content, SEO promotion, improving site
              design using HTML/CSS.
            </li>
            <li>
              <b>Work with HTML, CSS for edits on sites</b>
            </li>
            <li>
              <b>Coordinating the work of content manager, copywriter</b>
            </li>
          </ul>
        </div>

        {/* Experience */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold italic">SEORANGE WEB-STUDIO</span>
            <span className="px-2">|</span>Kyiv, Ukraine
          </p>
          <p className="py-1 italic">
            FRONT-END DEVELOPER (WORDPRESS) (2019 - 2019)
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              <b>
                Development of websites, landings on CMS Wordpress (without PHP
                programming):{' '}
              </b>
              creating a design on the layout; layout on the site designer
              Wordpress Elementor.
            </li>
            <li>
              <b>
                Maintaining and developing a web studio website on CMS
                Wordpress:{' '}
              </b>{' '}
              UI / UX design improvement; adding content.
            </li>
          </ul>
        </div>

        {/*  */}
        <h5 className="text-center underline text-[18px] py-4">Education</h5>

        {/* Education */}
        <div className="py-6">
          <p className="italic">
            <span className="font-bold">IT School GoIT</span>
            <span className="px-2">|</span>Kyiv, Ukraine
          </p>
          <p className="py-1 italic">FULLSTACK DEVELOPER (2019 – 2022)</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>HTML / CSS + 1 team project.</li>
            <li>JavaScript + 1 team project.</li>
            <li>React JS / React Native.</li>
            <li>Node.js.</li>
            <li>SoftSkills.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
