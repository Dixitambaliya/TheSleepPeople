import React from 'react';

const Category = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full p-8">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-semibold">Category</h2>
        <p className="text-lg text-gray-500">Subtitle</p>
      </div>

      <div className="flex items-center justify-between space-x-4 w-full max-w-6xl">
        {/* Left Arrow */}
        <button className="p-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
          <span className="text-2xl">←</span>
        </button>

        {/* Product Cards */}
        <div className="flex flex-row justify-center space-x-4 overflow-x-auto">
          {/* Card 1 */}
          <div className="flex flex-col items-center justify-center max-w-sm p-4 bg-white rounded-lg shadow-lg">
            <img
              src="path/to/mattress-image.jpg"
              alt="Mattresses"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Mattresses</h3>
            <p className="text-center text-gray-500 mt-2">
              Experience the versatility of our Divan Beds, available in a range of designs and upholstery options to complement your aesthetic preferences.
            </p>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center justify-center max-w-sm p-4 bg-white rounded-lg shadow-lg">
            <img
              src="path/to/fabric-bed-image.jpg"
              alt="Fabric Beds"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Fabric Beds</h3>
            <p className="text-center text-gray-500 mt-2">
              Crafted with attention to detail, our Fabric Frame Beds feature a durable frame upholstered in high-quality fabric, offering a stylish centerpiece.
            </p>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center justify-center max-w-sm p-4 bg-white rounded-lg shadow-lg">
            <img
              src="path/to/wooden-bed-image.jpg"
              alt="Wooden Beds"
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold">Wooden Beds</h3>
            <p className="text-center text-gray-500 mt-2">
              Experience the versatility of our Wooden Beds, available in a range of finishes and designs to suit your personal taste.
            </p>
          </div>
        </div>

        {/* Right Arrow */}
        <button className="p-2 bg-gray-200 text-gray-800 rounded-full hover:bg-gray-300">
          <span className="text-2xl">→</span>
        </button>
      </div>
    </div>
  );
};

export default Category;
