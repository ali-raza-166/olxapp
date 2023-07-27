import {
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
  Button,
} from "@mui/material";
import classes from "./AdCardHorizontal.module.css";
import { ThemeProvider } from "@mui/material";
import {
  CallOutlined,
  ChatBubbleOutlineOutlined,
  LocationOnOutlined,
  FavoriteBorderOutlined,
} from "@mui/icons-material";
import theme from "../../Theme";

export default function AdCardHorizontal({ data }) {
  return (
    <ThemeProvider theme={theme}>
      <Card
        className={classes.card}
        sx={{ width: "100%", display: "flex", flexDirection: "row" }}
      >
        <CardMedia
          sx={{ height: "170px", width: "270px" }}
          image={data.image}
          title="green iguana"
        />
        <CardContent className={classes.cardContent} sx={{ width: "100%" }}>
          <div className={classes.cardContentHeader}>
            <div className={classes.head}>
              <Typography
                sx={{ fontWeight: "bold", fontSize: ".9rem" }}
                variant="body"
                component="div"
              >
                {data.price}
              </Typography>
              <IconButton aria-label="add to favorites" sx={{ padding: 0 }}>
                <FavoriteBorderOutlined />
              </IconButton>
            </div>
            <Typography
              sx={{ fontSize: { xs: "14px", sm: "18px" } }}
              variant="body2"
              color="text.secondary"
            >
              {data.description}
            </Typography>
          </div>
          <div className={classes.cardContentFooter}>
            <div className={classes.cardFooter}>
              <div className={classes.locationContainer}>
                <LocationOnOutlined
                  sx={{ color: "grey", fontSize: { xs: "small", sm: "large" } }}
                />
                <Typography
                  className={classes.location}
                  sx={{
                    color: "grey",
                    fontSize: { xs: ".6rem", sm: ".8rem" },
                    textAlign: "center",
                  }}
                >
                  {data.location}
                </Typography>
              </div>
              <Typography
                sx={{ fontSize: { xs: ".6rem", sm: ".8rem" }, color: "grey" }}
              >
                {data.timeStamp}
              </Typography>
            </div>
            <div className={classes.actions}>
              <Button
                size="small"
                variant="outlined"
                color="secondary"
                startIcon={<CallOutlined fontSize="small" />}
              >
                Call
              </Button>
              <Button
                size="small"
                variant="contained"
                color="secondary"
                sx={{ marginLeft: "10px" }}
                startIcon={<ChatBubbleOutlineOutlined fontSize="small" />}
              >
                Chat
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}
