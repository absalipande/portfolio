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
        <p className="text-md text-black dark:text-white">
          Test paragraph Lorem ipsum dolor sit amet, consectetur adipisicing
          elit. Impedit suscipit, necessitatibus possimus laborum repudiandae
          cumque nostrum in ipsum, nemo inventore, voluptatem voluptas odit
          mollitia? Eveniet velit quisquam maxime nisi vel!
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
