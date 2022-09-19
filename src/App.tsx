import { useState } from "react";
import Content from "./components/Content";
import Menu from "./components/Menu";
import { dummyData } from "./dummyData";
import type { Data } from "./index";

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
        <Content data={dummyData} projectId={projectId} pageId={pageId} noteId={noteId} />
      </div>
    </div>
  );
}

export type { Data };
export default App;
