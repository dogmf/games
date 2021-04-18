import React from "react";
import { Route } from "react-router-dom";
import games, { GameDescription } from "./index";

interface DescriptionToRouteProps {
  path: "string";
}

const gameDescriptionToRoute = (props: DescriptionToRouteProps) => (
  description: GameDescription
) => {
  const { path } = props;
  const routeProps = {
    key: description.code,
    path: `${path}/${description.code}`,
    component: description.component,
    exact: true,
  };
  return React.createElement(Route, routeProps);
};

export default function getGamesRoutes(props: any) {
  return games.map(gameDescriptionToRoute(props));
}
