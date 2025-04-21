import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaAnglesRight } from 'react-icons/fa6';

const T_shirtSection = () => {
  const T_shirtCategories = [
    {
      id: 1,
      name: 'Embroidery Punjabi',
      img: 'https://i.ibb.co.com/NgFQStGQ/s1-cotton-mens-t-shirt-5.jpg',
      price: 600,
    },
    {
      id: 2,
      name: 'Cotton Punjabi',
      img: 'https://i.ibb.co.com/nMVGG76G/s1-cotton-mens-t-shirt-6.jpg',
      price: 800,
    },
    {
      id: 3,
      name: 'cotton-t-shirt',
      img: 'https://i.ibb.co/hJ7c8wrQ/s1-cotton-mens-t-shirt-3.jpg',
      price: 600,
    },
    {
      id: 4,
      name: "Men's T-Shirt",
      img: 'https://i.ibb.co/35qSCkKk/s1-cotton-mens-t-shirt-1.jpg',
      price: 900,
    },
    {
      id: 5,
      name: 'T-Shirt',
      img: 'https://i.ibb.co/dsnsYtYw/s1-cotton-mens-t-shirt-2.jpg',
      price: 600,
    },
    {
      id: 6,
      name: 'Shirt',
      img: 'https://i.ibb.co.com/r22Yj9HS/s1-cotton-mens-t-shirt-7.jpg',
      price: 1300,
    },
    {
      id: 7,
      name: "Men's Shirt",
      img: 'https://i.ibb.co.com/7t2xgspz/s1-cotton-mens-t-shirt-4.jpg',
      price: 600,
    },
    {
      id: 8,
      name: 'Denim Pants',
      img: 'https://i.ibb.co.com/Mk8Td8ch/s1-cotton-mens-t-shirt-8.jpg',
      price: 700,
    },
  ];

  return (
    <div className="w-11/12 mx-auto my-20 ">
      <div className="w-full bg-slate-100 px-2 py-1 flex items-center justify-between">
        <h6 className="text-[#576bb3] text-lg font-bold">T_shirt</h6>

        <ul className="flex items-center gap-5 text-sm">
          <li className="hover:bg-slate-200 p-1 px-3 flex items-center gap-2">
            Thematic
            <FaAnglesRight />
          </li>
          <li className="hover:bg-slate-200 p-1 px-3 flex items-center gap-2">
            Bangla T-shirt <FaAnglesRight />
          </li>
          <li className="hover:bg-slate-200 p-1 px-3 flex items-center gap-2">
            Combo Offer
            <FaAnglesRight />
          </li>
        </ul>

        <button className="btn">
          All <FaArrowCircleRight />
        </button>
      </div>

      <div className="mx-6 mt-5 flex justify-between items-center gap-5">
        {T_shirtCategories.map(item => (
          <div className="border p-2 bg-gray-100">
            <img className="w-full " src={item?.img} alt="" />
            <p className="mt-3 ">${item?.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default T_shirtSection;
