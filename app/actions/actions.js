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
