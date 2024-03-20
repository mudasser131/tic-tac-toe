
// import React from 'react';

// const Square = ({ value, onClick }) => {
//   return (
//     <button
//       className="square bg-black hover:bg-gray-800 text-white font-bold m-2 py-2 px-4 rounded h-[8rem] w-[9rem] align-middle"
//       onClick={onClick}
//     >
//       {value}
//     </button>
//   );
// };

// export default Square;
// Square.js
import React from 'react';

const Square = ({ value, onClick }) => {
  return (
    <button
      className="square bg-black hover:bg-gray-800 text-white font-bold m-1 py-3 md:py-2 px-4 md:px-5 rounded h-[8rem] md:h-[6rem] w-[9rem] max-sm:w-[6rem] max-sm:h-[6rem] md:w-[7rem] align-middle"
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
