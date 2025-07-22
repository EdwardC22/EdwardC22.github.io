import React from 'react';
import { Project } from '../types';
import {projectsData} from '../data/projects';
import Card from './common/Card';

const ProjectExperience: React.FC = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-5">Project Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projectsData.map((project) => (
          <Card key={project.title} title={project.title} description={project.description} technologies={project.technologies} />
        ))}
      </div>
    </section>
  );
};

export default ProjectExperience;