import CLASSES from "./Layouts.module.scss";
import React from "react";

function PageLayout(props) {
  const { header, children } = props;

  return (
    <div className={CLASSES.pageContainer}>
      {header && <div className={CLASSES.pageHeader}>{header}</div>}
      <div className={CLASSES.pageBody}>{children}</div>
    </div>
  );
}

export default PageLayout;
