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

  function isNumber(str) {
    var regex = /^\d*\.?\d+$/;
    return regex.test(str);
  }

  function isZero(value) {
    return value === 0;
  }

  function handlePeople(event) {
    setError(false);
    if (isZero(Number(event.target.value))) {
      setError(true);
      return;
    }
    handleAmount(event, setNoOfPeople);
  }

  function handleAmount(event, setFunction) {
    const newValue = event.target.value;
    setFunction((prev) => {
      // Check if the new value is a valid number or an empty string
      if (isNumber(newValue) || newValue === "") {
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

  const totalAmount = Number(amount) + Number(amount) * (Number(tip) / 100);
  console.log("No of People", Number(noOfPeople));

  return (
    <div className="md:w-[80%] lg:w-[60%] mx-auto  rounded-3xl shadow-[0_0_25px_-15px] shadow-neutral-grayish-cyan bg-white p-[3rem]   md:min-h-[inherit] overflow-hidden flex flex-col md:flex-row md:p-[20px] md:mt-9 min-h-screen gap-4">
      <section className="md:w-1/2  left  min-h-[200px] md:p-[2rem]">
        <TextInput
          state={amount}
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
      <section className="md:w-1/2 bg-neutral-very-dark-cyan right min-h-[200px]  rounded-[1.25rem] p-10 flex flex-col justify-between">
        <div className="flex flex-col gap-5 wrapper">
          <div className="flex items-center justify-between amount tip">
            <p className="font-semibold text-neutral-very-light-grayish-cyan text-[20px] ">
              Tip Amount
              <br />
              <span className="font-normal text-neutral-light-grayish-cyan text-[15px]">
                / person
              </span>
            </p>
            <p className="numerals text-[3rem] font-semibold text-primary-cyan ">
              ${totalAmount}
            </p>
          </div>
          <div className="flex items-center justify-between amount total">
            <p className="font-semibold text-neutral-very-light-grayish-cyan text-[20px] ">
              Total
              <br />
              <span className="font-normal text-neutral-light-grayish-cyan text-[15px]">
                / person
              </span>
            </p>
            <p className="numerals text-[3rem] font-semibold text-primary-cyan ">
              $32.79
            </p>
          </div>
        </div>
        <button className="py-3 font-semibold uppercase rounded-md text-neutral-very-dark-cyan bg-primary-cyan hover:bg-neutral-light-grayish-cyan">
          Reset
        </button>
      </section>
    </div>
  );
}

export default Calculator;
