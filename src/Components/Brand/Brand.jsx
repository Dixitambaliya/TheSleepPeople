import React from 'react';
import sealy from '../../assets/sealy.png'
import simba from '../../assets/simba.png'
import relyen from '../../assets/relyen.png'
import hypnos from '../../assets/hypnos.png'
import emma from '../../assets/emma.png'
import duo from '../../assets/duo.png'
import silent from '../../assets/silent.png'
import sleep from '../../assets/sleepsoul.png'
import british from '../../assets/british.png'




const brands = [
  { name: 'The British Bed Company', logo: british },
  { name: 'Dunlopillo', logo: duo },
  { name: 'Hypnos', logo: hypnos },
  { name: 'Silentnight', logo: silent },
  { name: 'Sealy', logo: sealy },
  { name: 'Relyon', logo: relyen },
  { name: 'SleepSoul', logo: sleep },
  { name: 'Emma', logo: emma },
  { name: 'Simba', logo: simba },
  { name: 'Relyon', logo: relyen },
  { name: 'Hypnos', logo: hypnos },
  { name: 'The British Bed Company', logo: british },
];

const BrandSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Brand</h2>
        <p className="text-gray-500">The biggest brands stocked with next day delivery.</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 justify-center max-w-6xl mx-auto">
        {brands.map((brand, index) => (
          <div key={index} className="border border-gray-200 p-4 rounded-lg shadow-md flex justify-center items-center">
            <img src={brand.logo} alt={brand.name} className="h-16 object-contain" />
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-8">
        <button className="bg-orange-500 text-white px-8 py-3 rounded-full shadow-lg hover:bg-orange-600">
          View All
        </button>
      </div>
    </section>
  );
};

export default BrandSection;
