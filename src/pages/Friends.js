import React from "react";

import FriendsList from "../components/FriendsList";

export default class Friends extends React.Component {
  render() {
    return (
      <div>
        <h2>Friends</h2>
        <FriendsList />
      </div>
    );
  }
}
