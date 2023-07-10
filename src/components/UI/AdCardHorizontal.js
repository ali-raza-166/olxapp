import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import classes from "./AdCardHorizontal.module.css";
import {
  LocationOnOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";

export default function AdCardHorizontal({ data }) {
  return (
    <Card
      className={classes.card}
      sx={{ width: "100%", display: "flex", flexDirection: "row" }}
    >
      <CardMedia
        sx={{ height: "170px", width: "270px" }}
        image={data.image}
        title="green iguana"
      />
      <CardContent>
        <div className={classes.cardContentHeader}>
          <Typography
            sx={{ fontWeight: "bold", fontSize: ".9rem" }}
            variant="body"
            component="div"
          >
            {data.price}
          </Typography>
          <CardActions disableSpacing sx={{ padding: 0 }}>
            <IconButton aria-label="add to favorites" sx={{ padding: 0 }}>
              <FavoriteBorderOutlined />
            </IconButton>
          </CardActions>
        </div>
        <Typography variant="body2" color="text.secondary">
          {data.description}
        </Typography>
        <div className={classes.cardFooter}>
          <Typography
            className={classes.location}
            sx={{ marginLeft: "-6px", color: "grey", fontSize: ".7rem" }}
          >
            <LocationOnOutlined sx={{ color: "grey", fontSize: "medium" }} />
            {data.location}
          </Typography>
          <Typography sx={{ fontSize: ".7rem", color: "grey" }}>
            {data.timeStamp}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
}
