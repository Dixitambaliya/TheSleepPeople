import React from 'react'
import sofa from '../../assets/sofa.png'

const page = () => {
    return (
        <div className="bg-gray-50 py-16 px-8">
            {/* Container */}
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
                {/* Image Section */}
                <div className="relative w-full lg:w-1/2">
                    {/* Background Highlight */}
                    <div className="absolute -top-8 -left-8 w-full h-full bg-green-100 rounded-xl"></div>
                    <img
                        src={sofa}
                        alt="Bed"
                        className="relative w-full rounded-xl shadow-lg"
                    />
                </div>
                {/* Text Section */}
                <div className="w-full lg:w-1/2 mt-10 lg:mt-0 lg:ml-12">
                    <h2 className="text-3xl font-bold text-gray-800">Our Story</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Unveiling Boundless Horizons: Our Journey.
                    </p>
                    <p className="text-gray-600 mt-6 leading-relaxed">
                        Lorem ipsum dolor sit amet consectetur. Amet nisl amet id venenatis pellentesque in lobortis
                        dui. In et a augue viverra posuere. Quam purus sed dictum lectus est lectus vel aenean.
                        Blandit id magna morbi magna egestas. Habitasse sem euismod vestibulum aliquam. In tincidunt
                        condimentum non amet nisl morbi enim vestibulum. Eget eu mattis lorem tortor erat etiam.
                        Imperdiet egestas enim tincidunt eu at. Dolor neque ut morbi quis nisl felis odio vitae amet.
                        Mauris scelerisque turpis laoreet ultricies ornare. Vel at in proin pulvinar ipsum sagittis
                        nisi.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default page
