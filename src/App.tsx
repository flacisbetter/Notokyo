import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import PageMenu from "./components/PageMenu";
import ProjectMenu from "./components/ProjectMenu";
import { dummyData } from "./dummyData";
import type { Data } from "./index";

function App() {
  const [data, setData] = useState<Data>(dummyData);
  const [projectId, setProjectId] = useState(0);
  const [pageId, setPageId] = useState(0);

  return (
    <div id="app-container" className="min-h-screen text-white">
      <div id="header-container" className="min-h-[50px] text-center bg-gray-800 drop-shadow-2xl">
        <Header />
      </div>
      <div className="body-container grid grid-cols-6 h-[calc(100vh_-_50px)]">
        <div id="project-menu-container" className=" bg-gray-800 col-span-1">
          <ProjectMenu />
        </div>
        <div id="content-container" className="col-span-4 bg-gray-900">
          <Content />
        </div>
        <div id="page-menu-container" className="col-span-1 bg-gray-800">
          <PageMenu />
        </div>
      </div>
    </div>
  );
}

export type { Data };
export default App;
