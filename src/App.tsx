import { useState } from "react";
import Content from "./components/Content";
import Menu from "./components/Menu";
import { dummyData } from "./dummyData";

type Note = {
  id: number;
  name: string;
  author: string;
  date_created: string;
  last_updated: string;
  text: string;
};

type Page = {
  id: number;
  name: string;
  author: string;
  date_created: string;
  last_updated: string;
  notes: Note[];
};

type Project = {
  id: number;
  name: string;
  author: string;
  date_created: string;
  last_updated: string;
  pages: Page[];
};

type Data = Project[];

function App() {
  const [data, setData] = useState<Data>(dummyData);
  const [projectId, setProjectId] = useState(0);
  const [pageId, setPageId] = useState(0);
  const [noteId, setNoteId] = useState(0);

  return (
    <div className="min-h-screen grid grid-cols-6">
      <div className="col-span-1">
        <Menu
          data={data}
          projectId={projectId}
          setProjectId={setProjectId}
          pageId={pageId}
          setPageId={setPageId}
          noteId={noteId}
          setNoteId={setNoteId}
        />
      </div>
      <div className="col-span-5">
        <Content />
      </div>
    </div>
  );
}

export type { Data };
export default App;
