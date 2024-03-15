/* eslint-disable react/prop-types */
const ShowTask = ({ tasklist, setTasklist, task, setTask }) => {
  const handleClearButton = () => {
    setTasklist([]);
  };

  const handleDeleteTask = (taskId) => {
    setTasklist(tasklist.filter((task) => task.id !== taskId));
  };

  const handleEditTask = (taskId) => {
    const selectedTask = tasklist.find((task) => task.id === taskId);
    console.log(selectedTask);
    setTask(selectedTask);
  };

  return (
    <section className="showTask">
      <div className="head">
        <div>
          <span className="title">Todo</span>
          <span className="count">{tasklist.length}</span>
        </div>
        <button className="clearAll" onClick={handleClearButton}>
          Clear All
        </button>
      </div>
      <ul>
        {tasklist.map((task) => (
          <li key={task?.id}>
            <p>
              <span className="name">{task?.name}</span>
              <span className="time">{task?.time}</span>
            </p>
            <i
              className="bi bi-pencil-square"
              onClick={() => handleEditTask(task.id)}
            ></i>
            <i
              className="bi bi-trash"
              onClick={() => handleDeleteTask(task.id)}
            ></i>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ShowTask;
