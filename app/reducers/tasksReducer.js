export default function(state=[], action) {
  switch(action.type) {
  case 'LOAD_TASKS':
    return action.payload;
  case 'UPDATE_COLOR':
    return state.map(item => {
      if(item.taskName === action.taskName) {
        return {...item, taskColor: action.newColor};
      } else {
        return item;
      }
    });
  case 'CREATE_TASK':
    return [...state, action.payload];
  case 'DELETE_TASK':
    return state.filter((task) => {
      return (task.taskName !== action.payload);
    });
  case 'UPDATE_TASK':
    return state.map(item => {
      if(item.taskName === action.oldName) {
        return {
          taskID: (action.newID * 11),
          taskName: action.newName,
          taskColor: action.newColor
        };
      } else {
        return item;
      }
    });
  default:
    return state;
  }
}
