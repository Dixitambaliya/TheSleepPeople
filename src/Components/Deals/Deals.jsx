import React from 'react';
import sofa from '../../assets/sofa.png'; 

const Deals = () => {
    return (
        <div className="relative w-full p-8">
            {/* Main Section */}
            <div className="gap-10 grid grid-flow-row grid-cols-1 md:grid-cols-5 z-10 max-w-6xl p-8 bg-white rounded-lg shadow-lg mx-auto">
                
                {/* Left Image (40% width) */}
                <div className="md:col-span-2">
                    <img
                        src={sofa}
                        alt="Main Sofa"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                {/* Right Content (60% width) */}
                <div className="md:col-span-3 relative">
                    <h2 className="text-3xl font-semibold mb-4">Deals & Offers</h2>
                    <p className="text-gray-500 mb-6">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel maiores accusamus veniam illo natus eveniet ex quae, cupiditate 
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo molestias officia assumenda itaque saepe maxime aliquam beatae obcaecati modi. Perspiciatis iure aliquid consequuntur dolorum illum voluptatibus vel neque obcaecati voluptate!
                        atque in rerum fuga vero nihil quaerat blanditiis hic tenetur? Ipsum, facere!
                    </p>
                    <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition duration-300">
                        Shop Now
                    </button>
                </div>
            </div>

            {/* Thumbnails Container */}
            <div className="border-2 border-black relative flex space-x-2 left-[15rem] top-[-10rem] mt-8 max-w-4xl mx-auto p-1 rounded-lg">
                <div className="w-1/6">
                    <img
                        src={sofa}
                        alt="Thumbnail 1"
                        className="w-full rounded-lg"
                    />
                </div>
                <div className="w-1/6">
                    <img
                        src={sofa}
                        alt="Thumbnail 2"
                        className="w-full rounded-lg"
                    />
                </div>
                <div className="w-1/6">
                    <img
                        src={sofa}
                        alt="Thumbnail 3"
                        className="w-full rounded-lg"
                    />
                </div>
                <div className="w-1/6">
                    <img
                        src={sofa}
                        alt="Thumbnail 4"
                        className="w-full rounded-lg"
                    />
                </div>
            </div>
        </div>
    );
};

export default Deals;
