import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {createTask} from '../actions/actions';

class CreateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskID: '',
      taskName: '',
      taskColor: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeID = this.handleChangeID.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleSubmit(eventObject) {
    eventObject.preventDefault();
    this.props.createTask(this.state);
    this.setState({ taskID: '' });
    this.setState({ taskName: '' });
    this.setState({ taskColor: '' });
  }

  handleChangeID(eventObject) {
    let nuevaID = eventObject.target.value;
    this.setState({ taskID: nuevaID });
  }

  handleChangeName(eventObject) {
    let nuevoName = eventObject.target.value;
    this.setState({ taskName: nuevoName });
  }

  handleChangeColor(eventObject) {
    let nuevoColor = eventObject.target.value;
    this.setState({ taskColor: nuevoColor });
  }

  render() {
    return(
      <div>
        <h3>New Task:</h3>
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="form-group">
            <input
              onChange={this.handleChangeID}
              value={this.state.taskID}
              type="text"
              placeholder="task id"
              className="form-control">
            </input>
            <input
              onChange={this.handleChangeName}
              type="text"
              value={this.state.taskName}
              placeholder="task name"
              className="form-control">
            </input>
            <input
              onChange={this.handleChangeColor}
              type="text"
              value={this.state.taskColor}
              placeholder="task color"
              className="form-control">
            </input>
          </div>
          <button type="submit" className="btn btn-default">Create</button>
        </form>
        <hr></hr>
      </div>
    );
  }
}

CreateTask.propTypes = {
  createTask: PropTypes.func
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ createTask: createTask }, dispatch);
}

export default connect(null, mapDispatchToProps)(CreateTask);
