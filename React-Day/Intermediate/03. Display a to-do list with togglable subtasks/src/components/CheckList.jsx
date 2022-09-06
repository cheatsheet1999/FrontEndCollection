import { useState } from "react";
import DisplaySubTasks from "./DisplaySubtasks";

const CheckList = ({ INITIAL_LIST }) => {
  const [list, setList] = useState(INITIAL_LIST);

  const handleOnClickComplete = (topTask, taskText, index) => {
    let new_list = { ...list };
    new_list[topTask][index][taskText] = !new_list[topTask][index][taskText];
    setList(new_list);
  };

  return (
    <div>
      {Object.entries(list).map(([topTask, subTasks]) => {
        return (
          <div>
            <h2>{topTask}</h2>
            <div style={{ display: "flex" }}>
              <DisplaySubTasks
                topTask={topTask}
                subTasks={subTasks}
                handleOnClickComplete={handleOnClickComplete}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CheckList;
