import CLASSES from "./Layouts.module.scss";
import React, { useEffect } from "react";

function PageLayout(props) {
  const { header, children, title } = props;

  useEffect(() => {
    if (title) {
      const oldTitle = document.title;
      document.title = title;
      return () => (document.title = oldTitle);
    }
  }, [title]);

  return (
    <div className={CLASSES.pageContainer}>
      {header && <div className={CLASSES.pageHeader}>{header}</div>}
      <div className={CLASSES.pageBody}>{children}</div>
    </div>
  );
}

export default PageLayout;
