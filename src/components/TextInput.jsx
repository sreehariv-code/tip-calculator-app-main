import dollarSign from "../assets/icon-dollar.svg";
import propTypes from "prop-types";

function TextInput({
  labelImage,
  state,
  onChange,
  labelText,
  errorState = false,
}) {
  return (
    <>
      <div className="flex justify-between">
        {labelText && (
          <label
            htmlFor="amount"
            className="flex mb-2 font-semibold text-neutral-grayish-cyan"
          >
            {labelText || "Bill"}
          </label>
        )}
        {errorState && <p>Can&apos;t be zero</p>}
      </div>
      <div className="flex p-3 rounded-lg text-input bg-neutral-very-light-grayish-cyan">
        <div className="flex items-center justify-center aspect-square label-img w-[15px]">
          <img
            src={labelImage || dollarSign}
            alt="dollar-sign"
            className="w-full"
          />
        </div>
        <input
          type="text"
          name="amount"
          id="amount"
          value={state}
          onChange={onChange}
          className="w-full text-right bg-transparent outline-none text-[23px] placeholder-neutral-grayish-cyan"
          placeholder="0"
        />
      </div>
    </>
  );
}

TextInput.propTypes = {
  state: propTypes.string,
  onChange: propTypes.func,
  labelImage: propTypes.string,
  labelText: propTypes.string,
  className: propTypes.string,
  errorState: propTypes.bool,
};

export default TextInput;
