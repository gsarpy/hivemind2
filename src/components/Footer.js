import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <footer className="footer-distributed">

        <div className="footer-left">

          <p className="footer-links">
            <a href="#">Home</a>
            ·
            <a href="#">Blog</a>
            ·
            <a href="#">Pricing</a>
            ·
            <a href="#">About</a>
            ·
            <a href="#">Faq</a>
            ·
            <a href="#">Contact</a>
          </p>

          <p className="footer-company-name">Hivemind &copy; 2017</p>

        </div>

        <div className="footer-right">

          <form method="get" action="#">
            <input placeholder="Search for games" name="search" />
            <i className="fa fa-search"></i>
          </form>

        </div>

      </footer>
    );
  }
}
