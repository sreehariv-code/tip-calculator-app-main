import { useState } from "react";
import TextInput from "./TextInput";
import Chip from "./Chip";

import userImg from "../assets/icon-person.svg";

const tipList = [
  { id: 1, value: 5 },
  { id: 2, value: 10 },
  { id: 3, value: 15 },
  { id: 4, value: 25 },
  { id: 5, value: 50 },
];

function Calculator() {
  const [amount, setAmount] = useState("");
  const [tip, setTip] = useState("");
  const [noOfPeople, setNoOfPeople] = useState("");
  const [error, setError] = useState(false);

  // function isNumber(str) {
  //   var regex = /^\d*\.?\d+$/;
  //   return regex.test(str);
  // }

  function isValidNumber(value) {
    // Regular expression to match numbers with optional decimal places
    const regex = /^\d*\.?\d*$/;
    return regex.test(value);
  }

  function isZero(value) {
    return value === 0;
  }

  function handlePeople(event) {
    setError(false);
    if (isZero(parseInt(event.target.value))) {
      setError(true);
      return;
    }
    handleAmount(event, setNoOfPeople);
  }

  function handleAmount(event, setFunction) {
    const newValue = event.target.value;
    setFunction((prev) => {
      // Check if the new value is a valid number or an empty string
      if (isValidNumber(newValue) || newValue === "") {
        return newValue; // Return the new value if it's a valid number or empty string
      } else {
        // If not a valid number or empty string, revert to the previous value
        return prev;
      }
    });
  }

  function handleClick(value) {
    setTip(value);
  }

  function handleReset() {
    setAmount("");
    setTip("");
    setNoOfPeople("");
    setError(false);
  }

  const totalAmount =
    Number(amount) + Number(amount) * (Number(tip) / 100) || "0.00";
  const roundedTotalAmount = totalAmount;
  const tipAmount = Number(noOfPeople) && totalAmount / Number(noOfPeople);
  const roundedTipAmount = tipAmount.toFixed(2); // Round to 2 decimal points

  return (
    <div className="md:w-[80%] lg:w-[60%] mx-auto pt-[3rem] md:rounded-3xl shadow-[0_0_25px_-15px] rounded-t-[2rem] shadow-neutral-grayish-cyan bg-white p-[1rem] md:min-h-[inherit] overflow-hidden flex flex-col md:flex-row md:p-[20px] md:mt-9 min-h-screen gap-4 justify-between">
      <section className="md:w-1/2  left  min-h-[200px] md:p-[2rem]">
        <TextInput
          state={amount}
          labelText="Bill"
          onChange={(event) => handleAmount(event, setAmount)}
        />
        <div className="mt-6 tip-section">
          <p className="font-semibold text-neutral-grayish-cyan">
            Select Tip %
          </p>
          <ul className="grid grid-cols-3 gap-4 mt-3">
            {tipList.map((tip) => (
              <Chip
                key={tip.id}
                onKey={tip.id}
                onSelect={() => handleClick(tip.value)}
              >
                {tip.value}%
              </Chip>
            ))}
            <div className="flex px-2 py-1 rounded-md text-input bg-neutral-very-light-grayish-cyan">
              <input
                type="text"
                name="amount"
                id="amount"
                className="w-full text-right bg-transparent outline-none text-[1.5rem] placeholder:text-lg md:placeholder:text-xl placeholder-neutral-grayish-cyan placeholder:text-center"
                placeholder="Custom"
                value={tip}
                onChange={(event) => handleAmount(event, setTip)}
              />
            </div>
          </ul>
          <div className="pt-10 wrapper">
            <TextInput
              labelText="Number of People"
              labelImage={userImg}
              onChange={(event) => handlePeople(event)}
              state={noOfPeople}
              errorState={error}
            />
          </div>
        </div>
      </section>
      <section className="md:w-1/2 bg-neutral-very-dark-cyan right min-h-[300px]  rounded-[1.25rem] pt-10 p-5 md:p-10 flex flex-col justify-between flex-1">
        <div className="flex flex-col gap-5 wrapper">
          <div className="flex items-center justify-between amount tip">
            <p className="font-semibold text-neutral-very-light-grayish-cyan text-[5vw] md:text-[20px] ">
              Tip Amount
              <br />
              <span className="font-normal text-neutral-light-grayish-cyan text-[4vw] md:text-[15px]">
                / person
              </span>
            </p>
            <p className="numerals text-[10vw] md:text-[3rem] font-semibold text-primary-cyan ">
              ${roundedTotalAmount}
            </p>
          </div>
          <div className="flex items-center justify-between amount total">
            <p className="font-semibold text-neutral-very-light-grayish-cyan text-[5vw] md:text-[20px] ">
              Total
              <br />
              <span className="font-normal text-neutral-light-grayish-cyan  text-[4vw] md:text-[15px]">
                / person
              </span>
            </p>
            <p className="numerals text-[10vw] md:text-[3rem]  font-semibold text-primary-cyan ">
              ${roundedTipAmount}
            </p>
          </div>
        </div>
        <button
          onClick={handleReset}
          className="mt-7 md:mt-0 py-3 font-semibold uppercase rounded-md text-neutral-very-dark-cyan bg-primary-cyan hover:bg-neutral-light-grayish-cyan"
        >
          Reset
        </button>
      </section>
    </div>
  );
}

export default Calculator;
