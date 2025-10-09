import React from 'react';
import { useParams } from 'react-router-dom';
import projectsData from '../pages/projectsData';
import ProjectDetailTemplate from './ProjectDetailTemplate';

export default function ProjectDetailPage() {
  const { id } = useParams();
  const project = projectsData.find(p => String(p.id) === id);

  return <ProjectDetailTemplate project={project} />;
}