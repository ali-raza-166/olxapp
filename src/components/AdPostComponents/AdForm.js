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
import { postAd } from "../../redux/slices/postad-slice";
import avatar from "../../assets/avatar.jpeg";
import { useSelector, useDispatch } from "react-redux";
import { postAdActions } from "../../redux/slices/postad-slice";
const TITLE_CHARACTERS_LIMIT = 70;
const DESCRIPTION_CHARACTERS_LIMIT = 4096;
const AdForm = () => {
  const [adTitleCharCount, setAdTitleCharCount] = useState("");
  const [adDescCharCount, setAdDescCharCount] = useState("");
  const [adPosterName, setAdPosterName] = useState("");
  const [adCategory, setAdCategory] = useState("");
  const [brand, setBrand] = useState("");
  const [adImageURL, setAdImageURL] = useState("");
  const [adLocation, setAdLocation] = useState("");
  const dispatch = useDispatch();
  const [userInputs, setUserInputs] = useState({
    adTitle: "",
    adDescription: "",
    adPrice: "",
  });

  const postAdChangeHandler = (e) => {
    setUserInputs({ ...userInputs, [e.target.name]: e.target.value.trim() });
    setAdTitleCharCount(adTitleCharCount);
    setAdDescCharCount(adDescCharCount);
  };
  const postAdSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(
      postAdActions.formFields({
        adCategory: adCategory?.label ?? "",
        adTitle: userInputs.adTitle,
        adDescription: userInputs.adDescription,
        brand: brand?.label ?? "",
        adPrice: userInputs.adPrice,
        adImage: adImageURL,
        adLocation: adLocation?.label ?? "",
      })
    );
    dispatch(
      postAd({
        adCategory: adCategory?.label ?? "",
        adTitle: userInputs.adTitle,
        adDescription: userInputs.adDescription,
        brand: brand?.label ?? "",
        adPrice: userInputs.adPrice,
        adImage: adImageURL,
        adLocation: adLocation?.label ?? "",
      })
    );
  };
  return (
    <div className={classes.adFormWrpper}>
      <form onSubmit={postAdSubmitHandler}>
        <div className={classes.adFormItem}>
          <h4 className={classes.itemHeading}>SELECT CATEGORY</h4>
          <AutoComplete
            dataArray={categories}
            label={"Category"}
            setAdCategory={setAdCategory}
            icon={ClassOutlined}
            width="100%"
            source="postAd"
            field="AdCategory"
          />
        </div>
        <hr className={classes.horizontalLine} />
        <div className={classes.adFormItem}>
          <h4 className={classes.itemHeading}>INCLUDE SOME ITEMS</h4>
          <p className={classes.itemSubHeading}>Ad title</p>
          <TextField
            id="outlined-required"
            size="small"
            name="adTitle"
            sx={{ width: "100%" }}
            inputProps={{
              maxLength: TITLE_CHARACTERS_LIMIT,
            }}
            helperText={`Characters ${adTitleCharCount.length}/${TITLE_CHARACTERS_LIMIT}. Mention the key features of your item (e.g. brand, model, age, type)`}
            onChange={postAdChangeHandler}
          />
          <p className={classes.itemSubHeading}>Ad description</p>
          <TextField
            className={classes.textArea}
            inputProps={{
              maxLength: DESCRIPTION_CHARACTERS_LIMIT,
            }}
            helperText={`Characters ${adDescCharCount.length}/${DESCRIPTION_CHARACTERS_LIMIT}. Include condition, features and reason for selling `}
            onChange={postAdChangeHandler}
            name="adDescription"
            multiline
            minRows={6}
            maxRows={8}
          />
          <p className={classes.itemSubHeading}>Brand</p>
          <AutoComplete
            dataArray={mobileBrands}
            icon={BrandingWatermarkOutlined}
            setBrand={setBrand}
            source="postAd"
            field="brand"
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
            value={userInputs.adPrice}
            name="adPrice"
            size="small"
            helperText={`Enter numbers only`}
            onChange={postAdChangeHandler}
          />
        </div>
        <hr className={classes.horizontalLine} />
        <div className={classes.adFormItem}>
          <h4 className={classes.itemHeading}>UPLOAD UPTO 20 PHOTOS</h4>
          <div className={classes.imagePickers}>
            <div>
              <ImageSelector source="postAd" setAdImageURL={setAdImageURL} />
            </div>
          </div>
        </div>
        <hr className={classes.horizontalLine} />
        <div className={classes.adFormItem}>
          <h4 className={classes.itemHeading}>YOUR AD'S LOCATION</h4>
          <AutoComplete
            dataArray={locations}
            label={"Location"}
            source="postAd"
            field="adLocation"
            setAdLocation={setAdLocation}
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
            <p>+123456789</p>
          </Stack>
        </div>
        <hr className={classes.horizontalLine} />
        <div className={classes.adFormItem}>
          <Button
            type="submit"
            variant="contained"
            color="secondary"
            startIcon={<PostAdd fontSize="small" />}
          >
            POST Now
          </Button>
        </div>
      </form>
    </div>
  );
};

export default AdForm;
const categories = [
  { label: "Mobiles" },
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
