import React from 'react';

import Title from "./Header/Title";

// Create Header Class //
export default class Header extends React.Component {
  handleChange(e) {
    const title = e.target.value;
    this.props.changeTitle(title);
  }

  render () {
		return (
			<header>
        <Title title={this.props.title} />
        <input onChange={this.handleChange.bind(this)} />
      </header>
		);
	}
}
