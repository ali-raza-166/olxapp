import { Autocomplete, TextField, InputAdornment } from "@mui/material";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";
import { postAdActions } from "../../redux/slices/postad-slice";
import { useSelector, useDispatch } from "react-redux";
const AutoComplete = (props) => {
  const dispatch = useDispatch();
  const handleOptionSelect = (event, newValue) => {
    if (props.source === "postAd" && props.field === "AdCategory") {
      props.setAdCategory(newValue);
      console.log("setAdCategory");
    } else if (props.source === "postAd" && props.field === "brand") {
      console.log("setBrand");
      props.setBrand(newValue);
    } else if (props.source === "postAd" && props.field === "adLocation") {
      console.log("setAdLocation");
      props.setAdLocation(newValue);
    }
  };
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      onChange={handleOptionSelect}
      popupIcon={<KeyboardArrowDownOutlined />}
      options={props.dataArray}
      sx={{ width: props.width }}
      size="small"
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.label}
          InputProps={{
            ...params.InputProps,
            startAdornment: (
              <InputAdornment position="start">
                <props.icon fontSize="small" />
              </InputAdornment>
            ),
          }}
        />
      )}
    />
  );
};

export default AutoComplete;
