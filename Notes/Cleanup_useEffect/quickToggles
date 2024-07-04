import React from "react";

import VisuallyHidden from "./VisuallyHidden";

function UselessMachine() {
  const id = React.useId();
  const [isOn, setIsOn] = React.useState(true);
  const inputRef = React.useRef();

  React.useEffect(() => {
    // if isOn = false, re-ticked automatically after 500ms
    // if (!isOn) {
    const timeOutId = setTimeout(() => {
      console.log("checked");
      setIsOn(true);
    }, 500);

    // cleanup function
    return () => {
      clearTimeout(timeOutId);
      // };
    };
  }, [isOn]);

  return (
    <>
      <input
        id={id}
        type="checkbox"
        checked={isOn}
        onChange={(event) => {
          setIsOn(event.target.checked);
        }}
      />
      <VisuallyHidden>
        <label htmlFor={id}>Toggle checkbox</label>
      </VisuallyHidden>
    </>
  );
}

export default UselessMachine;
