import React from "react";

function ProductDetails({ product }) {
  if (!product) {
    return <p>Loading...</p>;
  }

  return (
    <div>
         <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.imgUrl}</p>
          <p>{product.brand}</p>
    </div>
  );
}

export default ProductDetails;

       





  //  <h1>{product.name}</h1>
  //         <p>{product.description}</p>
  //         <p>{product.price}</p>
  //         <p>{product.imgUrl}</p>
  //         <p>{product.brand}</p>




































// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// function productDetail() {
//   const { productId } = useParams();
//   const [product, setproduct] = useState(null);
//   const [showDetails, setShowDetails] = useState(false);

//   useEffect(() => {
//     fetch(`http://localhost:3001/api/products/${productDetail}`)
//       .then((response) => response.json())
//       .then((data) => setproduct(data));
//   }, [productDetail]);

//   if (!product) {
//     return <div>Loading...</div>;
//   }

//   const { title, info, price, brand, image } = product.attributes;

//   return (
//     <div className="container mx-auto">
//   <h1 className="text-2xl font-bold mb-4">{title} Details:</h1>
//   <section className="text-gray-600 body-font overflow-hidden">
//     <div className="container mx-auto">
//       <h1 className="text-2xl font-bold mb-4">{info} info:</h1>
//       <div className="flex flex-col">
//         <img className="w-full object-cover object-center rounded-lg" src={image} alt={title} />
//         <div className="flex justify-between mt-4">
//           <h2 className="text-gray-900 text-lg font-medium">{title}</h2>
//           <p className="text-gray-500 text-lg">{price}</p>
//         </div>
//         <p className="mt-4">{info}</p>
//         <p className="mt-4">Brand: {brand}</p>
//       </div>
//     </div>
//   </section>
// </div>


//   );
// }

// export default productDetail;