import { useState } from "react";
import Content from "./components/Content";
import Header from "./components/Header";
import PageMenu from "./components/Page/PageMenu";
import ProjectMenu from "./components/Project/ProjectMenu";
import { dummyData } from "./dummyData";
import type { Data } from "./index";

function App() {
  const [data, setData] = useState<Data>(dummyData);
  const [activeProject, setActiveProject] = useState(0);
  const [activePage, setActivePage] = useState(0);

  return (
    <div id="app-container" className="min-h-screen text-white">
      <div id="header-container" className="grid min-h-[70px]">
        <Header />
      </div>
      <div className="body-container grid grid-cols-6 h-[calc(100vh_-_70px)]">
        <div id="project-menu-container" className="col-span-1">
          <ProjectMenu
            data={data}
            activeProject={activeProject}
            setActiveProject={setActiveProject}
          />
        </div>
        <div id="content-container" className="col-span-4 bg-app-content-blue">
          <Content />
        </div>
        <div
          id="page-menu-container"
          className="col-span-1 bg-app-menu-blue border-l-1 border-slate-800"
        >
          <PageMenu
            data={data}
            activeProject={activeProject}
            activePage={activePage}
            setActivePage={setActivePage}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
