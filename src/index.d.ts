import { DataHTMLAttributes } from "react";

export type Page = {
  id: number;
  name: string;
  author: string;
  date_created: string;
  last_updated: string;
  text: string;
};

export type Project = {
  id: number;
  name: string;
  author: string;
  date_created: string;
  last_updated: string;
  pages: Page[];
};

export type Data = Project[];

export type ProjectMenuProps = {
  data: Data;
  activeProject: number;
  setActiveProject: (id: number) => void;
};

export type ProjectItemProps = {
  projectId: number;
  projectName: string;
  activeProject: number;
  setActiveProject: (id: number) => void;
};

export type PageMenuProps = {
  data: Data;
  activeProject: number;
  activePage: number;
  setActivePage: (id: number) => void;
};

export type PageItemProps = {
  pageId: number;
  pageName: string;
  activePage: number;
  setActivePage: (id: number) => void;
};
