import React, { useState } from "react";

function ClickTimes(props) {
  const { onButtonClick } = props;

  // State to keep track of the timestamps
  const [timestamps, setTimestamps] = useState([]);

  // Function to handle button click
  const handleClick = () => {
    const currentTime = Date.now();
    setTimestamps([...timestamps, currentTime]);
    onButtonClick(currentTime); // Pass the current timestamp to the parent component
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default ClickTimes;
