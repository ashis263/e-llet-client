import { TextField } from "@mui/material";
import CategoriesSort from "../CategoriesSort/CategoriesSort";
import CategoryItem from "../CategoryItem/CategoryItem";

const Categories = () => {
  return (
    <div className="p-10 grow relative space-y-5">
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-4xl font-semibold font-sans">Categories</h3>
        <CategoriesSort />
      </div>
      <TextField fullWidth id="outlined-basic" label="Search Category" variant="outlined" sx={{borderRadius: "100px"}} />
      <div className="my-10 space-y-10">
        <CategoryItem/>
      </div>
    </div>
  );
};

export default Categories;
