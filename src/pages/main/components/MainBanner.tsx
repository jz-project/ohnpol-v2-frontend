import { MainBanners } from '@/data/banners';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Autoplay } from 'swiper/modules';

function MainBanner() {
  return (
    <>
      <Swiper
        className="w-full h-[calc(100vw*0.3)]"
        slidesPerView={1}
        loop={true}
        modules={[Pagination, Keyboard, Autoplay]}
        autoplay={{
          delay: 8000,
          disableOnInteraction: false,
        }}
        keyboard={{ enabled: true }}
        speed={1500}
        effect="fade"
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className}" tabindex="0" role="button" aria-label="Go to slide ${index + 1}"></span>`;
          },
        }}
      >
        {MainBanners.map((banner) => (
          <SwiperSlide
            className="main-banner-slide"
            key={`banner_${banner.id}`}
          >
            <img src={banner.image} alt={`${banner.title} 배너`} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default MainBanner;
