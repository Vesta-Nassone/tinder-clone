import React from "react";
import "./Header.css"; /*import Header styles */
import PersonIcon from "@material-ui/icons/Person";
import ForumIcon from "@material-ui/icons/Forum";
import IconButton from "@material-ui/core/IconButton";

function Header() {
  return (
    //BEM styling
    <div className="header">
      <IconButton>
        {" "}
        {/* the wave motion when you click */}
        <PersonIcon className="header__icon" fontSize="large" />{" "}
        {/* render person icon */}
      </IconButton>
      <IconButton>
        <img
          className="header__logo"
          src="https://1000logos.net/wp-content/uploads/2018/07/tinder-logo.png"
          alt="tinder logo"
        />
      </IconButton>
      <IconButton>
        <ForumIcon className="header__icon" fontSize="large" />{" "}
        {/* ender forum icon */}
      </IconButton>
    </div>
  );
}

export default Header; /* For exporting*/
