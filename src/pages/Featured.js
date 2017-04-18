import React from "react";

export default class Featured extends React.Component {
  render () {
    return (
      <div>
        <div className="jumbotron jumbo-intro mb5em">
          <h2>Welcome to Hivemind</h2>
          <h4>
            Solo queueing into competitive games can be an inconsistent nightmare.
            Become a hivemind and work together to level up in rank and win more games!
          </h4>
        </div>
        <h3>Featured Games</h3>
        <h4>See what gamers are playing right now</h4>
        <hr />
        <div className="row">
          <div className="col-md-4 col-sm-6 featured-game">
            <p>Overwatch <span className="badge">758 Players</span></p>
            <img src="./images/games/overwatch.jpg" className="img-responsive"/>
          </div>
          <div className="col-md-4 col-sm-6 featured-game">
            <p>World of Warcraft <span className="badge">723 Players</span></p>
            <img src="./images/games/wow.jpg" className="img-responsive"/>
          </div>
          <div className="col-md-4 col-sm-6 featured-game">
            <p>League of Legends <span className="badge">677 Players</span></p>
            <img src="./images/games/lol.jpg" className="img-responsive"/>
          </div>
          <div className="col-md-4 col-sm-6 featured-game">
            <p>Diablo III <span className="badge">643 Players</span></p>
            <img src="./images/games/diablo.jpg" className="img-responsive"/>
          </div>
          <div className="col-md-4 col-sm-6 featured-game">
            <p>CSGO <span className="badge">640 Players</span></p>
            <img src="./images/games/csgo.jpg" className="img-responsive"/>
          </div>
          <div className="col-md-4 col-sm-6 featured-game">
            <p>Heroes of the Storm <span className="badge">599 Players</span></p>
            <img src="./images/games/hots.jpg" className="img-responsive"/>
          </div>
        </div>
      </div>
    );
  }
}
