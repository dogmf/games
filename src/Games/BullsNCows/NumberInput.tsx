import React, {
  KeyboardEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";
import CLASSES from "./BullsNCows.module.scss";

interface InputProps<F> {
  value: F;
  onChange: (value: F) => void;
  id?: string;
  disabled?: boolean;
}

interface NumberInputProps extends InputProps<string> {
  length: number;
}

function getInputId(index: number) {
  return `bnc_number_input_${index}`;
}

const focusInputByIndex = (i: number) => {
  if (!document) return;
  let firstInput = document.getElementById(getInputId(i)) as HTMLElement;
  if (firstInput) firstInput.focus();
  // TODO: " do not stop on last cell "
};

function SingleNumberInput(props: InputProps<string>) {
  let { value, onChange, ...otherProps } = props;
  const keyPressHandler = useCallback(
    (e: KeyboardEvent) => {
      if (!isNaN(Number(e.key))) {
        onChange(e.key);
        e.preventDefault();
      } else {
        let target = e.target as HTMLElement;
        if (e.key === "ArrowLeft") {
          (target.previousElementSibling as HTMLElement)?.focus();
        } else if (e.key === "ArrowRight") {
          (target.nextElementSibling as HTMLElement)?.focus();
        } else return true;
      }
    },
    [onChange]
  );
  return (
    <input
      {...otherProps}
      maxLength={1}
      // onChange={(e) => onChange(e.target.value)}
      onKeyUp={keyPressHandler}
      className={CLASSES.singleNumberInput}
      value={value}
    />
  );
}

function NumberInput(props: NumberInputProps) {
  let { length, onChange, value: propsValue, disabled } = props;

  let [value, setValue] = useState<string[]>([]);
  let stringValue = useMemo(() => value.join(""), [value]);

  useEffect(() => {
    onChange(stringValue);
  }, [stringValue, onChange]);

  useEffect(() => {
    if (propsValue !== stringValue) {
      let newValue = [];
      for (let i = 0; i < length; i++) newValue.push(propsValue[i] || "0");
      setValue(newValue);
      focusInputByIndex(0);
    }
  }, [propsValue]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    let newValue = [];
    for (let i = 0; i < length; i++) newValue.push("0");
    setValue(newValue);
  }, [length]);

  const getOnChangeHandler = useCallback(
    (index) => (char: string) => {
      setValue((oldValue) => {
        let newValue = [...oldValue];
        newValue[index] = char;
        return newValue;
      });
      focusInputByIndex(index + 1);
    },
    []
  );

  return (
    <div className={CLASSES.numberInput}>
      {value.map((v, index) => (
        <SingleNumberInput
          id={getInputId(index)}
          key={index}
          value={v}
          disabled={disabled}
          onChange={getOnChangeHandler(index)}
        />
      ))}
    </div>
  );
}

export default NumberInput;
