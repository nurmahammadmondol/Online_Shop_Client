import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaAnglesRight } from 'react-icons/fa6';

const PunjabiSection = () => {
  const PunjabiCategories = [
    {
      id: 1,
      name: 'Embroidery Punjabi',
      img: 'https://i.ibb.co.com/5WLg1yT1/s1-premium-cotton-panjabi.jpg',
      price: 600,
    },
    {
      id: 2,
      name: 'Cotton Punjabi',
      img: 'https://i.ibb.co.com/tjTMthR/s1-premium-cotton-panjabi-1.jpg',
      price: 800,
    },
    {
      id: 3,
      name: 'cotton-t-shirt',
      img: 'https://i.ibb.co.com/yBPFb44Q/s1-premium-cotton-panjabi-2.jpg',
      price: 600,
    },
    {
      id: 4,
      name: "Men's T-Shirt",
      img: 'https://i.ibb.co.com/TDdwNXn9/s1-premium-cotton-panjabi-3.jpg',
      price: 900,
    },
    {
      id: 5,
      name: 'T-Shirt',
      img: 'https://i.ibb.co.com/93Z8w6vZ/s1-premium-cotton-panjabi-4.jpg',
      price: 600,
    },
    {
      id: 6,
      name: 'Shirt',
      img: 'https://i.ibb.co.com/WvwcffBt/s1-premium-cotton-panjabi-5.jpg',
      price: 1300,
    },
    {
      id: 7,
      name: "Men's Shirt",
      img: 'https://i.ibb.co.com/Zzf0m03Z/s1-premium-cotton-panjabi-6.jpg',
      price: 600,
    },
    {
      id: 8,
      name: 'Denim Pants',
      img: 'https://i.ibb.co.com/ZzKpBkvy/s1-premium-cotton-panjabi-7.jpg',
      price: 700,
    },
  ];

  return (
    <div className="w-11/12 mx-auto my-10 ">
      <div className="w-full bg-slate-100 px-2 py-1 flex items-center justify-between">
        <h6 className="text-[#576bb3] text-lg font-bold">Punjabi</h6>

        <ul className="flex items-center gap-5 text-sm">
          <li className="hover:bg-slate-200 p-1 px-3 flex items-center gap-2">
            Cotton Punjabi <FaAnglesRight />
          </li>
          <li className="hover:bg-slate-200 p-1 px-3 flex items-center gap-2">
            Kabuli Punjabi <FaAnglesRight />
          </li>
          <li className="hover:bg-slate-200 p-1 px-3 flex items-center gap-2">
            Colorful Punjabi <FaAnglesRight />
          </li>
        </ul>

        <button className="btn">
          All <FaArrowCircleRight />
        </button>
      </div>

      <div className="mx-6 mt-5 flex justify-between items-center gap-5">
        {PunjabiCategories.map(item => (
          <div className="border p-2 bg-gray-100">
            <img className="w-full " src={item?.img} alt="" />
            <p className="mt-3 ">${item?.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PunjabiSection;
