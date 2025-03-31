import { Artist, FavArtist } from '@/types/artist';
import { tm } from '@/utils/tw-merge';
import { useMemo } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

interface ArtistsSwiperProps {
  artists: Artist[] | FavArtist[];
  keyPrefix: string;
}

function ArtistsSwiper({ artists, keyPrefix }: ArtistsSwiperProps) {
  // return {
  //   0: { slidesPerView: 1 },
  //   768: { slidesPerView: randomArtists.length >= 2 ? 2 : 1 },
  //   1024: { slidesPerView: randomArtists.length >= 3 ? 3 : 2 },
  // };

  const slidesPerViewConfig = useMemo(() => {
    return {
      0: {
        slidesPerView: 2,
        slidesPerGroup: 1,
      },
      768: {
        slidesPerView: 3,
        slidesPerGroup: 1,
      },
      1024: {
        slidesPerView: 4,
        slidesPerGroup: 2,
      },
      1280: {
        slidesPerView: 5,
        slidesPerGroup: 3,
      },
    };
  }, [artists.length]);

  console.log(slidesPerViewConfig);

  return (
    <div className="artist-swiper h-full">
      <Swiper
        loop={false}
        className="!h-full flex justify-center items-center"
        spaceBetween={25}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
          disabledClass: 'sr-only',
        }}
        breakpoints={{
          0: {
            slidesPerView: 2,
            slidesPerGroup: 1,
          },
          768: {
            slidesPerView: 3,
            slidesPerGroup: 1,
          },
          1024: {
            slidesPerView: 4,
            slidesPerGroup: 2,
          },
          1280: {
            slidesPerView: 5,
            slidesPerGroup: 3,
          },
        }}
        modules={[Navigation]}
      >
        <div className="swiper-button-prev" tabIndex={0} />
        {artists?.map((artist, index) => (
          <SwiperSlide
            key={`${keyPrefix}_${artist.groupName}_${'id' in artist ? artist.id : index + 1}`}
            className={tm(
              'flex flex-col justify-between items-center',
              '!h-auto '
            )}
          >
            <figure className="flex flex-col justify-between items-center w-full h-full">
              <img
                className={tm(
                  'w-full aspect-[233/170]',
                  'overflow-hidden',
                  'rounded-full',
                  'object-cover',
                  'transition-all duration-200 ease-in-out',
                  'hover:brightness-85 hover:cursor-pointer'
                )}
                src={artist.photo}
                alt=""
                tabIndex={0}
              />
              <figcaption
                className={tm(
                  'flex items-center justify-center',
                  'h-2/10',
                  'font-middle text-middle'
                )}
              >
                {artist.groupName}
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next" tabIndex={0} />
      </Swiper>
    </div>
  );
}

export default ArtistsSwiper;
