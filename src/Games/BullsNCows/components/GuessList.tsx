import React, { useEffect, useRef } from "react";
import CLASSES from "../BullsNCows.module.scss";
import { GameTurn } from "./useGameState";

type GuessListProps = {
  turns: GameTurn[];
};

const GuessList: React.FC<GuessListProps> = ({ turns }) => {
  let listRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    listRef.current?.lastElementChild?.scrollIntoView();
  }, [turns]);
  return (
    <div className={CLASSES.guessesList} ref={listRef}>
      {turns.map(({ guess, cows, bulls }, index) => (
        <div key={guess}>
          {index + 1}. {guess}: {bulls}B, {cows}C
        </div>
      ))}
    </div>
  );
};
export default GuessList;
