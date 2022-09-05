import { useState } from "react";

const Activity = ({ activity }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <div>
      <button onClick={() => setShowDetails(!showDetails)}>
        {showDetails ? "Hide" : "Show"}
      </button>
      {activity.activity}

      {showDetails && (
        <>
          <p>type: {activity.type}</p>
          <p>participants: {activity.participants}</p>
          <p>price: {activity.price}</p>
          <p>key: {activity.key}</p>
          <p>accessibility: {activity.accessibility}</p>
        </>
      )}
    </div>
  );
};

export default Activity;
