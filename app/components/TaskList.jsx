import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadTasks} from '../actions/actions';
import Task from './Task';

class TaskList extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.loadTasks();
  }

  render() {
    return (
      <div>
        <h2>List of tasks:</h2>
        {this.props.tasks.map(task => {
          return <Task key={task.taskID} nombreTarea={task.taskName} colorTarea={task.taskColor}/>;
        })}

      </div>
    );
  }
}

TaskList.propTypes = {
  loadTasks: PropTypes.func,
  tasks: PropTypes.array
};

function mapStateToProps(state) {
  return {
    tasks: state.tasks
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ loadTasks: loadTasks }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(TaskList);
