import Portfolio from '../assets/projects_folder/Portfolio.png';

import JeopartyMockup from '../assets/projects_folder/JeopartyMockup.png';
import Jeoparty from '../assets/projects_folder/Jeoparty.png';
import Jeoparty2 from '../assets/projects_folder/Jeoparty2.png';
import Jeoparty3 from '../assets/projects_folder/Jeoparty3.png';

import KollinMockup from '../assets/projects_folder/KollinMockup.png';
import KollinMockup2 from '../assets/projects_folder/KollinMockup2.png';

import Flow from '../assets/projects_folder/Flow.png';
import FlowCover from '../assets/projects_folder/FlowCover.png';
import FlowInfo from '../assets/projects_folder/FlowInfo.png';

import Ambiance from '../assets/projects_folder/Ambiance.png';
import Ambiance2 from '../assets/projects_folder/Ambiance2.png';
import AmbianceCover from '../assets/projects_folder/AmbianceCover.png';
import Consent from '../assets/projects_folder/Consent.png';
import Consent2 from '../assets/projects_folder/Consent2.png';
import TimeLens from '../assets/projects_folder/TimeLens.jpg';
import TimeLens2 from '../assets/projects_folder/TimeLens2.jpg';

const projectsData = [
  {
    id: 1,
    name: 'My Portfolio',
    shortDescription: 'A personal portfolio website showcasing my UX/UI work.',
    role: 'UX Designer, UI Designer, Developer',
    timeline: 'Spring 2025, Solo Project',

    hero: Portfolio,

    description:
      'I designed and developed this responsive portfolio website to showcase my UX/UI design work. Built with React and Vite, it features clean navigation, interactive project cards, and a modern, editorial layout.',

    problem:
      'How can I present my design work in a clear, engaging, and accessible way?',
    goals:
      'Create a responsive, minimalist portfolio that reflects my design philosophy and technical skill.',

    researchMethod: 'Competitive analysis and informal user feedback.',
    keyFindings:
      'Users preferred a layout that is easy to navigate, visually consistent, and light on text.',

    iterations:
      'Developed several wireframe versions before finalizing a clear content structure with balanced whitespace and visual hierarchy.',
    keyDecisions:
      'Chose a clean sans-serif typeface, monochrome palette, and subtle motion for an editorial aesthetic.',

    visualLanguage:
      'Minimalist design with a focus on readability and balance. Smooth hover effects guide interaction without distraction.',
    finalScreens: [Portfolio],

    results:
      'Positive feedback from peers and mentors. The site improved engagement and served as a cohesive presentation of my design work.',
    takeaways:
      'Reinforced the value of simplicity and consistency in communicating a design identity.',
  },

  {
    id: 2,
    name: 'JeoPARTY!',
    shortDescription: 'An AI-generated multiplayer trivia game inspired by Jeopardy.',
    role: 'UX/UI Designer, Developer',
    timeline: '2024, Group Project',

    hero: JeopartyMockup,

    description:
      'JeoPARTY! is an online trivia game that reimagines the classic show Jeopardy with AI-generated questions and categories. Designed for up to six players, it emphasizes fun, collaboration, and learning.',

    problem:
      'How can we design a digital trivia experience that feels social, replayable, and dynamic?',
    goals:
      'Create an intuitive, fast-paced game interface that supports both competition and teamwork.',

    researchMethod: 'User testing and interface benchmarking of popular quiz apps.',
    keyFindings:
      'Users wanted clear team visibility, smooth score updates, and fast response times.',

    iterations:
      'Tested multiple color palettes and board layouts to balance clarity and visual excitement.',
    keyDecisions:
      'Implemented bright color-coded team areas and an accessible question system with visual feedback.',

    visualLanguage:
      'Playful and energetic design with bold typography, vibrant colors, and simple navigation.',
    processImages: [Jeoparty, Jeoparty2],
    finalScreens: [Jeoparty3],

    results:
      'The game achieved a high engagement rate during testing and was successfully deployed online.',
    takeaways:
      'Demonstrated the potential of AI in generating fresh, dynamic content for social play.',
  },

  {
    id: 3,
    name: 'Kollin Frontpage Redesign',
    shortDescription: 'A cleaner, user-centered redesign of the Kollin.io homepage.',
    role: 'UX/UI Designer',
    timeline: '2024, Individual Project',

    hero: KollinMockup,

    description:
      'A UX-focused redesign of Kollin’s homepage based on real user feedback. The goal was to improve clarity, structure, and navigation for students using the platform.',

    problem:
      'Users reported that the homepage felt cluttered and difficult to navigate.',
    goals:
      'Simplify content presentation and improve the information hierarchy for better usability.',

    researchMethod: 'User survey and feedback synthesis.',
    keyFindings:
      'Users wanted a more focused layout highlighting core features and reducing cognitive load.',

    iterations:
      'Created several wireframes exploring different layouts and call-to-action placements.',
    keyDecisions:
      'Introduced a more open layout with clear visual hierarchy and improved spacing.',

    visualLanguage:
      'Calm, structured, and professional with a focus on readability and intuitive navigation.',
    finalScreens: [KollinMockup],

    results:
      'The redesign addressed key pain points and inspired future visual updates across the site.',
    takeaways:
      'Showed how small, targeted design changes can significantly improve user clarity and trust.',
  },

  {
    id: 4,
    name: 'Kollin Resource Page Redesign',
    shortDescription: 'A UX overhaul of Kollin’s resource library for better usability.',
    role: 'UX/UI Designer',
    timeline: '2024, Individual Project',

    hero: KollinMockup2,

    description:
      'I redesigned Kollin’s resource page to simplify the file structure and make educational materials easier to browse and access.',

    problem:
      'The original resource page had grown cluttered and inconsistent over time.',
    goals:
      'Streamline the content layout and make file discovery intuitive for students.',

    researchMethod: 'Audit of existing structure and heuristic evaluation.',
    keyFindings:
      'Users struggled to locate specific resources and differentiate between file types.',

    iterations:
      'Developed new categorization and filtering layouts in Figma.',
    keyDecisions:
      'Introduced clearer grouping, consistent spacing, and visual tags for file types.',

    visualLanguage:
      'Clean, grid-based layout emphasizing clarity and quick scanning.',
    finalScreens: [KollinMockup2],

    results:
      'The redesign significantly reduced user confusion and improved task efficiency.',
    takeaways:
      'Highlighted the importance of logical information architecture in educational tools.',
  },

  {
    id: 5,
    name: 'Ambiance',
    shortDescription: 'Spotify design challenge exploring AI-driven music recommendations.',
    role: 'UI/UX Designer',
    timeline: '2023, Challenge Project',

    hero: AmbianceCover,

    description:
      'Ambiance is a Spotify design challenge concept that adapts music recommendations to the user’s context—mood, location, and time of day—creating a personalized, emotional listening experience.',

    problem:
      'How can Spotify offer recommendations that feel emotionally attuned and context-aware?',
    goals:
      'Design an experience that feels adaptive, personal, and seamlessly integrated into users’ daily routines.',

    researchMethod: 'Market research and trend analysis on emotion-based AI interfaces.',
    keyFindings:
      'Users are open to mood-based personalization when it feels authentic and under their control.',

    iterations:
      'Created several wireframe flows exploring how users set emotional parameters.',
    keyDecisions:
      'Used gradient-based color transitions and minimal UI elements to evoke mood and flow.',

    visualLanguage:
      'Fluid, minimal design with smooth transitions and adaptive color palettes.',
    processImages: [Ambiance, Ambiance2],
    finalScreens: [AmbianceCover],

    results:
      'The concept was well-received in critique for balancing innovation with simplicity.',
    takeaways:
      'Reinforced the value of designing emotional intelligence into digital products.',
  },

  {
    id: 6,
    name: 'FLOW',
    shortDescription: 'A mindful productivity app designed to support focus and balance.',
    role: 'UX/UI Designer',
    timeline: '2024, Course Project',

    hero: FlowCover,

    description:
      'FLOW is a productivity app concept designed to align with users’ natural focus cycles. The interface encourages mindful work habits through personalized feedback and rhythm tracking.',

    problem:
      'Traditional productivity apps often push constant optimization rather than sustainable focus.',
    goals:
      'Help users understand their unique patterns and work in tune with them.',

    researchMethod: 'User interviews and literature review on cognitive behavioral design.',
    keyFindings:
      'Users wanted gentle reminders, not gamified pressure, to support healthy productivity.',

    iterations:
      'Tested different interface tones and feedback visuals to maintain calm engagement.',
    keyDecisions:
      'Adopted soft colors, circular progress visuals, and minimal data density.',

    visualLanguage:
      'Calm, fluid, and centered on self-awareness through subtle motion.',
    processImages: [FlowInfo],
    finalScreens: [Flow],

    results:
      'The concept resonated with users seeking a more balanced approach to productivity.',
    takeaways:
      'Confirmed the design potential of empathy and mindfulness in everyday digital tools.',
  },

  {
    id: 7,
    name: 'Consent',
    shortDescription: 'A Tinder design challenge fostering playful conversations about consent.',
    role: 'Concept Designer, UI Designer',
    timeline: '2023, Group Project',

    hero: Consent,

    description:
      'This Tinder design challenge explored ways to make conversations around consent feel approachable and collaborative.',

    problem:
      'How can dating apps encourage discussions about consent in a positive and natural way?',
    goals:
      'Promote openness and teamwork in sensitive topics through playful interaction.',

    researchMethod: 'Brainstorm workshops and concept co-creation.',
    keyFindings:
      'Users appreciated guided, lighthearted prompts to start important conversations.',

    iterations:
      'Developed question-based cards and mini-games to build mutual understanding.',
    keyDecisions:
      'Chose a conversational tone and soft visual style to foster trust and comfort.',

    visualLanguage:
      'Friendly, inclusive design using warm colors and approachable typography.',
    finalScreens: [Consent2],

    results:
      'The concept was praised for reframing consent as a shared experience rather than a formal checklist.',
    takeaways:
      'Showed that design can normalize sensitive topics through warmth and play.',
  },

  {
    id: 8,
    name: 'TimeLens',
    shortDescription: 'A Blast Theory challenge concept exploring hidden stories in time and place.',
    role: 'UX Researcher, UI Designer',
    timeline: '2023, Group Project',

    hero: TimeLens,

    description:
      'TimeLens was designed for a Blast Theory challenge, focusing on revealing hidden stories embedded in familiar places through AR and historical overlays.',

    problem:
      'How can we make users aware of underrepresented histories through immersive storytelling?',
    goals:
      'Design an experience that connects past and present through physical locations.',

    researchMethod: 'Concept research and site-based ideation.',
    keyFindings:
      'Users were drawn to the emotional impact of linking real spaces with untold narratives.',

    iterations:
      'Mapped potential user journeys and experimented with time-based AR interactions.',
    keyDecisions:
      'Used subtle overlays and visual blending to merge timelines seamlessly.',

    visualLanguage:
      'Atmospheric and reflective, combining photography with translucent UI layers.',
    finalScreens: [TimeLens2],

    results:
      'The concept received recognition for its poetic approach to storytelling through design.',
    takeaways:
      'Demonstrated how technology can evoke empathy and curiosity through time-based interaction.',
  },
];

export default projectsData;
