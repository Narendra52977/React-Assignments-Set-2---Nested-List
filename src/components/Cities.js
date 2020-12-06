import React from "react";
import Town from "./Towns";
function City({ towns, name, index }) {
  const [isClicked, setisClicked] = React.useState(false);
  const handleClick = () => {
    setisClicked(!isClicked);
  };
  return (
    <li>
      <h3 id={"city" + (index + 1)} onClick={handleClick}>
        {name}
      </h3>
      {isClicked && (
        <ul>
          {towns.map((town, index) => (
            <Town index={index} name={town.name} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default City;
