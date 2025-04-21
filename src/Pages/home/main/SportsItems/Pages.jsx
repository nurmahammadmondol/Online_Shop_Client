import React from 'react';
import { FaArrowCircleRight } from 'react-icons/fa';
import { FaAnglesRight } from 'react-icons/fa6';

const SportsItemsSection = () => {
  const SportsItemsCategories = [
    {
      id: 1,
      name: 'Embroidery Punjabi',
      img: 'https://i.ibb.co.com/39CcGPWS/s1-bangladesh-t20-world-cup-jersey-short-sleeve-collar-polo-jersey-for-men-bangladesh-cricket-jersey.jpg',
      price: 600,
    },
    {
      id: 2,
      name: 'Cotton Punjabi',
      img: 'https://i.ibb.co.com/7dLRS0xd/s1-bangladesh-short-sleeve-collar-polo-jersey-for-man-bangladesh-football-jersey.jpg',
      price: 800,
    },
    {
      id: 3,
      name: 'cotton-t-shirt',
      img: 'https://i.ibb.co.com/h1LZVV84/s1-rangpur-rangers-short-sleeve-bpl-jersey-for-men-bpl-jersey-rangpur-jersey-2024-2025.jpg',
      price: 600,
    },
    {
      id: 4,
      name: "Men's T-Shirt",
      img: 'https://i.ibb.co.com/35c5VqX5/s1-comilla-victorians-full-sleeve-polo-pbl-jersey-for-man-bpl-cricket-jersey-comilla-jersey-2024-202.jpg',
      price: 900,
    },
    {
      id: 5,
      name: 'T-Shirt',
      img: 'https://i.ibb.co.com/2148syFV/s1-dhaka-capaitals-premium-short-sleeve-polo-cricket-jersey-for-men-bpl-short-sleeve-t-shirt-dhaka-c.jpg',
      price: 600,
    },
    {
      id: 6,
      name: 'Shirt',
      img: 'https://i.ibb.co.com/xqKS8BWt/s1-fortune-barishal-short-sleeve-bpl-jersey-for-man-bpl-jersey-barisal-jersey-2024-2025.jpg',
      price: 1300,
    },
    {
      id: 7,
      name: "Men's Shirt",
      img: 'https://i.ibb.co.com/C369v2VG/s1-khulna-tigers-short-sleeve-collar-polo-jersey-for-men-bpl-polo-jersey-khulna-bpl-jersey-2024-2025.jpg',
      price: 600,
    },
    {
      id: 8,
      name: 'Denim Pants',
      img: 'https://i.ibb.co.com/C5fK3ggX/s1-sylhet-strikers-full-sleeve-polo-bpl-jersey-for-man-bpl-long-sleeve-cricket-t-shirt-sylhet-jersey.jpg',
      price: 700,
    },
  ];

  return (
    <div className="w-11/12 mx-auto my-10 ">
      <div className="w-full bg-slate-100 px-2 py-1 flex items-center justify-between">
        <h6 className="text-[#576bb3] text-lg font-bold">Sports Items</h6>

        <ul className=" hidden">
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
        {SportsItemsCategories.map(item => (
          <div className="border p-2 bg-gray-100">
            <img className="w-full " src={item?.img} alt="" />
            <p className="mt-3 ">${item?.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsItemsSection;
