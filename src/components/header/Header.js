import React from "react";
import "./Header.css";

import PersonIcon from "@mui/icons-material/Person";
import ForumIcon from "@mui/icons-material/Forum";
import { IconButton } from "@mui/material";

const Header = () => {
  return (
    <div className="header-container">
      <div className="profile-icon-container">
        <IconButton>
          <PersonIcon fontSize="large" />
        </IconButton>
      </div>
      <div className="tinder-logo-container">
        <img
          src="https://i.pinimg.com/originals/d4/d8/82/d4d882dccd11187b7980ada01a465d48.png"
          alt="logo"
          className="tinder-logo"
        />
      </div>
      <div className="forum-icon-container">
        <IconButton>
          <ForumIcon fontSize="large" />
        </IconButton>
      </div>
    </div>
  );
};

export default Header;
