import { Data } from "../App";

type Props = {
  data: Data;
  projectId: number;
  setProjectId: (id: number) => void;
  pageId: number;
  setPageId: (id: number) => void;
  noteId: number;
  setNoteId: (id: number) => void;
};

function Menu(props: Props) {
  return (
    <div>
      {props.projectId} {props.pageId} {props.noteId}
    </div>
  );
}

export default Menu;
