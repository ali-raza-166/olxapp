import { Autocomplete, TextField, InputAdornment } from "@mui/material";
import { KeyboardArrowDownOutlined } from "@mui/icons-material";

const AutoComplete = (props) => {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
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
