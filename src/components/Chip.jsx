import propTypes from "prop-types";
function Chip({ children, onSelect }) {
  const childContent =
    typeof children === "number" ? children.toString() : children;

  return (
    <li
      onClick={onSelect}
      className="px-2 py-[0.5rem] text-center text-white bg-neutral-very-dark-cyan  text-[1.5rem] rounded-md font-semibold w-full cursor-pointer hover:bg-neutral-light-grayish-cyan hover:text-neutral-very-dark-cyan"
    >
      {childContent}
    </li>
  );
}

Chip.propTypes = {
  children: propTypes.oneOfType([propTypes.element, propTypes.number]),
  onSelect: propTypes.func,
};

export default Chip;
