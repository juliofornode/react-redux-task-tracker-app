import React from 'react';
import CreateTask from './CreateTask';
import TaskList from './TaskList';

const App = () => {
  return (
    <div className="my-app" style={{marginTop: '50px'}}>
      <CreateTask />
      <TaskList />
    </div>
  );
};

export default App;
