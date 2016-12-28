const taskList = [
  {
    taskID: 1,
    taskName: 'Interview #1',
    taskColor: 'red'
  },
  {
    taskID: 2,
    taskName: 'Interview #2',
    taskColor: 'yellow'
  },
  {
    taskID: 3,
    taskName: 'Interview #3',
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

export function deleteTask(taskName) {
  return {
    type: 'DELETE_TASK',
    payload: taskName
  };
}

export function updateTask(oldName, newID, newName, newColor) {
  return {
    type: 'UPDATE_TASK',
    oldName: oldName,
    newID: newID,
    newName: newName,
    newColor: newColor
  };
}
