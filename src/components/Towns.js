import React from "react";
function Town({ name, index }) {
  // const [isClicked, setisClicked] = React.useState(false);

  return (
    <div>
      <h3 id={"town" + (index + 1)}>{name}</h3>
    </div>
  );
}

export default Town;
