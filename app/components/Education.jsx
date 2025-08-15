import React from 'react';

const Education = ({ isDarkMode }) => {
  const educations = [
    {
      date: "Feb 2025 - Aug 2025",
      degree: "Centre for Development of Advanced Computing (PG-DAC)",
      institution: "Infoway Technologies Pvt. Ltd.",
      location: "Pune, India",
      percentage: "62.81%" // Only percentage for this card
    },
    {
      date: "June 2020 – June 2024",
      degree: "Bachelor of Engineering in Computer Science (BE)",
      institution: "Guru Gobind Singh College Of Engineering & Research Center",
      location: "Nashik, India",
      cgpa: "8.68/10" // Only CGPA for this card
    }
  ];

  return (
    <div id='education' className='w-full px-4 md:px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        My Academic Journey
      </h4>
      <h2 className='text-center text-4xl md:text-5xl font-Ovo mb-5'>
        Education
      </h2>
      <p className='text-center max-w-2xl mx-auto mb-10 font-Ovo'>
        Here's a summary of my educational background.
      </p>

      <div className='grid md:grid-cols-2 gap-6'>
        {educations.map((edu, index) => (
          <div
            key={index}
            className={`border rounded-lg px-6 py-10 shadow-md hover:shadow-xl transition-transform duration-500 hover:-translate-y-1 flex flex-col justify-between h-full ${
              isDarkMode
                ? 'border-white bg-darkHover/50 text-white'
                : 'border-gray-300 bg-white text-gray-800'
            }`}
          >
            <div>
              <p className='text-sm text-gray-500 dark:text-gray-300 mb-2'>{edu.date}</p>
              <h3 className='text-xl md:text-2xl font-semibold mb-2'>{edu.degree}</h3>
              <p className='font-medium mb-1'>{edu.institution}</p>
              <p className='text-gray-500 dark:text-gray-300 mb-3'>{edu.location}</p>
            </div>
            <p className='mt-4 text-sm font-medium text-gray-700 dark:text-gray-300'>
              {edu.percentage && `Percentage: ${edu.percentage}`}
              {edu.cgpa && `CGPA: ${edu.cgpa}`}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
