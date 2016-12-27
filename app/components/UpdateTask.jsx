import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {updateTask} from '../actions/actions';

class UpdateTask extends Component {
  constructor(props) {
    super(props);
    this.state = {
      taskID: this.props.taskID,
      taskName: this.props.taskName,
      taskColor: this.props.taskColor
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeID = this.handleChangeID.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
  }

  handleSubmit(eventObject) {
    eventObject.preventDefault();
    let editedTask = this.state.task;
    this.props.updateTask(editedTask.taskName, editedTask);
    this.setState({ task: {taskID: ''} });
    this.setState({ task: {taskName: ''} });
    this.setState({ task: {taskColor: ''} });
    this.setState({ editing: false });
  }

  handleChangeID(eventObject) {
    let nuevaID = eventObject.target.value;
    this.setState({ task: {taskID: nuevaID} });
  }

  handleChangeName(eventObject) {
    let nuevoName = eventObject.target.value;
    this.setState({ task: {taskName: nuevoName} });
  }

  handleChangeColor(eventObject) {
    let nuevoColor = eventObject.target.value;
    this.setState({ task: {taskColor: nuevoColor} });
  }
  render() {
    return(
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="container">
            <div className="row">
              <div>
                <form onSubmit={this.handleSubmit} className="form-inline">
                  <div className="form-group">
                    <input
                      onChange={this.handleChangeID}
                      value={this.state.taskID}
                      type="text"
                      placeholder={this.props.taskID}
                      className="form-control">
                    </input>
                    <input
                      onChange={this.handleChangeName}
                      type="text"
                      value={this.state.taskName}
                      placeholder={this.props.taskName}
                      className="form-control">
                    </input>
                    <input
                      onChange={this.handleChangeColor}
                      type="text"
                      value={this.state.taskColor}
                      placeholder={this.props.taskColor}
                      className="form-control">
                    </input>
                  </div>
                  <button type="submit" className="btn btn-default">Update</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

UpdateTask.propTypes = {
  taskID: PropTypes.number,
  taskName: PropTypes.string,
  taskColor: PropTypes.string,
  updateTask: PropTypes.func
};

function mapActionsToProps(dispatch) {
  return bindActionCreators({ updateTask: updateTask }, dispatch);
}

export default connect(null, mapActionsToProps)(UpdateTask);
