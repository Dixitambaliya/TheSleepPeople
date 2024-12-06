import React from 'react'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className='bg-green-600 text-white py-8 '>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4'>
        <div > 
            <img src={logo} alt='The Sleep people' className='w-24 mb-4'/>
            <p className='text-sm'>
            Lorem ipsum dolor sit amet consectetur. Amet nisl amet id venenatis pellentesque in lobortis
                        dui. In et a augue viverra posuere. Quam purus sed dictum lectus est lectus vel aenean.
                        Blandit id magna morbi magna egestas. Habitasse sem euismod vestibulum aliquam. In tincidunt
                        condimentum non amet nisl morbi enim vestibulum. Eget eu mattis lorem tortor erat etiam.
                        Imperdiet egestas enim tincidunt eu at. 
            </p>
            <div className='flex space-x-4 mt-4'>
                <a href="#" className='text-white'>
                    <i className='fab fa-instagram'></i>
                </a>
                <a href="#" className='text-white'>
                    <i className='fab fa-facebook'></i>
                </a>
                <a href="#" className='text-white'>
                    <i className='fab fa-x-twitter'></i>
                </a>
                <a href="#" className='text-white'>
                    <i className='fab fa-medium'></i>
                </a>
            </div>
        </div>

        <div>
            <h3 className='font-bold mb-4'>Useful links</h3>
            <ul className='space-y-1'>
                <li>
                    <link to="/advice"className='hover:underline'/>Advice
                </li>
                <li>
                    <link to="/advice"className='hover:underline'/>Contact US
                </li>
                <li>
                    <link to="/advice"className='hover:underline'/>Delivery 
                </li>
                <li>
                    <link to="/advice"className='hover:underline'/>Review
                </li>
                <li>
                    <link to="/advice"className='hover:underline'/>Our blog
                </li>
                <li>
                    <link to="/advice"className='hover:underline'/>Abous us
                </li>
            </ul>
        </div>
        <div>
            <h3 className='font-bold mb-4'>Popular Category</h3>
            <ul className='space-y-1'>
                <li>Sale</li>
                <li>All Mattress</li>
                <li>Double Mattress</li>
                <li>King size Mattress</li>
                <li>Single Mattress</li>
                <li>Pocket sprung Mattress</li>
            </ul>
        </div>
        <div>
            <h3 className='font-bold mb-4'>Awards</h3>
            <div className='space-y-4'>
                <img src="" alt="" />
            </div>
        </div>
      </div>
  </div>
  )
}

export default Footer
