export default function(state=[], action) {
  switch(action.type) {
  case 'LOAD_TASKS':
    return action.payload;
  case 'UPDATE_COLOR':
    return state.map(item => {
      if(item.taskName === action.taskName) {
        console.log(item.taskName, action.newColor);
        return {...item, taskColor: action.newColor};
      } else {
        return item;
      }
    });
  default:
    return state;
  }
}
