import React, {Component, PropTypes} from 'react';

class Task extends Component {
  render() {
    return(
      <div className="panel panel-default">
        <div className="panel-body">
          {this.props.nombreTarea}
        </div>
      </div>
    );
  }
}

Task.propTypes = {
  nombreTarea: PropTypes.string
};

export default Task;
