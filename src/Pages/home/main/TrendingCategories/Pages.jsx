import React, { useRef, useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Grid, Navigation, Pagination } from 'swiper/modules';

const TrendingCategories = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  const categories = [
    {
      id: 1,
      name: 'Embroidery Punjabi',
      img: 'https://i.ibb.co/ZsHDk2W/s1-sequence-embroidery-panjabi.jpg',
    },
    {
      id: 2,
      name: 'Cotton Punjabi',
      img: 'https://i.ibb.co/Fk1s3rFf/s1-sequence-panjabi.jpg',
    },
    {
      id: 3,
      name: 'Mens-t-shirt',
      img: 'https://i.ibb.co/hJ7c8wrQ/s1-cotton-mens-t-shirt-3.jpg',
    },
    {
      id: 4,
      name: 'Cotton T-Shirt',
      img: 'https://i.ibb.co/35qSCkKk/s1-cotton-mens-t-shirt-1.jpg',
    },
    {
      id: 5,
      name: 'Cotton T-Shirt',
      img: 'https://i.ibb.co/dsnsYtYw/s1-cotton-mens-t-shirt-2.jpg',
    },
    {
      id: 6,
      name: "Men's Shirt",
      img: 'https://i.ibb.co/MkWcGDbm/s1-mens-casual-ban-collar-denim-shirt-stylish-comfortable-timeless.jpg',
    },
    {
      id: 7,
      name: 'Denim Shirt',
      img: 'https://i.ibb.co/BVbbbmzm/s1-mens-casual-ban-collar-denim-shirt-stylish-comfortable-timeless-1.jpg',
    },
    {
      id: 8,
      name: 'Jeans Pants',
      img: 'https://i.ibb.co/9d4QrXR/s1-mens-slim-fit-stretchable-denim-jeans-pant-deep-blue-1.jpg',
    },
    {
      id: 9,
      name: 'Jeans Pants Blue',
      img: 'https://i.ibb.co/s95Bv1bm/s1-mens-slim-fit-stretchable-denim-jeans-pant-deep-blue.jpg',
    },
    {
      id: 10,
      name: "Men's Twill Pants",
      img: 'https://i.ibb.co/7xph5QB/1-mens-export-slim-fit-twill-pant-khaki.jpg',
    },
    {
      id: 11,
      name: 'Denim Blue',
      img: 'https://i.ibb.co/s95Bv1bm/s1-mens-slim-fit-stretchable-denim-jeans-pant-deep-blue.jpg',
    },
    {
      id: 12,
      name: "Men's Twill Pants",
      img: 'https://i.ibb.co/7xph5QB/1-mens-export-slim-fit-twill-pant-khaki.jpg',
    },
  ];

  // Reassign nav buttons after first render
  useEffect(() => {
    if (swiperInstance && swiperInstance.params) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy(); // destroy old nav
      swiperInstance.navigation.init(); // init new nav
      swiperInstance.navigation.update(); // update it
    }
  }, [swiperInstance]);

  return (
    <div className="w-11/12 mx-auto my-10">
      <div className="mb-5 flex justify-between items-center">
        <img
          className="w-36 lg:w-48"
          src="https://i.ibb.co/ymh41rxd/hot-deal-logo.gif"
          alt="Hot Deal"
        />
        <button className="btn bg-[#576bb3] text-white flex items-center gap-2">
          See more <span className="text-xl">❯</span>
        </button>
      </div>

      <div className="relative">
        {/* Navigation buttons outside grid */}
        <div
          ref={prevRef}
          className="absolute left-[-30px] top-1/2 -translate-y-1/2 z-10 cursor-pointer text-[#576bb3] text-3xl"
        >
          ❮
        </div>
        <div
          ref={nextRef}
          className="absolute right-[-30px] top-1/2 -translate-y-1/2 z-10 cursor-pointer text-[#576bb3] text-3xl"
        >
          ❯
        </div>

        <Swiper
          onSwiper={setSwiperInstance}
          breakpoints={{
            320: { slidesPerView: 2, grid: { rows: 2, fill: 'row' } },
            768: { slidesPerView: 3, grid: { rows: 2, fill: 'row' } },
            1024: { slidesPerView: 5, grid: { rows: 2, fill: 'row' } },
          }}
          spaceBetween={20}
          grid={{ rows: 2, fill: 'row' }}
          pagination={{
            clickable: true,
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          modules={[Grid, Pagination, Navigation]}
          className="pb-20"
        >
          {categories.map(category => (
            <SwiperSlide key={category.id}>
              <div className="w-full h-full shadow-lg border rounded-lg p-4 text-center">
                <img
                  src={category.img}
                  alt={category.name}
                  className="w-full h-28 object-cover rounded-md"
                />
                <h3 className="mt-3 font-semibold text-sm md:text-base">
                  {category.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default TrendingCategories;
