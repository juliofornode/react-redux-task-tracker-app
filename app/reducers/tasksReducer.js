export default function(state=[], action) {
  switch(action.type) {
  case 'LOAD_TASKS':
    return action.payload;
  default:
    return state;
  }
}
