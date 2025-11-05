import AddButton from "../AddButton/AddButton";

const CategoryItem = () => {
  return (
    <div className="border bg-pink-200 rounded-lg relative">
      <div className="p-5">
        <div className="flex justify-between items-center">
          <h3 className="font-semibold text-2xl text-pink-900">Category</h3>
          <p>8 Transactions</p>
        </div>
        <h2 className="font-bold text-4xl text-center text-pink-800">BDT 2000</h2>
      </div>
      <div className="bg-gray-600 text-white flex justify-evenly rounded-b-lg px-5 py-2 text-center">
        <div>
          <h5 className="text-gray-300 text-xs">Income this month</h5>
          <h4 className="font-semibold">BDT 500</h4>
        </div>
        <div className="border border-gray-500">

        </div>
        <div>
          <h5 className="text-gray-300 text-xs">Expense this month</h5>
          <h4 className="font-semibold">BDT 500</h4>
        </div>
      </div>
      <AddButton label="Add Category"/>
    </div>
  );
};

export default CategoryItem;
