import React, { Fragment } from "react";
import { Link, withRouter, RouteComponentProps } from "react-router-dom";
import games from "../../Games";
import CLASSES from "./Breadcrumbs.module.scss";

function getName(code: string) {
  let game = games.find((g) => g.code === code);
  return game ? game.name : code;
}

function Breadcrumbs(props: RouteComponentProps) {
  const { location } = props;
  const paths = location.pathname.split("/").filter((a: string) => a);
  return (
    <div className={CLASSES.Breadcrumbs}>
      {paths.map((p: string, index: number, full: string[]) =>
        index !== full.length - 1 ? (
          <Fragment key={p}>
            <Link to={"/" + full.slice(0, index + 1).join("/")}>
              {getName(p)}
            </Link>
            {" / "}
          </Fragment>
        ) : (
          <span key={p}>{getName(p)}</span>
        )
      )}
    </div>
  );
}

export default withRouter(Breadcrumbs);
