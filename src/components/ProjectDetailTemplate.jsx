import React from 'react';
import Typography from './Typography';
import './ProjectDetailTemplate.css';

export default function ProjectDetailTemplate({ project }) {
  if (!project) return <Typography type="h1">Project not found</Typography>;

  const renderSection = (title, text, images = [], index) => {
    if (!text || text.trim().length === 0) return null;

    const hasImages = images && images.length > 0;
    const isEven = index % 2 === 0;

    return (
      <section
        key={title}
        className={`project-section ${hasImages ? 'alt-layout' : 'single-column'} ${
          isEven ? 'left-text' : 'right-text'
        }`}
      >
        <div className="section-text">
          <Typography type="h2">{title}</Typography>
          <Typography type="p">{text}</Typography>
        </div>

        {hasImages && (
          <div className="section-images">
            {images.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${title} visual ${idx + 1}`}
                className="section-image"
              />
            ))}
          </div>
        )}
      </section>
    );
  };

  const sections = [
    { title: 'Overview', text: project.description, images: project.overviewImages },
    {
      title: 'Problem & Goals',
      text: `${project.problem || ''} ${project.goals || ''}`,
      images: project.problemImages,
    },
    {
      title: 'Research & Insights',
      text: `${project.researchMethod || ''} ${project.keyFindings || ''}`,
      images: project.researchImages,
    },
    {
      title: 'Design Process',
      text: `${project.iterations || ''} ${project.keyDecisions || ''}`,
      images: project.processImages,
    },
    {
      title: 'Final Design',
      text: `${project.visualLanguage || ''} ${project.interactionChoices || ''}`,
      images: project.finalScreens,
    },
    {
      title: 'Outcome & Reflection',
      text: `${project.results || ''} ${project.takeaways || ''}`,
      images: project.outcomeImages,
    },
  ];

  return (
    <div className="project-detail-container">
      <div className="project-header">
        <Typography type="h1" className="project-title">
          {project.name}
        </Typography>
        <Typography type="p" className="project-meta">
          {project.role} • {project.timeline}
        </Typography>
        {project.shortDescription && (
          <Typography type="p" className="project-shortdesc">
            {project.shortDescription}
          </Typography>
        )}
      </div>

      {project.hero && (
        <div className="project-hero">
          <img src={project.hero} alt={`${project.name} hero`} className="project-hero-image" />
        </div>
      )}

      <div className="project-body">
        {sections.map((s, idx) => renderSection(s.title, s.text, s.images, idx))}
      </div>
    </div>
  );
}
