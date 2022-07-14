import React, { useContext, useRef } from "react";
import { CourseInfoContext } from "../../App";
import styles from "./Converter.module.scss";

const Converter = () => {
  const items = useContext(CourseInfoContext);
  const uah = {
    r030: 965,
    txt: "Українська гривня",
    rate: 1,
    cc: "UAH",
  };
  items.push(uah);
  //// Я не знайшов безплатне API на багато запитів, а в завданні написано, що гривня також повинна бути в селекті. Знаю, що це не правильний крок

  const selectRef1 = useRef();
  const selectRef2 = useRef();
  const inputRef1 = useRef();
  const inputRef2 = useRef();

  function onChangeAmount1(event) {
    const input_value = event.target.value;
    const currency_value1 = selectRef1.current.value;
    const currency_value2 = selectRef2.current.value;
    const calculated_value = input_value * (currency_value1 / currency_value2);
    inputRef2.current.value = calculated_value;
  }

  function onChangeAmount2(event) {
    const input_value = event.target.value;
    const currency_value1 = selectRef1.current.value;
    const currency_value2 = selectRef2.current.value;
    const calculated_value = input_value * (currency_value2 / currency_value1);
    inputRef1.current.value = calculated_value;
  }

  function onChangeCurrency1(event) {
    const currency_value1 = event.target.value;
    const currency_value2 = selectRef2.current.value;
    const input_value = inputRef1.current.value;
    const calculated_value = input_value * (currency_value1 / currency_value2);
    inputRef2.current.value = calculated_value;
  }

  function onChangeCurrency2(event) {
    const currency_value2 = event.target.value;
    const currency_value1 = selectRef1.current.value;
    const input_value = inputRef2.current.value;
    const calculated_value = input_value * (currency_value2 / currency_value1);
    inputRef1.current.value = calculated_value;
  }

  return (
    <>
      <div className={styles.converter}>
        <input
          ref={inputRef1}
          className={styles.amount__input}
          type="number"
          defaultValue
          onChange={onChangeAmount1}
        />
        <select
          className={styles.currency__list}
          ref={selectRef1}
          onChange={onChangeCurrency1}
        >
          {items.map((obj) => (
            <option key={obj.cc} value={obj.rate}>
              {obj.txt}
            </option>
          ))}
        </select>
      </div>
      <div className={styles.converter}>
        <input
          ref={inputRef2}
          className={styles.amount__input}
          type="number"
          defaultValue
          onChange={onChangeAmount2}
        />
        <select
          className={styles.currency__list}
          ref={selectRef2}
          onChange={onChangeCurrency2}
        >
          {items.map((obj) => (
            <option key={obj.cc} value={obj.rate}>
              {obj.txt}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
export default Converter;
