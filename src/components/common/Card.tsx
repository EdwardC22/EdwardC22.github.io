import React from 'react';

interface CardProps {
  title: string;
  description: string;
  company?: string; 
  technologies?: string[];
}

const Card: React.FC<CardProps> = ({ title, description, technologies }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="text-gray-700">{description}</p>
      {technologies && (
        <div className="mt-2">
          <h4 className="font-medium">Technologies:</h4>
          <ul className="list-disc list-inside">
            {technologies.map((tech, index) => (
              <li key={index} className="text-gray-600">{tech}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Card;