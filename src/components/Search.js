import React from "react";

export default class Search extends React.Component{
  render() {
    return(
      <input type="text" onChange={this} className="form-control nav-search" placeholder="Find games by title" />
    );
  }
}
