import React from "react";
import Slider from "react-slick";
import bed1 from '../../assets/bed1.png';  

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
  };

  const sizes = [
    { title: "Single", dimensions: "90cm x 190cm", image: bed1 },
    { title: "Single", dimensions: "90cm x 190cm", image: bed1 },
    { title: "Single", dimensions: "90cm x 190cm", image: bed1 },
    { title: "Single", dimensions: "90cm x 190cm", image: bed1 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4">
      <h2 className="text-center text-2xl font-bold mt-8">Shop By Size</h2>
      <p className="text-center text-gray-500 mb-8">
        All popular UK, European and Ikea custom sizing available
      </p>

      <Slider {...settings}>
        {sizes.map((size, index) => (
          <div key={index} className="p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center justify-center text-center">
              {/* Display the image */}
              <img src={size.image} alt={size.title} className="w-24 h-24 object-contain mb-4" />
              
              <h3 className="text-lg font-semibold mb-2">{size.title}</h3>
              <p className="text-green-500">{size.dimensions}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black`}
      style={{ ...style, display: "block", right: 10 }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} text-black`}
      style={{ ...style, display: "block", left: 10 }}
      onClick={onClick}
    />
  );
}

export default Carousel;
