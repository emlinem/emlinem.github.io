import React from 'react';
import { useNavigate } from 'react-router-dom';
import Typography from './Typography';
import "./PortfolioGridTemplate.css";

export default function PortfolioGridTemplate({ title, description, projects }) {
  const navigate = useNavigate();

  return (
    <div className="uxui-projects-container">
      <div className="content">
        <div
          className="uxui-content"
          style={{
            padding: '80px 0 56px 0',
            maxWidth: '600px',
            margin: '0 auto',
            textAlign: 'left',
          }}
        >
          <Typography
            type="h1"
            color="secondary"
            style={{ marginBottom: '32px', lineHeight: 1.1, letterSpacing: '0.01em' }}
            bold
          >
            {title}
          </Typography>
          <Typography
            type="p"
            color="primary"
            style={{
              marginBottom: '0',
              fontSize: '1.15rem',
              lineHeight: '1.7',
              maxWidth: '520px',
              fontWeight: 500,
            }}
          >
            {description}
          </Typography>
        </div>
      </div>
      <div className="frosted-grid">
        {projects.map(project => (
          <div
            className="frosted-card"
            key={project.id}
            style={{
              backgroundImage: `url(${project.hero})`
            }}
            onClick={() => navigate(`/project/${project.id}`)}
          >
            <div className="frosted-overlay">
              <Typography type="h2" color="primary" bold>
                {project.name}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}