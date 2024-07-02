import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Layout.css";
import IMG1 from "./../assets/logo.png";

const Layout = () => {
  const [openBox, setOpenBox] = useState(null);
  const [showMenu, setShowMenu] = useState(false);
  let timer = null;

  const toggleBox = (boxNumber) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      if (openBox === boxNumber) {
        setOpenBox(null); // Close dropdown if clicked again
      } else {
        setOpenBox(boxNumber); // Open dropdown
      }
    }, 300); // Adjust timeout (milliseconds) as needed for double-click detection
  };

  const closeBox = () => {
    setOpenBox(null);
  };

  const closeDropdown = () => {
    setOpenBox(null);
  };

  const toggleMenu = () => {
    setShowMenu(!showMenu);
    setOpenBox(null); // Close dropdown when opening burger menu
  };

  return (
    <div className={`navbar-site ${showMenu ? "open" : ""}`}>
      <div className="logo">
        <p>DINAMO</p>
        <img src={IMG1} alt="logo" />
        <p>BATUMI</p>
      </div>

      {/* Burger Menu */}
      <div
        className={`burger-menu ${showMenu ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar1"></div>
        <div className="bar2"></div>
        <div className="bar3"></div>
      </div>

      {/* Navigation Links */}
      <div className={`content ${showMenu ? "show-menu" : ""}`}>
        <div className="container">
          <Link to="/" onClick={closeBox}>
            მთავარი
          </Link>
          <Link
            to="/Club"
            onClick={() => toggleBox(2)}
            onDoubleClick={() => window.location.assign("/Club")}
          >
            კლუბი
          </Link>
          {openBox === 2 && (
            <div className="dropdown" onMouseLeave={closeDropdown}>
              <Link to="/HistoryOfTheTeam" onClick={closeBox}>
                გუნდის ისტორია
              </Link>
              <Link to="/Administration" onClick={closeBox}>
                ადმინისტრაცია
              </Link>
              <Link to="/FinancialReporting" onClick={closeBox}>
                ფინანსური ანგარიშგება
              </Link>
              <Link to="/Structure" onClick={closeBox}>
                სტრუქტურა
              </Link>
            </div>
          )}
          <Link
            to="/Team"
            onClick={() => toggleBox(3)}
            onDoubleClick={() => window.location.assign("/Team")}
          >
            გუნდი
          </Link>
          {openBox === 3 && (
            <div className="dropdown" onMouseLeave={closeDropdown}>
              <Link to="/Dynamo" onClick={closeBox}>
                დინამო
              </Link>
              <Link to="/CoachingStaff" onClick={closeBox}>
                სამწვრთნელო შტაბი
              </Link>
              <Link to="/TechnicalStaff" onClick={closeBox}>
                ტექნიკური პერსონალი
              </Link>
            </div>
          )}
          <Link
            to="/AgeTeam"
            onClick={() => toggleBox(4)}
            onDoubleClick={() => window.location.assign("/AgeTeam")}
          >
            ასაკობრივი გუნდები
          </Link>
          {openBox === 4 && (
            <div className="dropdown" onMouseLeave={closeDropdown}>
              <Link to="/CorpsOfCoaches" onClick={closeBox}>
                მწვრთნელთა კორპუსი
              </Link>
              <Link to="/Personnel" onClick={closeBox}>
                პერსონალი
              </Link>
            </div>
          )}
          <Link
            // to="/Media"
            onClick={() => toggleBox(5)}
            onDoubleClick={() => window.location.assign("/Media")}
          >
            მედია
          </Link>
          {openBox === 5 && (
            <div className="dropdown" onMouseLeave={closeDropdown}>
              <Link to="/PressService" onClick={closeBox}>
                პრეს სამსახური
              </Link>
              <Link to="/Photogallery" onClick={closeBox}>
                ფოტო გალერეა
              </Link>
              <Link to="/VideoGallery" onClick={closeBox}>
                ვიდეო გალერეა
              </Link>
            </div>
          )}
          <Link
            to="/Fan"
            onClick={() => toggleBox(6)}
            onDoubleClick={() => window.location.assign("/Fan")}
          >
            გულშემატკივარი
          </Link>
          <Link
            to="/Contact"
            onClick={() => toggleBox(7)}
            onDoubleClick={() => window.location.assign("/Contact")}
          >
            კონტაქტი
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Layout;
