import React from 'react';
import bed from '../../assets/bedsheet.png';

const Home = () => {
  return (
    <section className="flex items-center justify-center py-16 bg-white relative">

      {/* Scroll to Explore - visible only on larger screens */}
      <div className="hidden lg:flex lg:flex-col lg:items-center lg:justify-center lg:absolute lg:left-0 lg:top-1/2 lg:transform lg:-translate-y-1/2 space-y-12 text-gray-600">
        <div className="text-black flex text-sm rotate-90">
          <span>Scroll to Explore</span>
        </div>
        <div className="w-1 h-20 bg-black"></div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
        <div className="flex flex-col justify-center">
          <h1 className="text-5xl font-bold text-black mb-6">
            Pocket Spring Mattresses
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Discover the epitome of sleep perfection with Pocket Spring Mattresses – a revolutionary blend of luxury, comfort, and support for an unparalleled night's rest. Engineered with precision and innovation, these mattresses feature individually encased coils that adapt to your body's contours, providing targeted support and minimizing motion transfer.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-lg hover:bg-orange-600">
            Shop Now
          </button>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={bed}
            alt="Mattress"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Pagination dots on the right - fixed and improved */}
      <div className="hidden md:flex absolute right-8 top-1/2 transform -translate-y-1/2 flex-col items-center space-y-4">
        <span className="text-gray-500 text-xl font-semibold">02</span>
        <div className="w-1 h-20 bg-black"></div>
        <span className="text-gray-500 text-xl font-semibold">04</span>
      </div>
    </section>
  );
};

export default Home;
