import React from "react";
import City from "./Cities";
function State({ cities, name, index }) {
  const [isClicked, setisClicked] = React.useState(false);
  const handleClick = () => {
    setisClicked(!isClicked);
  };
  return (
    <li>
      <h3 id={"state" + (index + 1)} onClick={handleClick}>
        {name}
      </h3>
      {isClicked ? (
        <ul>
          {cities.map((cit, index) => (
            <City index={index} name={cit.name} towns={cit.towns} />
          ))}
        </ul>
      ) : null}
    </li>
  );
}

export default State;
