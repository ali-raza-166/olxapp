import AdCard from "../UI/AdCard";
import classes from "./CategorySection.module.css";
import { Typography } from "@mui/material";
import {
  DriveEtaOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
const CategorySection = ({
  icon: categoryIcon,
  name: categoryName,
  data: categoryData,
}) => {
  const carsList = categoryData.map((item) => (
    <AdCard key={item.id} data={item} />
  ));
  return (
    <div className={classes.categorySection}>
      <div className={classes.sectionHeader}>
        <div className={classes.categorySectionHeaderLeft}>
          {categoryIcon}
          <Typography
            className={classes.location}
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              paddingLeft: ".6rem",
            }}
          >
            {categoryName}
          </Typography>
        </div>
        <div className={classes.categorySectionHeaderRight}>
          <Typography
            className={classes.location}
            sx={{ fontSize: "1rem", fontWeight: "bold", color: "blue" }}
          >
            View More
          </Typography>
          <KeyboardArrowRightOutlined sx={{ color: "blue" }} />
        </div>
      </div>
      <div className={classes.sectionList}>{carsList}</div>
    </div>
  );
};

export default CategorySection;
