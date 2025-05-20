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

import Weekbox from '../assets/projects_folder/Weekbox.png';
import Weekbox2 from '../assets/projects_folder/Weekbox2.png';


const projectsData = [
    {
        id: 1,
        img: JeopartyMockup,
        name: 'JeoPARTY!',
        date: '2024',
        description: 'Jeoparty! is an online version of the classic game Jeopardy, but with a twist: all questions are generated with AI.',
        details: 'Jeoparty! is an online version of the classic game Jeopardy, but with a twist: all questions are generated with AI. This project was made for the course DH2643 at KTH, by Emily Nilsson, Patrik Larsson, Olle Sköld and Felicia Atterling.',
        tools: ['Typescript','JavaScript','CSS'],
        linkname: [],
        links: ['https://github.com/feliciaatterling/jeoparty?tab=readme-ov-file'],
        extraImages: [Jeoparty,Jeoparty2,Jeoparty3]
    },
    {
        id: 2,
        img: KollinMockup,
        name: 'Kollin Frontpage Redesign',
        date: '2024',
        description: 'Redesign of frontpage of kollin.io',
        details: '',
        tools: ['Figma'],
        linkname: [],
        links: ['https://www.figma.com/proto/dltqbG30XABFIoCsboioTT/Portfolio?node-id=1294-160&p=f&t=wzV7Sw7eGUxEucn3-0&scaling=scale-down&content-scaling=fixed&page-id=1294%3A160&starting-point-node-id=1310%3A119092'],
        extraImages: []
    },
    {
        id: 3,
        img: KollinMockup2,
        name: 'Kollin Resource Page Re-design',
        date: '2024',
        description: 'Restructuring and redesigning kollin.io resource page.',
        details: '',
        tools: ['Figma'],
        linkname: [],
        links: ['https://www.figma.com/proto/dltqbG30XABFIoCsboioTT/Kollin-Redesign?node-id=1310-121738&p=f&t=wzV7Sw7eGUxEucn3-0&scaling=scale-down&content-scaling=fixed&page-id=1294%3A160&starting-point-node-id=1310%3A121738&show-proto-sidebar=1'],
        extraImages: []
    },
    {
        id: 4,
        img: Ambiance,
        name: 'Ambiance',
        date: '2023',
        description: 'Spotify design challenge: Integrating AI music recommendations.',
        details: '',
        tools: ['Figma'],
        linkname: [],
        links: ['https://www.figma.com/proto/zRSS69GUvBn9NIn89WjxOz/Project-Challenges?type=design&node-id=2-13&t=4dKH1kCwHX5j0Sbj-0&scaling=scale-down&page-id=0%253A1&starting-point-node-id=2%253A13&show-proto-sidebar=1'],
        extraImages: [Ambiance2]
    },
    {
        id: 5,
        img: Flow,
        name: 'FLOW',
        date: '2024',
        description: 'Productivity app design',
        details: '',
        tools: ['Figma'],
        linkname: [],
        links: ['https://www.figma.com/proto/KYd6CsAOHDItDkD35014pv/Personal-Project-first-version---Emily---Fanny?t=ZyBYR6Lix9pOgV0O-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2&starting-point-node-id=1%3A2'],
        extraImages: []
    },
    {
        id: 6,
        img: Consent,
        name: 'Consent',
        date: '2023',
        description: 'Tinder design challenge: Creating space to discuss consent.',
        details: '',
        tools: ['Figma','Photoshop'],
        linkname: [],
        links: [],
        extraImages: [Consent2]
    },
    {
        id: 7,
        img: TimeLens,
        name: 'TimeLens',
        date: '2023',
        description: 'Blast Theory design challenge: Bringing attention to underrepresented groups.',
        details: '',
        tools: ['Figma'],
        linkname: [],
        links: ['https://www.figma.com/proto/zRSS69GUvBn9NIn89WjxOz/Project-Challenges?type=design&node-id=2-13&t=4dKH1kCwHX5j0Sbj-0&scaling=scale-down&page-id=0%253A1&starting-point-node-id=2%253A13&show-proto-sidebar=1'],
        extraImages: [TimeLens2]
    },
    {
        id: 8,
        img: Weekbox,
        name: 'Weekbox',
        date: '2022',
        description: 'Designing for human interaction in a hybrid world.',
        details: '',
        tools: ['Figma', 'Photoshop'],
        linkname: [],
        links: [''],
        extraImages: [Weekbox2]
    }
];

export default projectsData;
