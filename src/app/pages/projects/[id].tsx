import { useState } from 'react';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';

interface ProjectProps {
  projects: Project[];
}

interface Project {
  title: string;
}

function Project({ projects }: ProjectProps) {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.filter(
    (project) => project.title.toLowerCase() === id
  )[0];

  return <h1>Project</h1>;
}

export default Project;

import fsPromises from 'fs/promises';
import path from 'path';
export async function getStaticProps() {
  const filePath = path.join(process.cwd(), 'data/projects.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());
  return {
    props: {
      projects: objectData.projects,
    },
  };
}

// dynamic route, all possible routes
export async function getStaticPaths() {
  console.log('here');
  const filePath = path.join(process.cwd(), 'data/projects.json');
  const jsonData = await fsPromises.readFile(filePath);
  const objectData = JSON.parse(jsonData.toString());
  const titles = Array.from(
    new Set(
      objectData.projects.map((project: Project) => project.title.toLowerCase())
    )
  );
  return {
    paths: titles.map((id) => ({
      params: { id },
    })),
    fallback: false,
  };
}
