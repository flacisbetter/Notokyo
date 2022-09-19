export type Note = {
  id: number;
  name: string;
  author: string;
  date_created: string;
  last_updated: string;
  text: string;
};

export type Page = {
  id: number;
  name: string;
  author: string;
  date_created: string;
  last_updated: string;
  notes: Note[];
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

export type MenuProps = {
  data: Data;
  projectId: number;
  setProjectId: (id: number) => void;
  pageId: number;
  setPageId: (id: number) => void;
  noteId: number;
  setNoteId: (id: number) => void;
};
