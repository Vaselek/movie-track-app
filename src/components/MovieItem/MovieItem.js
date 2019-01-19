import React, {Component} from 'react';

class MovieItem extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.title !== this.props.title ||
      nextProps.id !== this.props.id;
  }
  render() {
    return (
      <li className="list-group-item d-flex justify-content-between">
        {this.props.title}
        <button className="btn btn-primary" onClick={this.props.remove}>x</button>
      </li>
    );
  }
}

export default MovieItem;