import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  handleChange = (event) => {
    this.props.searchFunction(event.target.value);
  };

  render() {
    return (
      <input type="text" className="form-search form-control" onChange={this.handleChange} />
    );
  }
}

export default SearchBar;
