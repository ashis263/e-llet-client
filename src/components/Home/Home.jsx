import Balance from "../Balance/Balance";
import IncomeExpenseCard from "../IncomeExpenseCard/IncomeExpenseCard";
import MonthSelect from "../MonthSelect/MonthSelect";
import TypeSelect from "../TypeSelect/TypeSelect";

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
          <p className="py-2 px-1">Cashflow: 1000 BDT</p>
          <hr className="text-gray-500" />
        </div>
      </div>
    </div>
  );
};

export default Home;
