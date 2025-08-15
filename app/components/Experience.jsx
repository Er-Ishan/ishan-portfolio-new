import React from 'react'

const Experience = ({ isDarkMode }) => {
  const experiences = [
    {
      date: "Feb 2023 - Mar 2023",
      title: "Web Developer Intern",
      company: "CYBER SANSKAR",
      location: "NASHIK, MAHARASHTRA, INDIA",
      descriptions: [
        "Gained hands-on experience in a dynamic professional environment, enhancing web development skills.",
        "Developed an MD5 Hash Code Generator website for text and PDF encryption and decryption.",
        "Utilized HTML, CSS, PHP, and JavaScript to build the website.",
        "Worked independently to deliver a functional web-based solution."
      ]
    },
    {
      date: "Sep 2024 - Feb 2025",
      title: "Junior Developer (Remote)",
      company: "A22 AIRPORT PARKING LTD",
      location: "MITCHAM, LONDON, UK",
      descriptions: [
        "Contributing to the designed and developed a comprehensive Driver Tracking App and Admin Dashboard for real-time monitoring and management of driver activities.",
        "Real-time GPS tracking with the Google Map API, journey history, speed monitoring with alerts, shift management, and branch allocation.",
        "Collaborating with the development team to implement new features, improve performance, and ensure system scalability."
      ]
    }
  ];

  return (
    <div id='experience' className='w-full px-[12%] py-10 scroll-mt-20'>
      <h4 className='text-center mb-2 text-lg font-Ovo'>
        My Career Journey
      </h4>
      <h2 className='text-center text-5xl font-Ovo'>
        Professional Experience
      </h2>

      <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
        Here's a summary of my professional journey so far.
      </p>

      <div className='grid grid-cols-auto gap-6 my-10'>
        {experiences.map((exp, index) => (
          <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:bg-lightHover hover:-translate-y-1 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
            <p className='text-sm text-gray-500 dark:text-gray-300'>{exp.date}</p>
            <h3 className='text-2xl my-2 text-gray-700 dark:text-white'>{exp.title}</h3>
            <div className='flex gap-2 mb-4'>
              <p className='font-semibold dark:text-white'>{exp.company}</p>
              <p className='text-gray-500 dark:text-gray-300'>- {exp.location}</p>
            </div>
            <ul className='list-disc pl-5 space-y-3'>
              {exp.descriptions.map((desc, i) => (
                <li key={i} className='text-sm text-gray-600 leading-5 dark:text-gray-300'>
                  {desc}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Experience;