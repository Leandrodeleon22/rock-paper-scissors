import { useState } from "react";
import classes from "./SingleIcon.module.css";

const singleIcon = ({
  id,
  image,
  outerColor,
  handleChosen,
  addStyle,
  isHousePicked,
  housePickedData,
}) => {
  const handleClick = () => {
    handleChosen({ id, image, outerColor });
  };

  return (
    <div key={id} className={classes.choiceContainer}>
      <button
        className={`${classes.button} ${classes[outerColor]} ${
          addStyle ? classes.bigger : ""
        }`}
        onClick={handleClick}
      >
        <div
          className={` ${
            isHousePicked && !housePickedData ? classes.black : ""
          } ${classes.choice} ${addStyle ? classes.biggerWhite : ""}`}
        >
          <img src={image} alt={id} />
        </div>
      </button>
    </div>
  );
};

export default singleIcon;
