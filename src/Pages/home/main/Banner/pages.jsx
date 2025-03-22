import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

const Banner = () => {
  return (
    <Swiper
      modules={[Autoplay]}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      loop={true}
      className="w-full h-[300px] md:h-[450px] lg:h-[600px]"
    >
      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/xSs69y51/online-shopping-banner-vector.jpg"
          alt="Slide 1"
          className="w-full h-full "
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/mF0MPpYx/360-F-306694930-S3-Z8-H9-Qk1-MN79-ZUe7b-EWq-TFuon-RZdemw.jpg"
          alt="Slide 2"
          className="w-full h-full"
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/Sw8Bd6b5/photocomposition-horizontal-shopping-banner.jpg"
          alt="Slide 3"
          className="w-full h-full "
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/kLyPpsH/template-banner-for-online-store-with-shopping-vector-42935756.jpg"
          alt="Slide 4"
          className="w-full h-full "
        />
      </SwiperSlide>

      <SwiperSlide>
        <img
          src="https://i.ibb.co.com/twvg8DN3/360-F-751660549-sb-BTsejzwpj-Xlmuo-Ck66-VTQZGO3hztjy.jpg"
          alt="Slide 4"
          className="w-full h-full "
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
