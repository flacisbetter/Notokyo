import type { ContentProps } from "../index";

function Content(props: ContentProps) {
  return <div>{props.data[props.projectId].pages[props.pageId].notes[props.noteId].text}</div>;
}

export default Content;
