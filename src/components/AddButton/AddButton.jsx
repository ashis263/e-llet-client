import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const AddButton = ({label}) => {
  return (
    <div className="fixed bottom-10 flex justify-center left-[50vw] w-1/5">
      <Button
        className="p-5! font-semibold! flex items-center gap-2 rounded-lg!"
        variant="contained"
      >
        <span className="pt-0.5">{label}</span>
        <AddCircleIcon />
      </Button>
    </div>
  );
};

export default AddButton;
