import React, {Component, PropTypes} from 'react';
import ColorRank from './ColorRank';

class Task extends Component {
  render() {
    return(
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
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
  taskColor: PropTypes.string
};

export default Task;
