import React from "react";

const Filter = ({ filterData, category, setCategory }) => {
  return (
    <div className="flex flex-wrap justify-center gap-4 my-4">
      {filterData.map((item) => (
        <button
          key={item.id}
          className={`px-4 py-2 rounded-md text-white bg-slate-600 
            ${category === item.title ? "border-2 border-black" : "border-none"}`}
          onClick={() => setCategory(item.title)}
        >
          {item.title}
        </button>
      ))}
    </div>
  );
};


export default Filter;
