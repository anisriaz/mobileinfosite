import React, { useState } from "react";
import Navbar from "../components/Navbar";

const Upcoming = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [brand, setBrand] = useState("");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const addProduct = async () => {
    const userId = JSON.parse(localStorage.getItem("user"));
    const result = await fetch("http://localhost:3001/api/products/create", {
      method: "post",
      body: JSON.stringify({ name, price, brand, description, userId }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const response = await result.json();
    if (response.success) {
      setSuccessMessage("Product added successfully.");
      setName("");
      setPrice("");
      setBrand("");
      setDescription("");
      window.location.reload();
    }
  };

  return (
    <>
      <Navbar />

      <h1 className="mt-36 text-center">Add Products</h1>
<div className="my-9 mx-auto max-w-xs text-center bg-gray-200 p-4 rounded">
  <input
    type="text"
    placeholder="Enter product Name"
    className="mt-3 p-3 w-full border border-gray-300 rounded"
    value={name}
    onChange={(e) => setName(e.target.value)}
  />
  <br />
  <input
    type="text"
    placeholder="Enter product Price"
    className="mt-4 p-3 w-full border border-gray-300 rounded"
    value={price}
    onChange={(e) => setPrice(e.target.value)}
  />
  <br />
  <input
    type="text"
    placeholder="Brand Name"
    className="mt-4 p-3 w-full border border-gray-300 rounded"
    value={brand}
    onChange={(e) => setBrand(e.target.value)}
  />
  <br />
  <label
    htmlFor="message"
    className="block mt-4 mb-2 px-11 text-sm font-medium text-gray-900 dark:text-white"
  >
    Write Description
  </label>
  <textarea
    id="message"
    className="block w-full h-36 mt-2 mb-4 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
    placeholder="Write description here..."
    value={description}
    onChange={(e) => {
      setDescription(e.target.value);
    }}
  ></textarea>

  <button
    onClick={addProduct}
    className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
  >
    Add product
  </button>
  {successMessage && (
    <p className="text-green-500 mt-2">{successMessage}</p>
  )}
</div>

    </>
  );
};

export default Upcoming;
