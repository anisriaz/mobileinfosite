import React from "react";

const FilterSection = ({ products, onSelectBrand, selectedBrand, loading }) => {
  const getData = (data, property) => {
    let uniqueBrands = Array.from(new Set(data.map((curElement) => curElement[property])));
    return ["All", ...uniqueBrands];
  };

  const brands = getData(products, "brand");

  return (
    <div>
      <div>
        <h3 className="text-center text-3xl mb-9">Brands</h3>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <ul className="list-none pl-4">
            {brands.map((curElement, index) => (
              <li
                key={index}
                className={`bg-gray-200 p-2 mb-2 mr-2 ${selectedBrand === curElement ? "font-bold" : ""}`}
                onClick={() => {
                  if (curElement !== selectedBrand) {
                    onSelectBrand(curElement);
                  }
                }}
              >
                {curElement}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default FilterSection;
























// import React from "react";

// const FilterSection = ({ products, onSelectBrand, selectedBrand }) => {
//   const getData = (data, property) => {
//     let uniqueBrands = Array.from(new Set(data.map((curElement) => curElement[property])));
//     return ["All", ...uniqueBrands];
//   };

//   const brands = getData(products, "brand");

//   return (
//     <div>
//       <div>
//         <h3 className="text-center text-3xl mb-9">Brands</h3>
//         <ul className="list-none pl-4">
//           {brands.map((curElement, index) => (
//             <li
//               key={index}
//               className={`bg-gray-200 p-2 mb-2 mr-2 ${selectedBrand === curElement ? "font-bold" : ""}`}
//               onClick={() => {
//                 if (curElement !== selectedBrand) {
//                   onSelectBrand(curElement);
//                 }
//               }}
//             >
//               {curElement}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default FilterSection;

