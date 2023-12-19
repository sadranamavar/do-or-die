import Task from "./task/task";

const Tasks = () => {
  const tasks = [];
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) === "last-id") {
      continue;
    }
    else{
    const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
    tasks.push(item);}
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
