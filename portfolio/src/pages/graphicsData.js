// Import images using ES6 import syntax
import DinnerClubImg from '../assets/DINNERCLUB.png';
import KollinPosterImg from '../assets/Kollin Poster@2x.png';
import OrbitImg from '../assets/Orbit IG1@4x.png';

const graphicsData = [
    {
        id: 1,
        img: DinnerClubImg,
        name: 'Dinner Club Poster',
        date: 'March 2023',
        description: 'Cool poster! Very pizza!!!',
        details: 'This project was designed using Figma and features vibrant colors and typography.',
        tools: ['Figma', 'Illustrator', 'Photoshop'],
        linkname: ['Website'],
        links: ['https://example.com/project1'],
        extraImages: [DinnerClubImg, DinnerClubImg]
    },
    {
        id: 2,
        img: KollinPosterImg,
        name: 'Kollin Poster',
        date: 'June 2022',
        description: 'Poster for Kollin company!',
        details: 'Marketing material created for Kollin campaign.',
        tools: ['Canva', 'Illustrator'],
        links: [],
        extraImages: [KollinPosterImg, KollinPosterImg, KollinPosterImg]
    },
    {
        id: 3,
        img: OrbitImg,
        name: 'Orbit Poster',
        date: 'June 2022',
        description: ':))))',
        details: 'Marketing material created for Kollin campaign.',
        tools: ['Canva', 'Illustrator'],
        links: [],
        extraImages: [OrbitImg]
    },
    {
        id: 4,
        img: OrbitImg,
        name: 'Orbit Poster',
        date: 'June 2022',
        description: ':))))',
        details: 'Marketing material created for Kollin campaign.',
        tools: ['Canva', 'Illustrator'],
        links: [],
        extraImages: [OrbitImg]
    },
    {
        id: 5,
        img: OrbitImg,
        name: 'Kollin Poster',
        date: 'June 2022',
        description: ':))))',
        details: 'Marketing material created for Kollin campaign.',
        tools: ['Canva', 'Illustrator'],
        links: [],
        extraImages: [OrbitImg]
    }
];

export default graphicsData;
