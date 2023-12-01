import React from "react";
import PropTypes from "prop-types"; // Import PropTypes if not using TypeScript
import classes from "./Button.module.scss";

interface ButtonLoaderProps {
  color: string;
}

const ButtonLoader: React.FC<ButtonLoaderProps> = ({ color }) => {
  const loaderStyle: any = {
    "--loader-bg": color || "var(--white)",
  };

  return (
    <div className={classes.ldsRing} style={loaderStyle}>
      <div className={classes.div}></div>
      <div className={classes.div}></div>
      <div className={classes.div}></div>
      <div className={classes.div}></div>
    </div>
  );
};

ButtonLoader.propTypes = {
  color: PropTypes.string.isRequired, // Add prop type validation
};

export default ButtonLoader;
