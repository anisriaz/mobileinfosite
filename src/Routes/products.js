import React, { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import FilterSection from "../products/FilterSection";
import ProductDetails from "../products/ProductDetails";


function AllProducts() {
  const [products, setProducts] = useState([]);
  const [selectedBrand, setSelectedBrand] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch("http://localhost:3001/api/products");
      const data = await response.json();
      setProducts(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
  
    <div>
      <h1 className="text-gray-600 body-font mt-36 text-center text-3xl">
        All Products
      </h1>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="flex">
          <div className="w-1/5 border-r">
            <FilterSection
              products={products}
              onSelectBrand={setSelectedBrand}
            />
          </div>

          <div className="w-4/5">
            <section className="text-gray-600 body-font mt-3">
              <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                  <div className="w-full">
                    <div className="flex flex-wrap">
                      {products
                        .filter(
                          (product) =>
                            selectedBrand === "All"
                              ? true
                              : product.brand === selectedBrand
                        )
                        .map((product) => (
                          <div key={product.id} className="p-4 md:w-1/3">
                            <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                              <img
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src={product.image || ""}
                                alt={product.name || ""}
                              />
                              <div className="p-6">
                                <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                                  {product.category || ""}
                                </h2>
                                <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                                  {product.name || ""}
                                </h1>
                                <p className="leading-relaxed mb-3">
                                  {product.description || ""}
                                </p>
                               
                                <div className="flex items-center flex-wrap">
                                  <Link
                                    to={`/products/${product._id}`}
                                    className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0"
                                  >
                                    Learn More
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                      <svg
                                        className="w-4 h-4 mr-1"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                      </svg>
                                      1.2K
                                    </span>
                                    <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                      <svg
                                        className="w-4 h-4 mr-1"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        fill="none"
                                        strokeLinejoin="round"
                                        viewBox="0 0 24 24"
                                      >
                                        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 .5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                      </svg>
                                      6
                                    </span>
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      )}
      <Navbar />
      < Routes>
      <Route
  path="/products/:productId"
  render={({ match }) => {
    const productId = match.params.productId;
    const product = products.find((p) => p._id === productId);
    return <ProductDetails product={product} />;
  }}
/> 
</Routes> 
 </div>
       
   
   
  );
}

export default AllProducts;













































// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";

// function Allproducts() {
//   const [products, setProducts] = useState([]);

//   useEffect(() => {
//     getProducts();
//   }, []);

//   const getProducts = async () => {
//     try {
//       const response = await fetch("http://localhost:3001/api/products");
//       const data = await response.json();
//       setProducts(data);
//     } catch (error) {
//       console.error("Error fetching products:", error);
//     }
//   };

// // ...previous code...

// const FilterSection = ({ products }) => {
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
//             <li key={index} className="bg-gray-200 p-2 mb-2 mr-2">
//               {curElement}
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

//   return (
//     <div>
//              <h1 className="text-gray-600 body-font mt-36 text-center text-3xl">All Products</h1>
//       <div className="flex">
//         <div className="w-1/5 border-r">
//           <FilterSection products={products} />
//         </div>
//         <div className="w-4/5">
//           <section className="text-gray-600 body-font mt-3">
//             <div className="container px-5 py-24 mx-auto">
//               <div className="flex flex-wrap -m-4">
//                 <div className="w-full">
//                   <div className="flex flex-wrap">
//             {products.map((product) => (
//               <div key={product.id} className="p-4 md:w-1/3">
//                 <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
//                   <img
//                     className="lg:h-48 md:h-36 w-full object-cover object-center"
//                     src={product.image}
//                     alt={product.name}
//                   />
//                   <div className="p-6">
//                     <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
//                       {product.category}
//                     </h2>
//                     <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
//                       {product.name}
//                     </h1>
//                     <p className="leading-relaxed mb-3">{product.description}</p>
//                     <div className="flex items-center flex-wrap">
//                     <a className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">
//   Learn More
//   <span className="text-gray-400 inline-flex items-center leading-none text-sm">
//     <svg
//       className="w-4 h-4 mr-1"
//       stroke="currentColor"
//       strokeWidth="2"
//       fill="none"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       viewBox="0 0 24 24"
//     >
//       <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
//       <circle cx="12" cy="12" r="3"></circle>
//     </svg>
//     1.2K
//   </span>
//   <span className="text-gray-400 inline-flex items-center leading-none text-sm">
//     <svg
//       className="w-4 h-4 mr-1"
//       stroke="currentColor"
//       strokeWidth="2"
//       fill="none"
//       strokeLinejoin="round"
//       viewBox="0 0 24 24"
//     >
//       <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
//     </svg>
//     6
//   </span>
// </a>

//                     </div>
//                   </div>
//                 </div>
//                 </div>
//             ))}
//           </div>
//           </div>
//                 </div>
//               </div>


//       </section>
//       </div>
//       </div>
//       <Navbar />
      
//     </div>
//   );
// }

// export default Allproducts;






















































// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { Apis } from "../components/Apis";
// import ProductDetail from "../components/ProductDetail";

// function Products() {
//   const [data, setData] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);
//   const [showProductDetails, setShowProductDetails] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await Apis();
//       setData(response.data);
//     };
//     fetchData();
//   }, []);

//   const handleProductSelect = (product) => {
//     setSelectedProduct(product);
//     setShowProductDetails(true);
//   };

//   return (

//     <div>
     
//       <section classNameName="text-gray-600 body-font mt-12">
//         <div classNameName="container px-5 py-24 mx-auto">
//           <div classNameName="flex flex-wrap w-full mb-20">
//             <div classNameName="lg:w-1/2 w-full mb-6 lg:mb-0">
//               <h1 classNameName="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
//                 Products
//               </h1>
//               <div classNameName="h-1 w-20 bg-indigo-500 rounded"></div>
//             </div>
//             <p classNameName="lg:w-1/2 w-full leading-relaxed text-gray-500">
            
//             </p>
//           </div>
//           <div classNameName="flex flex-wrap -m-4">
//             {data.map((item) => (
//               <div classNameName="xl:w-1/4 md:w-1/2 p-4" key={item.id}>
//                 <div classNameName="bg-gray-100 p-6 rounded-lg">
//                   <img
//                     classNameName="h-40 rounded w-full object-cover object-center mb-6"
//                     src={item.attributes.Image}
//                     alt={item.name}
//                   />
//                   <h3 classNameName="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
//                   <h2 classNameName="text-lg text-gray-900 font-medium title-font mb-4">
//                     {item.attributes.title}
//                   </h2>
//                   <p classNameName="leading-relaxed text-base">
//                     {item.attributes.info}
//                   </p>
//                   <button
//                     classNameName="bg-indigo-500 text-white px-4 py-2 rounded mt-4"
//                     onClick={() => handleProductSelect(item)}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {showProductDetails && selectedProduct && (
//             <ProductDetail product={selectedProduct} />
//           )}
//         </div>
//       </section>
//       <Navbar />
//     </div>
//   );
// }

// export default Products;
































// import React, { useEffect, useState } from "react";
// import Navbar from "../components/Navbar";
// import { Apis, Slugapis } from "../components/Apis";
// import ProductTable from "../components/Table";

// function Products() {
//   const [data, setData] = useState([]);
//   const [selectedProduct, setSelectedProduct] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await Apis();
//       setData(response.data);
//     };
//     fetchData();
//   }, []);

//   const handleProductSelect = (product) => {
//     setSelectedProduct(product);
//   };

//   return (
//     <div>
//       <section classNameName="text-gray-600 body-font mt-12">
//         <div classNameName="container px-5 py-24 mx-auto">
//           <div classNameName="flex flex-wrap w-full mb-20">
//             <div classNameName="lg:w-1/2 w-full mb-6 lg:mb-0">
//               <h1 classNameName="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">
//                 Products
//               </h1>
//               <div classNameName="h-1 w-20 bg-indigo-500 rounded"></div>
//             </div>
//             <p classNameName="lg:w-1/2 w-full leading-relaxed text-gray-500">
//               Products.
//             </p>
//           </div>
//           <div classNameName="flex flex-wrap -m-4">
//             {data.map((item) => (
//               <div classNameName="xl:w-1/4 md:w-1/2 p-4" key={item.id}>
//                 <div classNameName="bg-gray-100 p-6 rounded-lg">
//                   <img
//                     classNameName="h-40 rounded w-full object-cover object-center mb-6"
//                     src={item.attributes.Image}
//                     alt={item.name}
//                   />
//                   <h3 classNameName="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
//                   <h2 classNameName="text-lg text-gray-900 font-medium title-font mb-4">
//                     {item.attributes.title}
//                   </h2>
//                   <p classNameName="leading-relaxed text-base">
//                     {item.attributes.info}
//                   </p>
//                   <button
//                     classNameName="bg-indigo-500 text-white px-4 py-2 rounded mt-4"
//                     onClick={() => handleProductSelect(item)}
//                   >
//                     View Details
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//           <ProductTable selectedProduct={selectedProduct} />
//         </div>
//       </section>
//       <Navbar />
//     </div>
//   );
// }

// export default Products;





































// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar"
// import { Apis } from "../components/Apis";
// import { ProductTable } from "../components/Table"
// function Products() {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await Apis();
//       setData(response.data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div>   
//       <section classNameName="text-gray-600 body-font mt-12">
//         <div classNameName="container px-5 py-24 mx-auto">
//           <div classNameName="flex flex-wrap w-full mb-20">
//             <div classNameName="lg:w-1/2 w-full mb-6 lg:mb-0">
//               <h1 classNameName="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">products</h1>
//               <div classNameName="h-1 w-20 bg-indigo-500 rounded"></div>
//             </div>
//             <p classNameName="lg:w-1/2 w-full leading-relaxed text-gray-500 ">Products.</p>
//           </div>
//           <div classNameName="flex flex-wrap -m-4">
//             {data.map((item) => (
//               <div classNameName="xl:w-1/4 md:w-1/2 p-4" key={item.id}>
//                 <div classNameName="bg-gray-100 p-6 rounded-lg">
//                   <img classNameName="h-40 rounded w-full object-cover object-center mb-6" src={item.attributes.Image } alt={item.name}/>
//                   <h3 classNameName="tracking-widest text-indigo-500 text-xs font-medium title-font"></h3>
//                   <h2 classNameName="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
//                   <p classNameName="leading-relaxed text-base">{item.attributes.info}</p>
//                 </div>
//               </div>
//             ))}
// </div>

//         </div>
//       </section>
//       <Navbar />
//     </div>
//   );
// }

// export default Products;

































// import { useEffect, useState } from "react";
// import Navbar from "../components/Navbar"
// import { Apis } from "../components/Apis";

// function Products() {
//   const [data, setData] = useState([]);
 

//   useEffect(() => {
//     const fetchData = async () => {
//       const data = await Apis();
//       setData(data);
     
//     }; 
//     fetchData();
//   }, []);
//   return (
//     <div>   
    
//     <section classNameName="text-gray-600 body-font mt-12">
//       <div classNameName="container px-5 py-24 mx-auto">
//         <div classNameName="flex flex-wrap w-full mb-20">
//           <div classNameName="lg:w-1/2 w-full mb-6 lg:mb-0">
//             <h1 classNameName="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">products</h1>
//             <div classNameName="h-1 w-20 bg-indigo-500 rounded"></div>
//           </div>
//           <p classNameName="lg:w-1/2 w-full leading-relaxed text-gray-500 ">Products.</p>
//         </div>
//         {/* <div classNameName="flex flex-wrap -m-4">
//       {data.map((item) => (
//             <div classNameName="xl:w-1/4 md:w-1/2 p-4" key={item.id}>
//               <div classNameName="bg-gray-100 p-6 rounded-lg">
//                 <img classNameName="h-40 rounded w-full object-cover object-center mb-6" src={item.image} alt={item.title} />
//                 <h3 classNameName="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.category}</h3>
//                 <h2 classNameName="text-lg text-gray-900 font-medium title-font mb-4">{item.title}</h2>
//                 <p classNameName="leading-relaxed text-base">{item.info}</p>
//               </div>
//             </div>
//           ))}
//         </div> */}
//       </div>
      
//     </section>
//     <Navbar />
//   </div>
// );

// }

// export default  Products;