import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import "./Layout.css";
import IMG1 from "./../assets/logo.png";

const Layout = () => {
  const [openBox, setOpenBox] = useState(null);
  const [fixedContent, setFixedContent] = useState(false);

  const toggleBox = (boxNumber) => {
    setOpenBox(openBox === boxNumber ? null : boxNumber);
  };

  const closeBox = () => {
    setOpenBox(null);
  };

  const closeDropdown = () => {
    setOpenBox(null);
  };

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        // If user scrolls down more than 100px, set fixedContent to true
        setFixedContent(true);
      } else {
        // If user scrolls back to the top, set fixedContent to false
        setFixedContent(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className={`logo ${fixedContent ? "fixed" : ""}`}>
        <p>DINAMO</p>
        <img src={IMG1} alt="logo" /> <p>BATUMI</p>
      </div>
      <div className={`content ${fixedContent ? "fixed" : ""}`}>
        <div className="container">
          <Link
            to="/"
            onMouseEnter={() => toggleBox(1)}
            onClick={closeBox}
          >
            მთავარი
          </Link>
          <Link
            to="/Club"
            onMouseEnter={() => toggleBox(2)}
            onClick={closeBox}
          >
            კლუბი
          </Link>
          <Link
            to="/Team"
            onMouseEnter={() => toggleBox(3)}
            onClick={closeBox}
          >
            გუნდი
          </Link>
          <Link
            to="/AgeTeam"
            onMouseEnter={() => toggleBox(4)}
            onClick={closeBox}
          >
            ასაკობრივი გუნდები
          </Link>
          <Link
            to="/Media"
            onMouseEnter={() => toggleBox(5)}
            onClick={closeBox}
          >
            მედია
          </Link>
          <Link
            to="/Fan"
            onMouseEnter={() => toggleBox(6)}
            onClick={closeBox}
          >
            გულშემატკივარი
          </Link>
          <Link
            to="/Contact"
            onMouseEnter={() => toggleBox(7)}
            onClick={closeBox}
          >
            კონტაქტი
          </Link>
        </div>
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
      </div>
      <Outlet />
    </>
  );
};

export default Layout;
