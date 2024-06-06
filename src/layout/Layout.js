import React from "react";
import { Link } from "react-router-dom";
import "./Layout.css"

const Layout = () => {
  return (
    <div className="container"> 
      <Link to="/">მთავარი</Link>
      <Link to="/Club">კლუბი</Link>
      <Link to="/Team">გუნდი</Link>
      <Link to="/AgeTeam">ასაკობრივი გუნდები</Link>
      <Link to="/Media">მედია</Link>
      <Link to="/Fan">გულშემატკივარი</Link>
      <Link to="/Contact">კონტაქტი</Link>

      <Link to="/HistoryOfTheTeam">გუნდის ისტორია</Link>
      <Link to="/Administration">ადმინისტრაცია</Link>
      <Link to="/FinancialReporting">ფინანსური ანგარიშგება</Link>
      <Link to="/Structure">სტრუქტურა</Link>

      <Link to="/Dynamo">დინამო</Link>
      <Link to="/CoachingStaff">სამწვრთნელო შტაბი</Link>
      <Link to="/TechnicalStaff">ტექნიკური პერსონალი</Link>

      <Link to="/CorpsOfCoaches">მწვრთნელთა კორპუსი</Link>
      <Link to="/Personnel">პერსონალი</Link>

      <Link to="/PressService">პრეს სამსახური</Link>
      <Link to="/Photogallery">ფოტო გალერეა</Link>
      <Link to="/VideoGallery">ვიდეო გალერეა</Link>
    </div>
  );
};

export default Layout;
