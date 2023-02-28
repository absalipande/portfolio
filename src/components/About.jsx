import React from 'react';
import Title from './Title';
import coding from '../image/coding.png';

function About() {
  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20'>
      <div className='w-full md-w-6/12'>
        <Title>
          <span className='flex items-center justify-center'>About Me</span>
        </Title>
        <p className='text-center text-md text-black dark:text-white'>
          I am an aspiring Software Developer with a deep passion for developing
          innovative software that will help an organization’s efficiency and
          effectiveness. <br />
          <br />
          Growth and progress are of utmost importance to me; hence, I am
          continuously upskilling to meet the industry’s demands and standards
          and write reusable, user-friendly code. <br />
          <br />
          As a motivated and focused individual with a strong desire to learn, I
          am confident in developing software solutions that enhance an
          organization’s core competencies and contribute to its success.
        </p>
      </div>
      <img
        src={coding}
        alt='codingSample'
        className='w-full md:w-6/12 rounded-lg object-cover'
      />
    </div>
  );
}

export default About;
