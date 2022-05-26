import React, { useState } from "react";
const options = [
  "Double Espresso",
  "Mocha",
  "Chocolate Syrup",
  "Whipped Cream",
];

export default function OrderCoffee() {
  const [selected, setSelected] = useState([]);

  const toggleOptions = ({ target }) => {
    const clickedOptions = target.value;

    // function <setSelected> fills in the array [selected], which is displayed at the bottom in Order a [selected] coffee.
    setSelected((prev) => {
      if (prev.includes(clickedOptions)) {
        // filter the clicked options out of state
        return prev.filter((t) => t !== clickedOptions);
      } else {
        // add the clicked options to state
        return [clickedOptions, ...prev];
      }
    });
  };

  return (
    <div>
      {options.map((option) => (
        <button value={option} key={option} onClick={toggleOptions}>
          {selected.includes(option) ? "Remove " : "Add "}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(", ")} coffee.</p>
    </div>
  );
}

// NOTE - ways to work with setSelected
// const handler = (event) => {
//   const value = event.target.value;
//   const newStateArray = [];
//   setSelected(newStateArray);
// // OR
//   setSelected((prev)=>{
//     return newStateArray
//   });
// };
