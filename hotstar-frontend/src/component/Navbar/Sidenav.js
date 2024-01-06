import React from "react";
import hotstar from "./hotstar.webp";
import myspace from "./myspace.png";
import "./Sidenav.css";
import SearchIcon from "@mui/icons-material/Search";
import HomeIcon from "@mui/icons-material/Home";
import TvIcon from "@mui/icons-material/Tv";
import MovieCreationIcon from "@mui/icons-material/MovieCreation";
import DashboardIcon from "@mui/icons-material/Dashboard";
import SportsBaseballIcon from "@mui/icons-material/SportsBaseball";
function Sidenav() {
  return (
    <div className="nav-container">
      <div>
        <img className="hotstar-logo" src={hotstar} />
      </div>
      <ul className="navbar-li">
        <li className="li-span">
          <img className="space-logo" src={myspace} />
          <span className="nav-span">Myspace</span>
        </li>
        <li className="li-span">
          <SearchIcon style={{ fontSize: "25px" }} />
          <span className="nav-span">Myspace</span>
        </li>
        <li className="li-span">
          <HomeIcon style={{ fontSize: "30px" }} />
          <span className="nav-span">Myspace</span>
        </li>
        <li className="li-span">
          <TvIcon style={{ fontSize: "20px" }} />
          <span className="nav-span">Myspace</span>
        </li>
        <li className="li-span">
          <MovieCreationIcon style={{ fontSize: "20px" }} />
          <span className="nav-span">Myspace</span>
        </li>
        <li className="li-span">
          <SportsBaseballIcon style={{ fontSize: "20px" }} />
          <span className="nav-span">Myspace</span>
        </li>
        <li className="li-span">
          <DashboardIcon style={{ fontSize: "20px" }} />
          <span className="nav-span">Myspace</span>
        </li>
      </ul>
    </div>
  );
}

export default Sidenav;
