import image1 from "../project1.jpg";
import image2 from "../project2.jpg";
import image3 from "../project3.jpg";
import image4 from "../project4.jpg";
import image5 from "../project5.jpg";
import image6 from "../project6.jpg";

export const projects = [
    {
        image: image1,
        title: 'Tech Blog',
        description: 'This is a CMS-style tech blog in the fashion of a Wordpress site. This is a full stack application utilizing Sequelize as the ORM and follows the MVC paradigm.',
        deployedUrl: 'https://tech-blog-6dqv.onrender.com/',
        githubUrl: 'https://github.com/EXCervantes/tech-blog'
    },
    {
        image: image2,
        title: 'Weather Dashboard',
        description: 'This is an application which uses the Open Weather Map API to fetch a daily and five day forecast.',
        deployedUrl: 'https://tech-blog-6dqv.onrender.com/',
        githubUrl: 'https://github.com/EXCervantes/weather-dashboard'
    },
    {
        image: image3,
        title: 'Cinema Quiz',
        description: 'This is a cinema quiz taking application with a built in help function to search movies for hints. It uses two APIs to, one to generate quiz questions and the other to search a movie database.',
        deployedUrl: 'https://excervantes.github.io/cinema-quiz/',
        githubUrl: 'https://github.com/EXCervantes/cinema-quiz'
    },
    {
        image: image4,
        title: 'Task Attacker!',
        description: 'A group project created to be a daily life planner which stores tasks and assigns a time to them.',
        deployedUrl: 'https://taskattacker.onrender.com/',
        githubUrl: 'https://github.com/NoahCalderwood/TaskAttacker'
    },
    {
        image: image5,
        title: 'J.A.T.E',
        description: 'Takes in text input and stores it either in local storage or IndexDB. This is a PWA complete with a page manifest and service workers. It can be used offline.',
        deployedUrl: 'https://pwa-jate-zgyl.onrender.com/',
        githubUrl: 'https://github.com/EXCervantes/pwa-jate'
    },
    {
        image: image6,
        title: 'SVG Logo Maker',
        description: 'This is an application used to create SVG files via prompts in the terminal from three different shapes and any color including HEX values.',
        deployedUrl: 'https://github.com/EXCervantes/svg-logo-maker',
        githubUrl: 'https://github.com/EXCervantes/svg-logo-maker'
    },
];
