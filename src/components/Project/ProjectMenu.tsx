import ProjectItem from "./ProjectItem";
import type { ProjectMenuProps } from "../..";

function ProjectMenu(props: ProjectMenuProps) {
  const projectList = props.data.map((project) => {
    return (
      <li>
        <ProjectItem
          projectId={project.id}
          projectName={project.name}
          activeProject={props.activeProject}
          setActiveProject={props.setActiveProject}
        />
      </li>
    );
  });

  return (
    <div className="bg-app-menu-blue border-r-1 h-full border-slate-800 p-2 pt-3">
      {projectList}
    </div>
  );
}

export default ProjectMenu;
