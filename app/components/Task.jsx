import React, {Component, PropTypes} from 'react';
import ColorRank from './ColorRank';
import UpdateTask from './UpdateTask';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTask} from '../actions/actions';

class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false
    };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.noUpdate = this.noUpdate.bind(this);
  }

  handleUpdate() {
    this.setState({ editing: true });
  }

  handleDelete() {
    let taskName = this.props.taskName;
    this.props.deleteTask(taskName);
  }

  noUpdate() {
    this.setState({ editing: false });
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
        <UpdateTask {...this.props} toApp={this.noUpdate}/>
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
  deleteTask: PropTypes.func,
  taskName: PropTypes.string,
  taskColor: PropTypes.string
};

function mapActionsToProps(dispatch) {
  return bindActionCreators({ deleteTask: deleteTask }, dispatch);
}

export default connect(null, mapActionsToProps)(Task);
