const taskList = [
  {
    taskID: 0,
    taskName: 'Interview #0',
    taskColor: 'red'
  },
  {
    taskID: 1,
    taskName: 'Interview #1',
    taskColor: 'yellow'
  },
  {
    taskID: 2,
    taskName: 'Interview #2',
    taskColor: 'green'
  },
];


export function loadTasks() {
  return {
    type: 'LOAD_TASKS',
    payload: taskList
  };
}

export function updateColor(taskName, newColor) {
  return {
    type: 'UPDATE_COLOR',
    taskName: taskName,
    newColor: newColor
  };
}

export function createTask(newTask) {
  return {
    type: 'CREATE_TASK',
    payload: newTask
  };
}
