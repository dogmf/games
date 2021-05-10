import React from "react";
import CLASSES from "./BullsNCows.module.scss";
import { GameTurn } from "./useGameState";

type GuessListProps = {
  turns: GameTurn[];
};

const GuessList: React.FC<GuessListProps> = ({ turns }) => {
  return (
    <div className={CLASSES.guessesList}>
      {turns.map(({ guess, cows, bulls }, index) => (
        <div key={guess}>
          <span style={{width:"3em"}}>{index + 1}.</span> {guess}: {bulls}B, {cows}C
        </div>
      ))}
    </div>
  );
};
export default GuessList;
