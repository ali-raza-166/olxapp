import React from "react";
import classes from "./FilteredProducts.module.css";
const FilteredProducts = () => {
  return (
    <div className={classes.wrapper}>
      <h2>Bikes in Pakistan</h2>
      <div className={classes.container}>
        <div className={classes.filters}>FilterSs</div>
        <div className={classes.content}>Content</div>
      </div>
    </div>
  );
};

export default FilteredProducts;
