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
    this.noEditar = this.noEditar.bind(this);
  }

  handleSubmit(eventObject) {
    eventObject.preventDefault();
    this.props.updateTask(this.props.taskName, this.state);
  }

  handleChangeID(eventObject) {
    let nuevaID = eventObject.target.value;
    this.setState({taskID: nuevaID});
  }

  handleChangeName(eventObject) {
    let nuevoName = eventObject.target.value;
    this.setState({taskName: nuevoName});
  }

  handleChangeColor(eventObject) {
    let nuevoColor = eventObject.target.value;
    this.setState({taskColor: nuevoColor});
  }

  noEditar() {
    this.props.toApp();
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
                      type="text"
                      value={this.state.taskID}
                      placeholder={this.state.taskID}
                      className="form-control">
                    </input>
                    <input
                      onChange={this.handleChangeName}
                      type="text"
                      value={this.state.taskName}
                      placeholder={this.state.taskName}
                      className="form-control">
                    </input>
                    <input
                      onChange={this.handleChangeColor}
                      type="text"
                      value={this.state.taskColor}
                      placeholder={this.state.taskColor}
                      className="form-control">
                    </input>
                  </div>
                  <button type="submit" className="btn btn-default">Update</button>
                  <button onClick={this.noEditar} type="submit" className="btn btn-default">No Update</button>
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
  updateTask: PropTypes.func,
  toApp: PropTypes.func
};

function mapActionsToProps(dispatch) {
  return bindActionCreators({ updateTask: updateTask }, dispatch);
}

export default connect(null, mapActionsToProps)(UpdateTask);
