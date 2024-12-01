import React from 'react';
import sofa from '../../assets/sofa.png';
import mattress from '../../assets/mattress.png'
const Deals = () => {
    return (
        <div className="relative w-full p-8">
            {/* Main Section */}
            <div className="gap-10 grid grid-flow-row grid-cols-1 md:grid-cols-5 z-10 max-w-6xl p-8 bg-white rounded-lg shadow-lg mx-auto relative">
                {/* Left Image (40% width) */}
                <div className="md:col-span-2 relative">
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

                    {/* Thumbnails Container */}
                    <div className="absolute top-[80%] left-[-100px] flex space-x-4 bg-white shadow-md p-2 rounded-md">
                        <div className="w-32 h-32 bg-gray-100 rounded-md overflow-hidden">
                            <img
                                src={mattress}
                                alt="Thumbnail 1"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-32 h-32 bg-gray-100 rounded-md overflow-hidden">
                            <img
                                src={sofa}
                                alt="Thumbnail 2"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-32 h-32 bg-gray-100 rounded-md overflow-hidden">
                            <img
                                src={sofa}
                                alt="Thumbnail 3"
                                className="w-full h-full object-cover"
                            />
                        </div>
                        <div className="w-32 h-32 bg-gray-100 rounded-md overflow-hidden">
                            <img
                                src={sofa}
                                alt="Thumbnail 4"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Deals;
