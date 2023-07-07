import React from "react";
import classes from "./AdForm.module.css";
import AutoComplete from "../UI/AutoComplete";
import {
  ClassOutlined,
  BrandingWatermarkOutlined,
  LocationOnOutlined,
  PostAdd,
} from "@mui/icons-material";
import { TextField, Button, Stack, Avatar } from "@mui/material";
import { useState } from "react";
import ImageSelector from "./ImageSelector";
import avatar from "../../assets/avatar.jpeg";
const TITLE_CHARACTERS_LIMIT = 70;
const DESCRIPTION_CHARACTERS_LIMIT = 4096;

const AdForm = () => {
  const [adTitleCharCount, setAdTitleCharCount] = useState("");
  const [adDescCharCount, setAdDescCharCount] = useState("");
  const [price, setPrice] = useState("");
  const [adPosterName, setAdPosterName] = useState("");

  return (
    <div className={classes.adFormWrpper}>
      <div className={classes.adFormItem}>
        <h4 className={classes.itemHeading}>SELECT CATEGORY</h4>
        <AutoComplete
          dataArray={categories}
          label={"Category"}
          icon={ClassOutlined}
          width="100%"
        />
      </div>
      <hr className={classes.horizontalLine} />
      <div className={classes.adFormItem}>
        <h4 className={classes.itemHeading}>INCLUDE SOME ITEMS</h4>
        <p className={classes.itemSubHeading}>Ad title</p>
        <TextField
          id="outlined-required"
          size="small"
          value={adTitleCharCount}
          sx={{ width: "100%" }}
          inputProps={{
            maxLength: TITLE_CHARACTERS_LIMIT,
          }}
          helperText={`Characters ${adTitleCharCount.length}/${TITLE_CHARACTERS_LIMIT}. Mention the key features of your item (e.g. brand, model, age, type)`}
          onChange={(e) => setAdTitleCharCount(e.target.value)}
        />
        <p className={classes.itemSubHeading}>Ad description</p>
        <TextField
          className={classes.textArea}
          value={adDescCharCount}
          inputProps={{
            maxLength: DESCRIPTION_CHARACTERS_LIMIT,
          }}
          helperText={`Characters ${adDescCharCount.length}/${DESCRIPTION_CHARACTERS_LIMIT}. Include condition, features and reason for selling `}
          onChange={(e) => setAdDescCharCount(e.target.value)}
          multiline
          rows={6}
          maxRows={8}
        />
        <p className={classes.itemSubHeading}>Brand</p>
        <AutoComplete
          dataArray={mobileBrands}
          icon={BrandingWatermarkOutlined}
          width="100%"
        />
      </div>
      <hr className={classes.horizontalLine} />
      <div className={classes.adFormItem}>
        <h4 className={classes.itemHeading}>SET A PRICE</h4>
        <p className={classes.itemSubHeading}>PRICE (PKR)</p>
        <TextField
          type="number"
          inputProps={{ min: 0, max: 100000 }}
          sx={{ width: "100%" }}
          value={price}
          size="small"
          helperText={`Enter numbers only`}
          onChange={(e) => {
            setPrice(parseInt(e.target.value));
          }}
        />
      </div>
      <hr className={classes.horizontalLine} />
      <div className={classes.adFormItem}>
        <h4 className={classes.itemHeading}>UPLOAD UPTO 20 PHOTOS</h4>
        <div className={classes.imagePickers}>
          <div>
            <ImageSelector />
          </div>
        </div>
      </div>
      <hr className={classes.horizontalLine} />
      <div className={classes.adFormItem}>
        <h4 className={classes.itemHeading}>YOUR AD'S LOCATION</h4>
        <AutoComplete
          dataArray={locations}
          label={"Location"}
          icon={LocationOnOutlined}
          width="100%"
        />
      </div>
      <hr className={classes.horizontalLine} />
      <div className={classes.adFormItem}>
        <h4 className={classes.itemHeading}>REVIEW YOUR INFORMATION</h4>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar
            alt="Remy Sharp"
            src={avatar}
            sx={{ width: 94, height: 94 }}
          />
          <TextField
            id="outlined-required"
            size="small"
            value={adPosterName}
            sx={{ width: "100%" }}
            onChange={(e) => setAdPosterName(e.target.value)}
          />
        </Stack>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          justifyContent="space-between"
        >
          <p>Your phone number</p>
          <p>+923067722166</p>
        </Stack>
      </div>
      <hr className={classes.horizontalLine} />
      <div className={classes.adFormItem}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<PostAdd fontSize="small" />}
        >
          POST Now
        </Button>
      </div>
    </div>
  );
};

export default AdForm;
const categories = [
  { label: "Mobile Phones" },
  { label: "Cars" },
  { label: "Houses" },
  { label: "Motorcycles" },
];
const mobileBrands = [
  { label: "Apple" },
  { label: "Samsung" },
  { label: "Google" },
  { label: "Xiaomi" },
  { label: "Vivo" },
];
const locations = [
  { label: "Use Current Location" },
  { label: "Lahore" },
  { label: "Faisalabad" },
  { label: "Karachi" },
  { label: "Islamabad" },
  { label: "Peshawar" },
  { label: "Sargodha" },
];
