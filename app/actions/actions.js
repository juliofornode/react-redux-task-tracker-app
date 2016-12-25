const taskList = [
  {
    taskID: 0,
    taskName: 'Interview #0'
  },
  {
    taskID: 1,
    taskName: 'Interview #1'
  },
  {
    taskID: 2,
    taskName: 'Interview #2'
  },
];


export function loadTasks() {
  return {
    type: 'LOAD_TASKS',
    payload: taskList
  };
}
