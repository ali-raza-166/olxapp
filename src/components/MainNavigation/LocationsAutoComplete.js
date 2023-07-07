import { LocationOnOutlined } from "@mui/icons-material";
import AutoComplete from "../UI/AutoComplete";
const LocationsAutoComplete = () => {
  return (
    <div>
      <AutoComplete
        dataArray={locations}
        label={"Location"}
        width={300}
        icon={LocationOnOutlined}
      />
    </div>
  );
};

export default LocationsAutoComplete;
const locations = [
  { label: "Use Current Location" },
  { label: "Lahore" },
  { label: "Faisalabad" },
  { label: "Karachi" },
  { label: "Islamabad" },
  { label: "Peshawar" },
  { label: "Sargodha" },
];
