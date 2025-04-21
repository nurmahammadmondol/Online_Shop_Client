import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaAnglesRight } from 'react-icons/fa6';

const PantsSection = () => {
  const PantsCategories = [
    {
      id: 1,
      name: 'Embroidery Punjabi',
      img: 'https://i.ibb.co.com/zHBPtKy6/s1-mens-slim-fit-stretchable-denim-jeans-pant-deep-blue-2.jpg',
      price: 600,
    },
    {
      id: 2,
      name: 'Cotton Punjabi',
      img: 'https://i.ibb.co.com/WrjpbMR/s1-mens-slim-fit-stretchable-denim-jeans-pant-deep-blue-3.jpg',
      price: 800,
    },
    {
      id: 3,
      name: 'cotton-t-shirt',
      img: 'https://i.ibb.co.com/MxCR4f80/s1-mens-slim-fit-stretchable-denim-jeans-pant.jpg',
      price: 600,
    },
    {
      id: 4,
      name: "Men's T-Shirt",
      img: 'https://i.ibb.co.com/jZTpGPSy/s1-semi-narrow-slim-fit-denim-pant.jpg',
      price: 900,
    },
    {
      id: 5,
      name: 'T-Shirt',
      img: 'https://i.ibb.co.com/7qjpzfQ/s1-semi-narrow-slim-fit-denim-pant-1.jpg',
      price: 600,
    },
    {
      id: 6,
      name: 'Shirt',
      img: 'https://i.ibb.co.com/9k1k0mLs/s1-semi-narrow-slim-fit-denim-pant-2.jpg',
      price: 1300,
    },
    {
      id: 7,
      name: "Men's Shirt",
      img: 'https://i.ibb.co.com/SDX06b20/s1-semi-narrow-slim-fit-denim-pant-3.jpg',
      price: 600,
    },
    {
      id: 8,
      name: 'Denim Pants',
      img: 'https://i.ibb.co.com/0yvV8v6R/s1-mens-export-slim-fit-twill-pant-khaki.jpg',
      price: 700,
    },
  ];

  return (
    <div className="w-11/12 mx-auto my-20 ">
      <div className="w-full bg-slate-100 px-2 py-1 flex items-center justify-between">
        <h6 className="text-[#576bb3] text-lg font-bold">Pants</h6>

        <ul className="flex items-center gap-5 text-sm">
          <li className="hover:bg-slate-200 p-1 px-3 flex items-center gap-2">
            Jeans Pants <FaAnglesRight />
          </li>
          <li className="hover:bg-slate-200 p-1 px-3 flex items-center gap-2">
            Twill/Gabardine <FaAnglesRight />
          </li>
          <li className="hover:bg-slate-200 p-1 px-3 flex items-center gap-2">
            Joggers Pants
            <FaAnglesRight />
          </li>
        </ul>

        <button className="btn">
          All <FaArrowCircleRight />
        </button>
      </div>

      <div className="mx-6 mt-5 flex justify-between items-center gap-5">
        {PantsCategories.map(item => (
          <div className="border p-2 bg-gray-100">
            <img className="w-full " src={item?.img} alt="" />
            <p className="mt-3 ">${item?.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PantsSection;
