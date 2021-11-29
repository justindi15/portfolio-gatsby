import { ReactNode } from 'react';

export interface BaseComponentProps {
  children?: ReactNode;
}

export interface ProjectType {
  title: string,
  description: string,
  image: any,
  tags: string[],
  gotoLink: string,
  githubLink: string,
}
