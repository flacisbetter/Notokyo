import { useEffect } from "react";
import type { MenuProps } from "../index";

function Menu(props: MenuProps) {
  function activateNote(
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    projectId: number,
    pageId: number,
    noteId: number
  ) {
    props.setProjectId(projectId);
    props.setPageId(pageId);
    props.setNoteId(noteId);
  }

  useEffect(() => console.log(props.projectId, props.pageId, props.noteId));

  const menuList = props.data.map((project) => {
    return (
      <ul>
        <li key={project.id} className="hover:bg-blue-200">
          {project.name}
          <ul>
            {project.pages.map((page) => {
              return (
                <li key={page.id} className="pl-2 hover:bg-blue-400">
                  {page.name}
                  <ul>
                    {page.notes.map((note) => {
                      return (
                        <li
                          key={note.id}
                          className="pl-2 hover:bg-blue-600"
                          onClick={(e) => activateNote(e, project.id, page.id, note.id)}
                        >
                          {note.name}
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </li>
      </ul>
    );
  });

  return <div>{menuList}</div>;
}

export default Menu;
