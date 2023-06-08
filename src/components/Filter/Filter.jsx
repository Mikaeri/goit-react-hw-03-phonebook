import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Filter extends Component {
  handleChange = e => {
    this.props.onFilterChange(e.target.value);
  };

  render() {
    const { filter } = this.props;

    return (
      <>
        <p>Find contacts by name</p>
        <input
          type="text"
          placeholder="Find name"
          value={filter}
          onChange={this.handleChange}
        />
      </>
    );
  }
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onFilterChange: PropTypes.func.isRequired,
};
