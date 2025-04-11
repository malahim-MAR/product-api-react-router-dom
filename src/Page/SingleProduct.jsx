// import React from "react";
// import { useParams } from "react-router-dom";
// import useFetch from "../hooks/useFetch";

// const SingleProduct = () => {
//   const params = useParams();
//   const [loading, error, data] = useFetch(
//     `https://dummyjson.com/products/${params.id}`
//   );

//   if (loading) {
//     return (
//       <div className=" flex justify-center h-[80vh] items-center text-3xl font-bold">
//         <span className="loading loading-spinner text-primary"></span>
//       </div>
//     );
//   }

//   if (error) {
//     return (
//       <div className=" flex justify-center h-[80vh] items-center text-3xl font-bold">
//         <h1 className="text-red-300">Error occured</h1>
//       </div>
//     );
//   }
//   return (
//     <div className="max-w-screen-xl mx-auto p-6">
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//         {/* Product Image */}
//         <div className="flex justify-center">
//           <img
//             src={data.thumbnail}
//             alt={data.title}
//             className="w-72 h-96 object-contain  rounded-lg "
//           />
//         </div>
//         {/* Product Details */}
//         <div className="space-y-4">
//           <h1 className="text-3xl font-semibold text-white-900">
//             {data.title}
//           </h1>
//           {/* Price and Discount */}
//           <div className="flex items-center space-x-3">
//             <span className="text-2xl font-bold text-green-500">
//               ${data.price}
//             </span>
//             <span className="text-sm text-red-600 line-through">
//               $
//               {((data.price / (100 - data.discountPercentage)) * 100).toFixed(
//                 2
//               )}
//             </span>
//             <span className="text-sm text-green-600">
//               -{data.discountPercentage}% Off
//             </span>
//           </div>
//           {/* Rating and Reviews */}
//           <div className="flex items-center space-x-2">
//             <span className="text-yellow-500">⭐⭐⭐⭐⭐</span>
//             <span className="text-white-600">
//               {data.rating} ({data.reviews.length} Reviews)
//             </span>
//           </div>
//           {/* Description */}
//           <p className="text-gray-700 text-sm">{data.description}</p>
//           {/* Availability */}
//           <div className="text-sm text-gray-600">
//             <p>
//               <strong>Availability:</strong> {data.availabilityStatus} (
//               {data.stock} left)
//             </p>
//             <p>
//               <strong>Minimum Order Quantity:</strong> 24
//             </p>
//           </div>
//           {/* Shipping Information */}
//           <p className="text-sm text-gray-600">
//             <strong>Shipping:</strong> Ships in 1 month
//           </p>
//           {/* Warranty */}
//           <p className="text-sm text-gray-600">
//             <strong>Warranty:</strong> {data.warrantyInformation}
//           </p>
//           {/* Return Policy */}
//           <p className="text-sm text-gray-600">
//             <strong>Return Policy:</strong> {data.returnPolicy}
//           </p>
//           {/* Barcode & QR Code */}
//           <div className="space-y-2">
//             <img
//               src="https://assets.dummyjson.com/public/qr-code.png"
//               alt="QR Code"
//               className="w-20 h-20 border rounded-md"
//             />
//             <p className="text-sm text-gray-600">
//               <strong>Barcode:</strong> {data.sku}
//             </p>
//           </div>
//           {/* Add to Cart Button */}
//           <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600">
//             Add to Cart
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SingleProduct;
import React from "react";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const SingleProduct = () => {
  const params = useParams();
  const [loading, error, data] = useFetch(
    `https://dummyjson.com/products/${params.id}`
  );

  if (loading) {
    return (
      <div className="flex justify-center h-[80vh] items-center">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center h-[80vh] items-center">
        <div className="alert alert-error max-w-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Error loading product details. Please try again.</span>
        </div>
      </div>
    );
  }

  // Calculate original price before discount
  const originalPrice = ((data.price / (100 - data.discountPercentage)) * 100).toFixed(2);

  return (
    <div className="max-w-screen-xl mx-auto p-6 bg-base-100 min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="card bg-base-200 rounded-box">
            <figure className="px-10 pt-10">
              <img 
                src={data.thumbnail} 
                alt={data.title} 
                className="rounded-xl object-contain h-96 w-full"
              />
            </figure>
          </div>
          
          {/* Image Gallery */}
          <div className="grid grid-cols-4 gap-2">
            {data.images.slice(0, 4).map((image, index) => (
              <div key={index} className="card bg-base-200 rounded-box">
                <figure>
                  <img 
                    src={image} 
                    alt={`${data.title} - ${index + 1}`} 
                    className="rounded-md object-cover h-20 w-full cursor-pointer hover:opacity-80"
                    onClick={() => document.querySelector('.main-image').src = image}
                  />
                </figure>
              </div>
            ))}
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          {/* Title and Brand */}
          <div>
            <h1 className="text-3xl font-bold text-base-content">{data.title}</h1>
            <p className="text-lg text-neutral-content">Brand: {data.brand}</p>
          </div>

          {/* Price and Discount */}
          <div className="flex items-center gap-4">
            <span className="text-2xl font-bold text-primary">
              ${data.price}
            </span>
            {data.discountPercentage > 0 && (
              <>
                <span className="text-lg text-neutral-content line-through">
                  ${originalPrice}
                </span>
                <span className="badge badge-accent">
                  {Math.round(data.discountPercentage)}% OFF
                </span>
              </>
            )}
          </div>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="rating rating-md">
              {[...Array(5)].map((_, i) => (
                <input
                  key={i}
                  type="radio"
                  name="rating"
                  className={`mask mask-star-2 ${i < Math.round(data.rating) ? 'bg-yellow-400' : 'bg-gray-400'}`}
                  checked={i === Math.round(data.rating) - 1}
                  readOnly
                />
              ))}
            </div>
            <span className="text-neutral-content">
              {data.rating.toFixed(1)} ({data.stock} reviews)
            </span>
          </div>

          {/* Description */}
          <div className="prose text-base-content">
            <p>{data.description}</p>
          </div>

          {/* Details Accordion */}
          <div className="collapse collapse-plus bg-base-200">
            <input type="checkbox" /> 
            <div className="collapse-title text-lg font-medium">
              Product Details
            </div>
            <div className="collapse-content"> 
              <div className="space-y-2">
                <p><strong>Category:</strong> {data.category}</p>
                <p><strong>Stock:</strong> {data.stock} units available</p>
                <p><strong>SKU:</strong> {data.id}</p>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="btn btn-primary flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              Add to Cart
            </button>
            <button className="btn btn-outline btn-secondary flex-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Wishlist
            </button>
          </div>

          {/* Shipping Info */}
          <div className="alert alert-info shadow-lg">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <span>Free shipping on orders over $50. Delivery in 3-5 business days.</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;