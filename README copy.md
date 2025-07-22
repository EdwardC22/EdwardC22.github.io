# Personal Webpage

This is a personal webpage project built using React and Tailwind CSS. The webpage includes sections for an introduction, work experience, and project experience.

## Project Structure

```
personal-webpage
├── public
│   └── index.html          # Main HTML file for the application
├── src
│   ├── components          # Contains React components
│   │   ├── Header.tsx      # Header component with navigation
│   │   ├── Footer.tsx      # Footer component with copyright info
│   │   ├── Introduction.tsx # Introduction component for personal details
│   │   ├── WorkExperience.tsx # Component to display work experiences
│   │   ├── ProjectExperience.tsx # Component to showcase projects
│   │   └── common          # Common components
│   │       ├── Card.tsx    # Card component for displaying items
│   │       └── Button.tsx   # Button component for UI actions
│   ├── data                # Data files for work and projects
│   │   ├── work.ts         # Work experience data
│   │   └── projects.ts     # Project data
│   ├── styles              # Styles directory
│   │   └── globals.css     # Global CSS styles
│   ├── types               # TypeScript types
│   │   └── index.ts        # Type definitions
│   ├── App.tsx             # Main application component
│   └── index.tsx           # Entry point of the React application
├── .gitignore              # Git ignore file
├── package.json            # npm configuration file
├── postcss.config.js       # PostCSS configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── tsconfig.json           # TypeScript configuration
└── README.md               # Project documentation
```

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd personal-webpage
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the application:**
   ```bash
   npm start
   ```

4. **Open your browser:**
   Navigate to `http://localhost:3000` to view the application.

## Technologies Used

- React
- TypeScript
- Tailwind CSS
- PostCSS

## Features

- Responsive design using Tailwind CSS
- Dynamic rendering of work and project experiences
- Reusable components for better maintainability

## Author

- Edward C.