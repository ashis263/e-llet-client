import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const CategoriesSort = () => {
  const [sortBy, setSortBy] = useState("");
  const handleChange = (e) => {
    setSortBy(e.target.value);
  };
  return (
    <FormControl size="small" fullWidth sx={{width: 150}}>
      <InputLabel id="demo-simple-select-label">Sort by</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={sortBy}
        label="Sort By"
        onChange={handleChange}
      >
        <MenuItem value="name">Name</MenuItem>
        <MenuItem value="transactions">Transactions</MenuItem>
      </Select>
    </FormControl>
  );
};

export default CategoriesSort;