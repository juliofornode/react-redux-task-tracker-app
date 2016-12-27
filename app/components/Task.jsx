import React, {Component, PropTypes} from 'react';
import ColorRank from './ColorRank';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTask, updateTask} from '../actions/actions';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      task: {
        taskID: '',
        taskName: '',
        taskColor: ''
      }
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeID = this.handleChangeID.bind(this);
    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangeColor = this.handleChangeColor.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleUpdate() {
    this.setState({ editing: true });
  }

  handleDelete() {
    let taskName = this.props.taskName;
    this.props.deleteTask(taskName);
  }

  handleSubmit(eventObject) {
    eventObject.preventDefault();
    let nombreTask = this.state.task.taskName;
    console.log('nombreTask: ', nombreTask);
    this.props.updateTask(nombreTask, this.state.task);
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
    let bloque;
    if(!this.state.editing) {
      bloque = (
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="container">
              <div className="row">
                <div className="col-md-9" style={{paddingTop: '12px'}}>
                  <button onClick={this.handleUpdate} className="btn btn-default">Edit</button>
                  <button onClick={this.handleDelete} className="btn btn-default">Delete</button>
                  &nbsp;&nbsp;
                  {this.props.taskName} -- {this.props.taskColor}
                </div>
                <ColorRank {...this.props}/>
              </div>
            </div>
          </div>
        </div>);
    } else {
      bloque = (
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
    return(
      <div>
        {bloque}
      </div>
    );
  }
}

Task.propTypes = {
  taskID: PropTypes.number,
  taskName: PropTypes.string,
  taskColor: PropTypes.string,
  deleteTask: PropTypes.func,
  updateTask: PropTypes.func
};

function mapActionsToProps(dispatch) {
  return bindActionCreators({ deleteTask: deleteTask, updateTask: updateTask }, dispatch);
}

export default connect(null, mapActionsToProps)(Task);
