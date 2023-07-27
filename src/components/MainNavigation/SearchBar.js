import { InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <TextField
      id="search"
      type="search"
      label="Search"
      size="small"
      value={searchTerm}
      onChange={handleChange}
      sx={{
        maxWidth: { xs: "300px", sm: "100%" },
        width: "100%",
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon />
          </InputAdornment>
        ),
      }}
    />
  );
};
export default SearchBar;
