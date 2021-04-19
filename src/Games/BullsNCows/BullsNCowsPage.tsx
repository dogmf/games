import React, { FormEvent, Fragment, useCallback, useState } from "react";
import PageLayout from "../../Layouts/PageLayout";
import useGameState from "./useGameState";
import CLASSES from "./BullsNCows.module.scss";

function BullsNCowsPage() {
  let { state, start, guess } = useGameState();
  let { ended, turns, number } = state;

  const [inputValue, setInputValue] = useState<string>("");

  const onInputChangeHandler = useCallback((e) => {
    setInputValue(e.target.value);
  }, []);

  let onSubmitHandler = useCallback(
    (e: FormEvent) => {
      e.preventDefault();
      guess(inputValue);
      setInputValue("");
    },
    [inputValue, guess]
  );

  return (
    <PageLayout title="BULLS and COWS" header={<h1>BULLS and COWS</h1>}>
      <div className={CLASSES.container}>
        {!!number && (
          <Fragment>
            <ul>
              {turns.map(({ guess, cows, bulls }) => (
                <li key={guess}>
                  {guess}:C{cows}B{bulls}
                </li>
              ))}
            </ul>
            <form onSubmit={onSubmitHandler}>
              <input
                type="text"
                name="guess"
                disabled={ended}
                onChange={onInputChangeHandler}
                value={inputValue}
              />
            </form>
          </Fragment>
        )}
        {(ended || !number) && (
          <div className={CLASSES.buttonScreen}>
            <button onClick={() => start()}>START{ended && " NEW"}</button>
          </div>
        )}
      </div>
    </PageLayout>
  );
}

export default BullsNCowsPage;
