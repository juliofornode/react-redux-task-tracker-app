import React, {Component, PropTypes} from 'react';
import ColorRank from './ColorRank';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {deleteTask} from '../actions/actions';

class Task extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }

  handleDelete() {
    let taskName = this.props.taskName;
    this.props.deleteTask(taskName);
  }

  render() {
    return(
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="container">
            <div className="row">
              <div className="col-md-9" style={{paddingTop: '12px'}}>
                <button onClick={this.handleDelete} className="btn btn-default">Delete</button>
                &nbsp;&nbsp;
                {this.props.taskName} -- {this.props.taskColor}
              </div>
              <ColorRank {...this.props}/>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

Task.propTypes = {
  taskName: PropTypes.string,
  taskColor: PropTypes.string,
  deleteTask: PropTypes.func
};

function mapActionsToProps(dispatch) {
  return bindActionCreators({ deleteTask: deleteTask }, dispatch);
}

export default connect(null, mapActionsToProps)(Task);
