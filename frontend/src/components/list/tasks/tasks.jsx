import Task from "./task/task";

const Tasks = () => {
  const tasks = [];
  for (let i = 0; i < localStorage.length; i++) {
    if (i === 0) {
      continue;
    }
    const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
    tasks.push(item);
  }

  return (
    <>
      {tasks.map((item) => (
        <Task props={item} />
      ))}
    </>
  );
};

export default Tasks;
