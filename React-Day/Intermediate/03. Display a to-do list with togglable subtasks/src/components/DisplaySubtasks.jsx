const DisplaySubTasks = ({ topTask, subTasks, handleOnClickComplete }) => {
  return (
    <>
      <div
        style={{
          paddingRight: 50,
          width: 250
        }}
      >
        <h3>Not Completed</h3>
        {subTasks.map((subTask, index) => {
          let taskText = Object.keys(subTask)[0];
          if (subTask[taskText] === false)
            return (
              <div>
                <p
                  onClick={() =>
                    handleOnClickComplete(topTask, taskText, index)
                  }
                >
                  {taskText}
                </p>
              </div>
            );
        })}
      </div>

      <div>
        <h3>Completed</h3>
        {subTasks.map((subTask, index) => {
          let taskText = Object.keys(subTask)[0];
          if (subTask[taskText] === true) {
            return (
              <p
                onClick={() => handleOnClickComplete(topTask, taskText, index)}
              >
                {taskText}
              </p>
            );
          }
        })}
      </div>
    </>
  );
};

export default DisplaySubTasks;
