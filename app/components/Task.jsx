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
                {this.props.nombreTarea}
              </div>
              <ColorRank colorRank={this.props.colorTarea}/>
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
