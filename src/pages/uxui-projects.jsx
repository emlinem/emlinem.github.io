import React from 'react';
import PortfolioGridTemplate from '../components/PortfolioGridTemplate';
import projectsData from './projectsData';

export default function UXUIProjectsPage() {
  return (
    <PortfolioGridTemplate
      title="UX/UI design projects"
      description="To me, UX and UI design are about finding harmony between beauty and function. Every decision shapes how someone experiences a moment, and I love being part of that process."
      projects={projectsData}
    />
  );
}