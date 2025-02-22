import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  return (
    <div className="flex justify-center gap-4 my-4">
      {filterData.map((item) => (
        <button
          key={item.id}
          className={`px-4 py-2 rounded-md text-black bg-slate-200 
            ${category === item.title ? "border-2 border-white" : "border-none"}`}
          onClick={() => setCategory(item.title)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};


export default Filter;
