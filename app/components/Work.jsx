import { assets, workData } from '@/assets/assets';
import Image from 'next/image';
import React, { useState } from 'react';

const Work = ({ isDarkMode }) => {
    const [hoveredProject, setHoveredProject] = useState(null);

    return (
        <div id='work' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>My Portfolio</h4>
            <h2 className='text-center text-5xl font-Ovo'>My Latest Work</h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                Welcome to my web development portfolio! Explore a collection of projects showcasing my expertise in web development.
            </p>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10'>
                {workData.map((project, index) => (
                    <div key={project.title.replace(/\s+/g, '-')} className='px-2'>
                        <div className='aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group' style={{ backgroundImage: `url(${project.bgImage})` }}>
                            <div className='bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 group-hover:bottom-7'>
                                <div>
                                    {/* Hover Effect on Title */}
                                    <h2 
                                        className='font-semibold relative dark:text-black'
                                        onMouseEnter={() => setHoveredProject(index)}
                                        onMouseLeave={() => setHoveredProject(null)}
                                    >
                                        {project.title}
                                        {hoveredProject === index && (
                                            <div className={`absolute left-0 top-full mt-2 w-64 bg-white shadow-lg rounded-md p-3 text-sm border border-gray-300 dark:bg-black dark:border-bg-black ${isDarkMode ? 'hover:bg-black' : 'hover:bg-gray-200'}`}>
                                                <p className='font-semibold dark:text-gray-500'>{project.description}</p>
                                                <p className='text-gray-500 mt-1'><span className='dark:text-white'>Tech:</span> {project.tech}</p>
                                            </div>
                                        )}
                                    </h2>
                                </div>
                                <a href={project.url} target="_blank" className='border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition'>
                                    <Image src={assets.send_icon} alt='send-icon' className='w-5'></Image>
                                </a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Work;
