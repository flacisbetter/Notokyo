import type { MenuProps } from "../index";

function Menu(props: MenuProps) {
  return (
    <div>
      {props.projectId} {props.pageId} {props.noteId}
    </div>
  );
}

export default Menu;
