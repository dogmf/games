import CLASSES from "./Hub.module.scss";
import React from "react";
import games from "../Games";
import { Link } from "react-router-dom";
import { homepage } from "../config.json";

function GameCard(game) {
  const { name, code, description, background, underConstruction } = game;
  const C = underConstruction ? "span" : Link;
  return (
    <C to={`${homepage}/${code}`} className={CLASSES.GamesListCard}>
      {background && (
        <div
          className={CLASSES.background}
          style={{ backgroundImage: `url(${background})` }}
        />
      )}
      <h1>{name}</h1>
      {description && <p>{description}</p>}
      {underConstruction && (
        <div className={CLASSES.underConstructionRibbon}> </div>
      )}
    </C>
  );
}

function GamesList() {
  return (
    <div className={CLASSES.GamesListContainer}>
      {games.map((game) =>
        React.createElement(GameCard, { ...game, key: game.code })
      )}
    </div>
  );
}

export default GamesList;
