import React from "react";

const SearchComponentCard = () => {
  return (
    <div>
      <div className="flex items-ceter px-3 py-3">
        <img
          className="h-12 w-12 rounded-full"
          src="./women.jpg"
          alt="cat-photo"
        />
        <div className="pl-2">
          <p className="font-semibold text-sm">username</p>
          <p className="font-thin text-sm">full name</p>
        </div>
      </div>
    </div>
  );
};

export default SearchComponentCard;
