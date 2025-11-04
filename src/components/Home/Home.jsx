import Balance from "../Balance/Balance";
import IncomeExpenseCard from "../IncomeExpenseCard/IncomeExpenseCard";
import MonthSelect from "../MonthSelect/MonthSelect";
import Transaction from "../Transaction/Transaction";
import TypeSelect from "../TypeSelect/TypeSelect";
import { Button } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const Home = () => {
  return (
    <div className="p-10 grow relative">
      <h3 className="text-4xl font-semibold font-sans">Hi, Ashis Kumar Joy</h3>
      <div className="flex justify-between items-center sticky top-0 bg-white py-10">
        <Balance />
        <div className="flex gap-3">
          <MonthSelect />
          <TypeSelect />
        </div>
      </div>
      <div className="space-y-5">
        <div>
          <div className="flex gap-10">
            <IncomeExpenseCard type="income" />
            <IncomeExpenseCard type="expense" />
          </div>
          <p className="pt-2">Cashflow: 1000 BDT</p>
          <hr className="text-gray-500 my-3" />
        </div>
      </div>
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h5 className="text-xl">4 November 2025</h5>
          <p className="text-gray-600">1000 BDT</p>
        </div>
        <div className="space-y-2"></div>
        <Transaction type="income" />
        <Transaction type="expense" />
      </div>
      <div className="fixed bottom-10 flex justify-center left-[50vw] w-1/5">
        <Button
          className="p-5! font-semibold! flex items-center gap-2 rounded-lg!"
          variant="contained"
        >
          <span className="pt-0.5">Add Transaction</span>
          <AddCircleIcon/>
        </Button>
      </div>
    </div>
  );
};

export default Home;
