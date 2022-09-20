import PageItem from "./PageItem";
import { PageMenuProps } from "../..";

function PageMenu(props: PageMenuProps) {
  const pageList = props.data.map((project) => {
    if (project.id == props.activeProject) {
      return project.pages.map((page) => {
        return (
          <PageItem
            pageId={page.id}
            pageName={page.name}
            activePage={props.activePage}
            setActivePage={props.setActivePage}
          />
        );
      });
    }
  });

  return <div>{pageList}</div>;
}

export default PageMenu;
