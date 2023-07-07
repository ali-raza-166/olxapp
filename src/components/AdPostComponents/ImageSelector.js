import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Button,
  Fab,
  Grid,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { AddPhotoAlternateOutlined, ClearOutlined } from "@mui/icons-material";
import classes from "./ImageSelector.module.css";

export default function ImageSelector() {
  const form = useForm();
  const { register, handleSubmit, reset } = form;
  const [uploadState, setUploadState] = useState("initial");
  const [image, setImage] = useState("");

  const handleUploadClick = (event) => {
    var file = event.target.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = (e) => {
        setImage(reader.result);
        setUploadState("uploaded");
      };
    }
  };

  const handleResetClick = (event) => {
    setImage(null);
    setUploadState("initial");
    reset({ logo: null });
  };

  const onUpload = (data) => {
    console.log(data.logo[0]);
  };

  return (
    <div className={classes.root}>
      <Card className={classes.cardContainer}>
        <CardContent
          className={
            uploadState !== "uploaded" ? classes.cardRoot : classes.cardRootHide
          }
        >
          <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.imageIcon}
          >
            <input
              accept="image/jpeg,image/png,image/tiff,image/webp"
              className={classes.input}
              multiple
              id="contained-button-file"
              {...register("logo", { required: true })}
              type="file"
              onChange={handleUploadClick}
            />
            <label
              htmlFor="contained-button-file"
              className={uploadState === "uploaded" ? classes.input : null}
            >
              <Fab component="span" className={classes.button}>
                <AddPhotoAlternateOutlined />
              </Fab>
            </label>
          </Grid>
        </CardContent>
        {uploadState === "uploaded" && (
          <CardActionArea className={classes.cardActionArea}>
            <div className={classes.crossButton} onClick={handleResetClick}>
              <ClearOutlined />
            </div>
            <img className={classes.logo} src={image} alt="LOGO" />
          </CardActionArea>
        )}
      </Card>
      {/* <Button
        variant="contained"
        color="primary"
        className={classes.submit}
        onClick={handleSubmit(onUpload)}
      >
        Upload
      </Button> */}
    </div>
  );
}
