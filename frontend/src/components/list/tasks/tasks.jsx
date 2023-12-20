import Task from "./task/task";

const Tasks = () => {
  const tasks = [];


  const isNumber = (value) => {
    return !isNaN(parseFloat(value)) && isFinite(value);
  };


  const getNow = () => {
    const date = new Date();
    return new Date(date.toDateString());
  };
  

  for (let i = 0; i < localStorage.length; i++) {

    if (!isNumber(localStorage.key(i))) {
      continue;
    } 
    
    else {
      const item = JSON.parse(localStorage.getItem(localStorage.key(i)));
      
      if (
        item.status &&
        (item.date ? new Date(item.date) - getNow() : false) < 0
      ) 
      {
        localStorage.removeItem(localStorage.key(i));
      }

      tasks.push(item);
    }
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
