import React, {Component} from 'react';

import './AddMovie.css';

class AddMovie extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.title !== this.props.title ||
      nextProps.onChange !== this.props.onChange ||
      nextProps.onClick !== this.props.onClick;
  };
  render() {
    return (
      <div className="input-group mb-3">
        <input type="text"
               className="form-control"
               value={this.props.title}
               onChange={this.props.onChange}
               placeholder="Movie title"/>
        <div className="input-group-append">
          <button className="btn btn-outline-secondary" onClick={this.props.onClick} type="button">Add</button>
        </div>
      </div>
    );
  }
}

export default AddMovie;