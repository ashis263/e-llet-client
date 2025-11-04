import { LuArrowDownToLine, LuArrowUpFromLine } from "react-icons/lu";

const Transaction = ({ type }) => {
  return (
    <div className=" border border-gray-500 bg-gray-200 rounded-lg p-5 space-y-2">
      <div className="flex justify-between">
        <div className="flex gap-5">
          <p className="px-2 py-1 bg-teal-700 w-20 text-center rounded-lg text-white">Category</p>
          <p className="px-2 py-1 bg-teal-700 w-20 text-center rounded-lg text-white">Source</p>
        </div>
        <div className={`${
        type === "income"
          ? "border-green-500 bg-green-200 text-green-700"
          : "border-red-500 bg-red-200 text-red-700"
      } border px-2 flex items-center rounded-4xl`}>
          {type === "income" ? <LuArrowDownToLine /> : <LuArrowUpFromLine />}
        </div>
      </div>
      <h3 className="text-2xl font-bold pl-1">Title</h3>
      <div className="flex justify-between">
        <p className="w-3/5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi iure nobis similique unde! Tenetur mollitia unde exercitationem tempore fugiat dicta?</p>
        <p className={`${
        type === "income"
          ? "text-green-500"
          : "text-red-500"
      } text-lg font-semibold self-end`}>BDT 500</p>
      </div>
    </div>
  );
};

export default Transaction;
