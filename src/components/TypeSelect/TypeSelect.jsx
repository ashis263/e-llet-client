import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const TypeSelect = () => {
  const [type, setType] = useState('all');
  const handleChange = e => {
    setType(e.target.value);
  }
  return (
    <FormControl size="small" fullWidth sx={{width: 120}}>
      <InputLabel id="demo-simple-select-label">Type</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={type}
        label="Age"
        onChange={handleChange}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="income">Income</MenuItem>
        <MenuItem value="expense">Expense</MenuItem>
        <MenuItem value="transfer">Transfer</MenuItem>
      </Select>
    </FormControl>
  );
};

export default TypeSelect;
