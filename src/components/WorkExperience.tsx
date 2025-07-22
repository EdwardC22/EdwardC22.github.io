import React from 'react';
import  workExperiences  from '../data/work';
import Card from './common/Card';

const WorkExperience: React.FC = () => {
  return (
    <section className="py-10">
      <h2 className="text-2xl font-bold mb-5">Work Experience</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {workExperiences.map((experience) => (
          <Card key={experience.id} title={experience.jobTitle} company={experience.company} description={experience.duration}>

          </Card>
        ))}
      </div>
    </section>
  );
};

export default WorkExperience;