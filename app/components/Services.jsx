import { serviceData, assets } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const Services = ({isDarkMode}) => {
    return (
        <div id='services' className='w-full px-[12%] py-10 scroll-mt-20'>
            <h4 className='text-center mb-2 text-lg font-Ovo'>
                What I Offer
            </h4>
            <h2 className='text-center text-5xl font-Ovo'>
                My Services
            </h2>

            <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo'>
                I am a full stack developer from Pune, India.
            </p>

            <div className='grid grid-cols-auto gap-6 my-10'>
                {serviceData.map(({ icon, title, description, link }, index) => (
                    <div key={index} className='border border-gray-400 rounded-lg px-8 py-12 hover:shadow-black cursor-pointer hover:ng-lightHover hover:-translate-y-1 duration-500 dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50'>
                        <Image src={icon} alt='' className='w-10'></Image>
                        <h3 className='text-lg my-4 text-gray-700 dark:text-white'>{title}</h3>
                        <p className='text-sm my-4 text-gray-600 leading-5 dark:text-white'>
                            {description}
                        </p>
                        <a href={link} className='flex items-center gap-2 text-sm mt-5 dark:text-white'>
                            Read More <Image alt='' src={isDarkMode ? assets.right_arrow_white : assets.right_arrow} className='w-4'></Image>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Services
