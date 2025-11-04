import { LuArrowDownToLine, LuArrowUpFromLine } from "react-icons/lu";

const IncomeExpenseCard = ({ type, amount }) => {
  return (
    <div
      className={`${
        type === "income"
          ? "border-green-500 bg-green-200"
          : "border-red-500 bg-red-200"
      } border flex-1 py-5 px-2 flex flex-col items-center rounded-lg`}
    >
      <p className="text-lg pl-1 space-x-2 flex items-center">
        {type === "income" ? <LuArrowDownToLine  className="h-4"/> : <LuArrowUpFromLine  className="h-4"/>}
        <span>{type === "income" ? "Total Income" : "Total Expense"}</span>
      </p>
      <h2
        className={`${
          type === "income" ? "text-green-900" : "text-red-900"
        } text-4xl font-bold`}
      >
        BDT {amount}
      </h2>
    </div>
  );
};

export default IncomeExpenseCard;
