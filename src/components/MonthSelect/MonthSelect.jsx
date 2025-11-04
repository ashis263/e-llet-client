import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

const date = new Date();
const currentMonth = date.toLocaleString("default", { month: "long" }).toLowerCase();

const MonthSelect = () => {
  const [month, setMonth] = useState(currentMonth);
  const handleChange = (e) => {
    setMonth(e.target.value);
  };
  return (
    <FormControl size="small" fullWidth sx={{width: 130}}>
      <InputLabel id="demo-simple-select-label">Month</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={month}
        label="Month"
        onChange={handleChange}
      >
        <MenuItem value="january">January</MenuItem>
        <MenuItem value="february">February</MenuItem>
        <MenuItem value="march">March</MenuItem>
        <MenuItem value="april">April</MenuItem>
        <MenuItem value="may">May</MenuItem>
        <MenuItem value="june">June</MenuItem>
        <MenuItem value="july">July</MenuItem>
        <MenuItem value="august">August</MenuItem>
        <MenuItem value="september">September</MenuItem>
        <MenuItem value="october">October</MenuItem>
        <MenuItem value="november">November</MenuItem>
        <MenuItem value="december">December</MenuItem>
      </Select>
    </FormControl>
  );
};

export default MonthSelect;
