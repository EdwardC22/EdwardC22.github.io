import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 text-center">
      <p>&copy; {new Date().getFullYear()} Edward's Web. All rights reserved.</p>
      <div>
        <a href="https://github.com/EdwardC22" className="text-gray-400 hover:text-white mx-2">GitHub</a>
        <a href="" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
      </div>
    </footer>
  );
};

export default Footer;