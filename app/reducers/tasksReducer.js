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
  default:
    return state;
  }
}
