import React, { Fragment, useCallback, useState } from "react";
import PageLayout from "../../Layouts/PageLayout";
import useGameState from "./useGameState";
import CLASSES from "./BullsNCows.module.scss";
import NumberInput from "./NumberInput";
import GuessList from "./GuessList";

function BullsNCowsPage() {
  let { state, start, guess } = useGameState();
  let { ended, turns, number } = state;

  const [inputValue, setInputValue] = useState<string>("");
  const [error, setError] = useState<string>();

  const makeGuess = useCallback(() => {
    setError(undefined);
    try {
      guess(inputValue);
      setInputValue("0000");
    } catch (err) {
      setError(err.toString());
    }
  }, [guess, inputValue]);

  let onKeyHandler = useCallback(
    (e) => {
      if (e.charCode === 13) {
        e.preventDefault();
        makeGuess();
      }
    },
    [makeGuess]
  );

  return (
    <PageLayout title="BULLS and COWS" header={<h1>BULLS and COWS</h1>}>
      <div className={CLASSES.container}>
        {!!number && (
          <Fragment>
            <div className={CLASSES.topContainerMenu} onKeyPress={onKeyHandler}>
              <NumberInput
                length={4}
                onChange={setInputValue}
                value={ended ? number : inputValue}
                disabled={ended}
              />

              {ended ? (
                <button onClick={start}>START NEW</button>
              ) : (
                <button onClick={makeGuess}>Guess</button>
              )}
            </div>
            {error && (
              <div className={CLASSES.errorSegment}>{error}</div>
            )}
            <GuessList turns={turns} />
          </Fragment>
        )}
        {!number && (
          <div className={CLASSES.buttonScreen}>
            <button onClick={start}>START</button>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

export default BullsNCowsPage;
