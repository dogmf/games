import  { useCallback, useMemo, useState } from "react";

type GuessTarget = string;

type GameTurn = {
  guess: GuessTarget;
  cows: number;
  bulls: number;
};

type bncGameState = {
  number?: GuessTarget;
  turns: GameTurn[];
  ended: boolean;
};

type startFunction = () => void;
type guessFunction = (n: GuessTarget) => void;

type Game = {
  state: bncGameState;
  start: startFunction;
  guess: guessFunction;
};

const LIMIT = 4;
function getRandomNumber(): GuessTarget {
  let number = "";
  let r = () => Math.floor(Math.random() * 10).toString();
  for (let i = 0; i < LIMIT; i++) {
    let digit;
    while (digit === undefined || number.includes(digit)) digit = r();
    number += digit;
  }
  return number;
}

function countCowsNBulls(
  target: GuessTarget,
  guess: GuessTarget
): [cows: number, bulls: number] {
  let cows = 0;
  let bulls = 0;
  guess.split("").forEach((c, i) => {
    if (target[i] === c) bulls += 1;
    else if (target.includes(c)) cows += 1;
  });
  return [cows, bulls];
}

function useGameState(): Game {
  const [number, setNumber] = useState<GuessTarget | undefined>(undefined);
  const [turns, setTurns] = useState<GameTurn[]>([]);
  const [ended, setEnded] = useState<boolean>(false);
  const start = useCallback<startFunction>(() => {
    setNumber(getRandomNumber());
    setTurns([]);
    setEnded(false);
  }, []);
  const guess = useCallback<guessFunction>(
    (guessedNumber: GuessTarget) => {
      if (!number) return;
      const [cows, bulls] = countCowsNBulls(number, guessedNumber);
      let turnResult: GameTurn = {
        guess: guessedNumber,
        cows,
        bulls,
      };
      if (bulls === LIMIT) setEnded(true);
      setTurns((turns) => {
        return [...turns, turnResult];
      });
    },
    [number]
  );
  let state = useMemo<bncGameState>(
    () => ({
      number,
      turns,
      ended,
    }),
    [number, turns, ended]
  );
  return {
    state,
    start,
    guess,
  };
}

export default useGameState;
