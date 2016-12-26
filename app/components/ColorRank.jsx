import React, {Component, PropTypes} from 'react';

class ColorRank extends Component {
  constructor(props) {
    super(props);
    this.state = {
      colorSet: this.props.colorRank,
      colors: ['red', 'yellow', 'green']
    };
    this.changeColor = this.changeColor.bind(this);
  }
  changeColor() {
    let currentColor = this.state.colorSet;
    const colores = this.state.colors;
    let posicion = colores.indexOf(currentColor);
    if(posicion < colores.length - 1 ) {
      this.setState({ colorSet: colores[posicion + 1] });
    }

  }
  render() {
    if(!this.state.colorSet) {
      return <p>Loading...</p>;
    } else {
      return(
        <div className="col-md-3">
          <svg width="40" height="40">
            <circle cx="20" cy="20" r="19" stroke="gray" strokeWidth="1" fill={this.state.colorSet} />
          </svg>
          <button onClick={this.changeColor} className="btn btn-default" style={{position: 'relative', bottom: '15px', left: '25px'}}>Next Stage</button>
        </div>
      );
    }
  }
}

ColorRank.propTypes = {
  colorRank: PropTypes.string
};

export default ColorRank;
