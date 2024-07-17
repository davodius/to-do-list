import React, { useState } from "react";

function ToDoList() {
  // array for tasks in string format
  const [tasks, setTasks] = useState([
    "eat breakfast ",
    "take a shower ",
    "walk the dog",
  ]);
  // state variable for a new task new task we will add to the array for tasks (above)
  const [newTask, setNewTask] = useState("");

  // function for what is typed inte the textbox (into the input box)
  function handleInputchange(event) {
    setNewTask(event.target.value);
  }

  // adding task
  function addTask() {
    // checking to see if addtask is empty + remove space from beginnning and end of input and go on input is not empty
    if (newTask.trim() !== "") {
      // adds the new task to the end of array newtask
      setTasks((t) => [...t, newTask]);
      // gives the newtask array an empty string for input next time
      setNewTask("");
    }
  }

  // removing a task - index is the number to be deleted
  function deleteTask(index) {
    // new variable for updating the list by filtering out the variable whose index matches the one that was chosen
    const updatedTasks = tasks.filter((_, i) => i !== index);
    // sets the new updated order after filtering out the chosen one from above
    setTasks(updatedTasks);
  }

  // move task up - by choosing index
  function moveTaskUp(index) {
    // checks if the chosen index is more than 0 so only those under the first can be moved up
    if (index > 0) {
      // opens the array and selects all elements inside
      const updatedTasks = [...tasks];
      // this makes the index switch with the index before it (index-1)
      [updatedTasks[index], updatedTasks[index - 1]] = [
        // this is the index before (index-1) moved down
        updatedTasks[index - 1],
        // this is index being moved up (selected one in application)
        updatedTasks[index],
      ];
      // setter for updating the new order of the array
      setTasks(updatedTasks);
    }
  } // 1,2 = 2,1                [0,1,2 ] = [1,0,2]

  // move task down
  function moveTaskDown(index) {
    // checks if the chosen index is the last one on the list, if not then it can be moved down
    if (index < tasks.length - 1) {
      // opens the array and selects all elements inside
      const updatedTasks = [...tasks];
      // this makes the index switch with the index after it (index+1)
      [updatedTasks[index], updatedTasks[index + 1]] = [
        // this is the index after (index+1) moved up
        updatedTasks[index + 1],
        // this is index being moved down (selected one in application)
        updatedTasks[index],
      ];
      // setter for updating the new order of the array
      setTasks(updatedTasks);
    }
  } // 2,1 = 1,2                [0,1,2 ] = [0,2,1]

  return (
    <div className="to-do-list">
      <h1>To-Do-List</h1>

      <div>
        <input
          type="text"
          placeholder="Enter a task..."
          value={newTask}
          onChange={handleInputchange}
        />
        <button className="add-button" onClick={addTask}>
          Add
        </button>
      </div>

      <ol>
        {tasks.map((task, index) => (
          //
          <li key={index}>
            <span className="text">{task}</span>

            <button className="delete-button" onClick={() => deleteTask(index)}>
              Delete
            </button>
            <button className="move-button" onClick={() => moveTaskUp(index)}>
              Up
            </button>
            <button className="move-button" onClick={() => moveTaskDown(index)}>
              Down
            </button>
          </li>
          //
        ))}
      </ol>
    </div>
  );
}
export default ToDoList;
