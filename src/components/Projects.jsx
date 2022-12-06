import React from 'react';
import Title from './Title';
import projects from '../data/projects';
import ProjectItem from './ProjectItem';

function Projects() {
  return (
    <div className="md:mb-9 py-8">
      <Title>
        <span className="flex items-center justify-center">Projects</span>
      </Title>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {projects.map((project) => (
          <ProjectItem
            key={project.title}
            imgUrl={project.imgUrl}
            title={project.title}
            stack={project.stack}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
