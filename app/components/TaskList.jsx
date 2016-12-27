import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {loadTasks} from '../actions/actions';
import Task from './Task';

class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = { tasks: [] };
  }

  componentDidMount() {
    let currentTasks = this.props.loadTasks();
    this.setState({tasks: currentTasks});
  }

  render() {
    if(!this.state.tasks) {
      return <p>Loading...</p>;
    } else {
      return (
        <div>
          <h3>List of tasks:</h3>
          {this.props.tasks.map(task => {
            return <Task key={task.taskID} {...task} />;
          })}

        </div>
      );
    }

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
