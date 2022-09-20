import type { ProjectItemProps } from "../..";

function ProjectItem(props: ProjectItemProps) {
  const project = <span className="inline-block align-middle">{props.projectName}</span>;

  if (props.activeProject == props.projectId) {
    return (
      <div
        draggable="true"
        key={props.projectId}
        className="pl-2 h-10 text-lg m-2 bg-blue-700 rounded-sm ease-in duration-100 cursor-default"
      >
        {project}
      </div>
    );
  } else {
    return (
      <div
        onClick={() => {
          props.setActiveProject(props.projectId);
        }}
        key={props.projectId}
        className="pl-2 h-10 text-lg m-2 bg-slate-700 hover:bg-blue-800 rounded-sm ease-in duration-100 cursor-pointer"
      >
        {project}
      </div>
    );
  }
}

export default ProjectItem;
