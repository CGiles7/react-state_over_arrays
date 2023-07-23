import React, { useState } from "react";
import ClickTimes from "./ClickTimes";
import TimestampsDisplay from "./TimestampsDisplay";

function App() {
  // State to keep track of the timestamps received from ClickTimes
  const [timestamps, setTimestamps] = useState([]);

  // Function to handle button click from ClickTimes
  const handleButtonClick = (timestamp) => {
    setTimestamps([...timestamps, timestamp]);
  };

  return (
    <div>
      {/* Pass the handleButtonClick function to ClickTimes */}
      <ClickTimes onButtonClick={handleButtonClick} />

      {/* Display the timestamps using TimestampsDisplay */}
      <TimestampsDisplay timestamps={timestamps} />
    </div>
  );
}

export default App;
