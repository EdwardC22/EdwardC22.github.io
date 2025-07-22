import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-blue-600 text-white p-4">
      <h1 className="text-2xl font-bold">Edward's Web</h1>
      <nav>
        <ul className="flex space-x-4">
          <li><a href="#introduction" className="hover:underline">Introduction</a></li>
          <li><a href="#work-experience" className="hover:underline">Work Experience</a></li>
          <li><a href="#project-experience" className="hover:underline">Project Experience</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;