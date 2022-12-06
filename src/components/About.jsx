import React from 'react';
import Title from './Title';
import coding from '../image/coding.png';

function About() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20">
      <div className="w-full md-w-6/12">
        <Title>
          <span className="flex items-center justify-center">About Me</span>
        </Title>
        <p className="text-center text-md text-black dark:text-white">
          I am an aspiring Software Developer with a deep passion for developing
          innovative software that will help an organization’s efficiency and
          effectiveness. <br />I have trained and have the necessary skills to
          become a Software Developer. <br />
          Growth and progress are of utmost importance to me; hence,
          continuously upskilling myself to meet the industry’s demands and
          standards and write reusable, user-friendly code. <br />A young mind
          with sharp focus and willingness to learn to develop software to meet
          an organization’s needs, highlights its core competencies, and further
          its success.
        </p>
      </div>
      <img
        src={coding}
        alt="codingSample"
        className="w-full md:w-6/12 rounded-lg object-cover"
      />
    </div>
  );
}

export default About;
