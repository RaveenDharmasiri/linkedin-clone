import React from "react";
import "./RightSide.css";
import InfoIcon from "@material-ui/icons/Info";

const RightSide = () => {
  const newsArticle = (heading, subtitle) => (
    <div className="rightside__article">
      <div className="rightside__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="rightside">
      <div className="rightside__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>

      {newsArticle("Clark Kent is learning ReactJs", "He is trying his best")}
      {newsArticle("Job offers", "Check offers!")}
    </div>
  );
};

export default RightSide;
