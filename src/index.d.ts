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
