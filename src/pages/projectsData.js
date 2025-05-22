import Portfolio from '../assets/projects_folder/Portfolio.png';

import JeopartyMockup from '../assets/projects_folder/JeopartyMockup.png';
import Jeoparty from '../assets/projects_folder/Jeoparty.png';
import Jeoparty2 from '../assets/projects_folder/Jeoparty2.png';
import Jeoparty3 from '../assets/projects_folder/Jeoparty3.png';

import KollinMockup from '../assets/projects_folder/KollinMockup.png';
import KollinMockup2 from '../assets/projects_folder/KollinMockup2.png';

import Flow from '../assets/projects_folder/Flow.png';

import Ambiance from '../assets/projects_folder/Ambiance.png';
import Ambiance2 from '../assets/projects_folder/Ambiance2.png';
import Consent from '../assets/projects_folder/Consent.png';
import Consent2 from '../assets/projects_folder/Consent2.png';
import TimeLens from '../assets/projects_folder/TimeLens.jpg';
import TimeLens2 from '../assets/projects_folder/TimeLens2.jpg';

const projectsData = [
    {
        id: 1,
        img: Portfolio,
        name: 'My Portfolio',
        date: '2025',
        description: 'I designed and created this website!',
        details: 'My portfolio website is a personal project I’ve worked on throughout the spring semester, alongside my Master’s thesis. It’s built with HTML, CSS, and JavaScript, and showcases my design and development work. The site is fully responsive, hand-coded, and designed to reflect my personality and design values. Each project links to case studies or code repositories, making it easy to explore my process and skills.',
        tools: ['JavaScript','CSS', 'HTML'],
        linkname: [],
        links: ['https://github.com/emlinem/emlinem.github.io'],
        extraImages: []
    },
    {
        id: 2,
        img: JeopartyMockup,
        name: 'JeoPARTY!',
        date: '2024',
        description: 'JeoPARTY! is an online version of the classic game Jeopardy, but with a twist: all questions are generated using AI.',
        details: 'JeoPARTY! is a fun and dynamic twist on the classic game Jeopardy, where all questions are generated using OpenAI. This project was created for the course DH2643 at KTH by Emily Nilsson, Patrik Larsson, Olle Sköld, and Felicia Atterling. I was responsible for the overall design in Figma, and developed core parts of the game including the interactive game board, the teams dashboard, and the podium page. I also contributed to the integration of the OpenAI API.',
        tools: ['TypeScript', 'JavaScript', 'CSS'],
        linkname: ['Take a look at our GitHub!'],
        links: ['https://github.com/feliciaatterling/jeoparty?tab=readme-ov-file'],
        extraImages: [Jeoparty, Jeoparty2, Jeoparty3]
    },
    {
        id: 3,
        img: KollinMockup,
        name: 'Kollin Frontpage Redesign',
        date: '2024',
        description: 'Redesign of the front page of kollin.io based on user insights.',
        details: 'For this redesign project, I led a UX-focused update of Kollin’s front page. I started by creating a user survey to gather insights, which revealed that many users found the page cluttered and struggled to navigate its many functions. Based on this feedback, I redesigned the front page in Figma with a cleaner layout, clearer hierarchy, and more intuitive navigation to improve usability and overall user satisfaction.',
        tools: ['Figma'],
        linkname: ['Check out the Figma!'],
        links: ['https://www.figma.com/proto/dltqbG30XABFIoCsboioTT/Portfolio?node-id=1294-160&p=f&t=wzV7Sw7eGUxEucn3-0&scaling=scale-down&content-scaling=fixed&page-id=1294%3A160&starting-point-node-id=1310%3A119092'],
        extraImages: []
    },
    {
        id: 4,
        img: KollinMockup2,
        name: 'Kollin Resource Page Re-design',
        date: '2024',
        description: 'Restructuring and redesigning the resource page on kollin.io.',
        details: 'The original resource page was a temporary solution that had become cluttered and confusing. I was tasked with redesigning it to create a clearer file structure and a more intuitive user experience. Using Figma, I restructured the layout to make navigation easier and the content more accessible, helping users quickly find the materials they need.',
        tools: ['Figma'],
        linkname: ['Take a peek at the design!'],
        links: ['https://www.figma.com/proto/dltqbG30XABFIoCsboioTT/Kollin-Redesign?node-id=1310-121738&p=f&t=wzV7Sw7eGUxEucn3-0&scaling=scale-down&content-scaling=fixed&page-id=1294%3A160&starting-point-node-id=1310%3A121738&show-proto-sidebar=1'],
        extraImages: []
    },
    {
        id: 5,
        img: Ambiance,
        name: 'Ambiance',
        date: '2023',
        description: 'Spotify design challenge: Integrating AI-driven music recommendations.',
        details: 'Ambiance was created as part of a design challenge pitched by a representative from Spotify. I designed the entire wireframe in Figma, focusing on a concept that adapts music recommendations based on the user’s mood, location, and time of day—like a dynamic, AI-powered music mood ring. The goal was to create a more personal and emotionally responsive listening experience.',
        tools: ['Figma'],
        linkname: ['Test it out!'],
        links: ['https://www.figma.com/proto/zRSS69GUvBn9NIn89WjxOz/Project-Challenges?type=design&node-id=2-13&t=4dKH1kCwHX5j0Sbj-0&scaling=scale-down&page-id=0%253A1&starting-point-node-id=2%253A13&show-proto-sidebar=1'],
        extraImages: [Ambiance2]
    },
    {
        id: 6,
        img: Flow,
        name: 'FLOW',
        date: '2024',
        description: 'A productivity app designed to align with how your brain naturally works.',
        details: 'FLOW was the final project in a UX course, developed in Figma and grounded in cognitive behavioral theory. The app is designed to help users better understand their productivity patterns and mental states, encouraging them to work with their natural rhythms rather than against them. The goal was to create a more mindful and personalized approach to getting things done—supporting focus, motivation, and balance.',
        tools: ['Figma'],
        linkname: ['Check out the prototype!'],
        links: ['https://www.figma.com/proto/KYd6CsAOHDItDkD35014pv/Personal-Project-first-version---Emily---Fanny?t=ZyBYR6Lix9pOgV0O-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2'],
        extraImages: []
    },
    {
        id: 7,
        img: Consent,
        name: 'Consent',
        date: '2023',
        description: 'Tinder design challenge: Creating space to discuss consent in a playful, collaborative way.',
        details: 'This project was part of a Tinder design challenge focused on promoting conversations around consent. Our group designed a game-like feature with pre-made questions that both people answer together, encouraging a sense of teamwork and openness. I came up with the initial concept and designed the icon, contributing to a solution that makes important conversations feel more approachable and shared.',
        tools: ['Figma', 'Photoshop'],
        linkname: [],
        links: [],
        extraImages: [Consent2]
    },
    {
        id: 8,
        img: TimeLens,
        name: 'TimeLens',
        date: '2023',
        description: 'Blast Theory design challenge: Highlighting underrepresented stories through time and place.',
        details: 'TimeLens was created for a design challenge by Blast Theory, focusing on bringing attention to underrepresented groups. Our concept was inspired by the idea that history is embedded in places, not just people. The app allows users to virtually travel back in time and experience modern locations as they once were—revealing hidden stories, historical visuals, and the transformation of places like Stockholm over time.',
        tools: ['Figma'],
        linkname: ['Take a look!'],
        links: ['https://www.figma.com/proto/zRSS69GUvBn9NIn89WjxOz/Project-Challenges?type=design&node-id=2-13&t=4dKH1kCwHX5j0Sbj-0&scaling=scale-down&page-id=0%253A1&starting-point-node-id=2%253A13&show-proto-sidebar=1'],
        extraImages: [TimeLens2]
    },
];

export default projectsData;
