import Task from "./task/task";

const Tasks = () => {
  const getNow = () => {
    const date = new Date()
    return(new Date(date.toDateString()))
  }
  const tasks = [];
  for (let i = 0; i < localStorage.length; i++) {
    if (localStorage.key(i) === "last-id") {
      continue;
    } 
    else {
      const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
      console.log(item.date ?(( new Date(item.date))-getNow()): "")
      if (item.status && ((item.date ?(( new Date(item.date))-getNow()): false)<0)){
        localStorage.removeItem(localStorage.key(i))
      }
      // console.log(getNow())
      tasks.push(item);
    }
  }
  console.log(tasks);
  return (
    <>
      {tasks.map((item) => (
        <Task props={item} />
      ))}
    </>
  );
};

export default Tasks;
