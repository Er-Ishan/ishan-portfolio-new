import user_image from './user-image.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import cpanel from './cpanel.png';
import figma from './figma.png';
import git from './git.png';
import tailwind from './tailwind.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import logo_dark from './logo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.jpg';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import ui_icon from './ui-icon.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import spring_boot from './spring-boot.png';
import visual_studio from './visual_studio.png'

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    cpanel,
    figma,
    git,
    tailwind,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    ui_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    spring_boot,
    visual_studio
};

export const workData = [
    {
        title: 'Netflix Clone',
        description: 'It is a full-stack web application inspired by Netflix, featuring a modern and intuitive user interface designed to showcase video content.',
        tech: 'React.js, Bootstrap',
        url:'https://github.com/Er-Ishan/simple-netflix-clone.git',
        bgImage: '/work-1.jpg',
    },
    
    {
        title: 'Secure Bidding Platform',
        description: 'Secure Bidding Platform is an advanced online auction system designed to provide a safe, transparent, and user-friendly environment for buying and selling products through competitive bidding.',
        tech: 'React.js, Bootstrap, Spring Boot Rest API, Java JWT',
        url:'https://github.com/Er-Ishan/secure-bidding-platform.git',
        bgImage: '/work-4.png',
    },
    {
        title: 'Portfolio',
        description: 'A personal portfolio website showcasing my skills, projects, and experience. Built using React and Tailwind CSS, featuring smooth animations and responsive design.',
        tech: 'Next.js, Tailwind',
        url:'https://github.com/Er-Ishan/ishan-portfolio-new.git',
        bgImage: '/work-3.png',
    }
];


export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]


export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'C++, Python, HTML, CSS, Javascript, React.js' },
    { icon: assets.code_icon, iconDark: assets.edu_icon_dark, title: 'Backend', description: 'Java Spring Boot, ASP.NET' },
    { icon: assets.code_icon, iconDark: assets.edu_icon_dark, title: 'Database', description: 'MySQL' }
];

export const toolsData = [
    assets.vscode, assets.cpanel, assets.tailwind, assets.git, assets.spring_boot,assets.visual_studio
];