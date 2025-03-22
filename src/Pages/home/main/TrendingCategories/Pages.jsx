import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/grid';
import { Pagination, Navigation, Grid } from 'swiper/modules';
import { FaArrowCircleRight } from 'react-icons/fa';

const TrendingCategories = () => {
  const categories = [
    {
      id: 1,
      name: 'Sequence Embroidery Punjabi',
      img: 'https://i.ibb.co/ZsHDk2W/s1-sequence-embroidery-panjabi.jpg',
    },
    {
      id: 2,
      name: 'Cotton Sequence Punjabi',
      img: 'https://i.ibb.co/Fk1s3rFf/s1-sequence-panjabi.jpg',
    },
    {
      id: 3,
      name: 'cotton-mens-t-shirt',
      img: 'https://i.ibb.co/hJ7c8wrQ/s1-cotton-mens-t-shirt-3.jpg',
    },
    {
      id: 4,
      name: "Cotton Men's T-Shirt",
      img: 'https://i.ibb.co/35qSCkKk/s1-cotton-mens-t-shirt-1.jpg',
    },
    {
      id: 5,
      name: "Cotton Men's T-Shirt",
      img: 'https://i.ibb.co/dsnsYtYw/s1-cotton-mens-t-shirt-2.jpg',
    },
    {
      id: 6,
      name: "Men's Band Collar Denim Shirt",
      img: 'https://i.ibb.co/MkWcGDbm/s1-mens-casual-ban-collar-denim-shirt-stylish-comfortable-timeless.jpg',
    },
    {
      id: 7,
      name: "Men's Casual Collar Denim Shirt",
      img: 'https://i.ibb.co/BVbbbmzm/s1-mens-casual-ban-collar-denim-shirt-stylish-comfortable-timeless-1.jpg',
    },
    {
      id: 8,
      name: 'Denim Jeans Pants',
      img: 'https://i.ibb.co/9d4QrXR/s1-mens-slim-fit-stretchable-denim-jeans-pant-deep-blue-1.jpg',
    },
    {
      id: 9,
      name: 'Denim Jeans Pants-Deep Blue',
      img: 'https://i.ibb.co/s95Bv1bm/s1-mens-slim-fit-stretchable-denim-jeans-pant-deep-blue.jpg',
    },
    {
      id: 10,
      name: "Men's Slim-Fit Twill Pants",
      img: 'https://i.ibb.co.com/7xph5QB9/1-mens-export-slim-fit-twill-pant-khaki.jpg',
    },
  ];

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="mb-5 flex justify-between items-center">
        <img
          className="w-36 lg:w-48"
          src="https://i.ibb.co.com/ymh41rxd/hot-deal-logo.gif"
          alt=""
        />

        <button className="btn bg-orange-400 text-white">
          See more <FaArrowCircleRight />
        </button>
      </div>

      <div className="">
        <Swiper
          breakpoints={{
            320: { slidesPerView: 2, grid: { rows: 2, fill: 'row' } },
            768: { slidesPerView: 3, grid: { rows: 2, fill: 'row' } },
            1024: { slidesPerView: 4, grid: { rows: 2, fill: 'row' } },
          }}
          spaceBetween={20}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation, Grid]}
          className="mySwiper"
        >
          {categories.map(category => (
            <SwiperSlide key={category.id}>
              <div className="w-full h-full  shadow-lg border rounded-lg p-4 text-center">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-20 object-cover rounded-md"
                />
                <h3 className="mt-3 text-lg font-semibold">{category.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingCategories;
