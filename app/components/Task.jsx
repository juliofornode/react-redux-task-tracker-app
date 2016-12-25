import React, {Component, PropTypes} from 'react';

class Task extends Component {
  render() {
    return(
      <div className="panel panel-default">
        <div className="panel-body">
          <div className="container">
            <div className="row">
              <div className="col-md-9">
                {this.props.nombreTarea}
              </div>
              <div className="col-md-3">
                <svg width="40" height="40">
                  <circle cx="20" cy="20" r="19" stroke="gray" strokeWidth="1" fill={this.props.colorTarea} />
                </svg>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

Task.propTypes = {
  nombreTarea: PropTypes.string,
  colorTarea: PropTypes.string
};

export default Task;
