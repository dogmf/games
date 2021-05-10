import { useCallback, useMemo, useState } from "react";

type GuessTarget = string;

export type GameTurn = {
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

class ValidationError extends Error {
  constructor(message?: string) {
    super(message);
    this.name = "Validation Error";
  }
}

function checkIfGuessIsLegal(guess: GuessTarget, turns: GameTurn[]) {
  let errors = [];
  if (guess.split("").some((char) => isNaN(Number(char))))
    errors.push("Guess can be declared only in digits");
  // for duplication in digits
  if (guess.length !== new Set(guess).size)
    errors.push("Guess has duplicated digits");
  // for duplication in turns
  let duplicateIndex = turns.findIndex((t) => t.guess === guess);
  if (duplicateIndex >= 0)
    errors.push(`Guess has already been done on ${duplicateIndex + 1} turn`);

  if (errors.length === 1) {
    throw new ValidationError(errors.join("; "));
  }
}

function useGameState(): Game {
  const [number, setNumber] = useState<GuessTarget | undefined>(undefined);
  const [turns, setTurns] = useState<GameTurn[]>([]);
  const [ended, setEnded] = useState<boolean>(false);
  const start = useCallback<startFunction>(() => {
    const number = getRandomNumber();
    setNumber(number);
    setTurns([]);
    setEnded(false);
    // console.log(`Game started with "${number}" as number.`);
  }, []);
  const guess = useCallback<guessFunction>(
    (guessedNumber: GuessTarget) => {
      if (!number) return;
      checkIfGuessIsLegal(guessedNumber, turns);
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
    [number, turns]
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
