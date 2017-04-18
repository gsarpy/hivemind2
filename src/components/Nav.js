import React from "react";

import Search from "./Search";

export default class Nav extends React.Component {
  render() {
    return (
      <div>
        <ul id="nav" className="nav navbar-nav">
          <li className="active"><a href="#">Profile <span className="sr-only">(current)</span></a></li>
          <li><a href="#">Friends</a></li>
          <li><a href="#">Favorite Games</a></li>
        </ul>
      </div>
    );
  }
}
