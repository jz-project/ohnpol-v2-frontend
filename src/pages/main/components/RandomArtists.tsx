import { allArtistList } from '@/temp/artists.ts';
import { tm } from '@/utils/tw-merge';
import { useMemo } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

function RandomArtists() {
  // 아티스트를 소속사별로 객체로 정리
  // 나중에는 API로 처리할 예정
  const artistsByEntertainment = allArtistList.reduce(
    (acc, artist) => {
      if (!acc[artist.enterComp]) {
        acc[artist.enterComp] = [];
      }
      acc[artist.enterComp].push(artist);
      return acc;
    },
    {} as Record<string, typeof allArtistList>
  );

  // 랜덤으로 소속사 뽑기
  const entertainmentCompanies = Object.keys(artistsByEntertainment);
  const randomArtists =
    artistsByEntertainment[
      entertainmentCompanies[
        Math.floor(Math.random() * entertainmentCompanies.length)
      ]
    ];

  const slidesPerViewConfig = useMemo(() => {
    return {
      0: { slidesPerView: 1 },
      768: { slidesPerView: randomArtists.length >= 2 ? 2 : 1 },
      1024: { slidesPerView: randomArtists.length >= 3 ? 3 : 2 },
    };
  }, [randomArtists.length]);

  console.log(slidesPerViewConfig);

  if (randomArtists.length > 0)
    return (
      <div className="w-full  bg-neutral-500 rounded-[15px] p-7">
        <h2 className="font-bold text-[23px] mb-2 text-left">
          {randomArtists?.[0]?.enterComp ?? '소속사 없음'}
        </h2>
        <Swiper
          loop={false}
          speed={600}
          effect="fade"
          className="!h-full flex justify-center items-center"
          spaceBetween={20}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
            disabledClass: 'sr-only',
          }}
          breakpoints={slidesPerViewConfig}
          modules={[Navigation]}
        >
          <div className="swiper-button-prev" tabIndex={0} />
          <div
            className={tm(
              'flex flex-col justify-between items-center',
              '!h-fit-content'
            )}
          >
            {randomArtists?.map((artist, index) => (
              <SwiperSlide
                key={`random-artists_${artist.groupName}_${index + 1}`}
                className={tm('flex justify-center items-center', '!h-auto')}
              >
                <figure className="gird grid-row-3 gap-2">
                  <img
                    className={tm(
                      'w-full aspect-[233/170]',
                      'overflow-hidden',
                      'rounded-full',
                      'object-cover',
                      'hover:brightness-85 hover:cursor-pointer',
                      'transition-all duration-200 ease-in-out',
                      'row-span-2'
                    )}
                    src={artist.photo}
                    alt=""
                    tabIndex={0}
                  />
                  <figcaption
                    className={tm(
                      'text-center',
                      'w-full h-2/10',
                      'font-middle text-middle leading-7',
                      'text-ellipsis whitespace-nowrap overflow-hidden',
                      'row-span-1'
                    )}
                  >
                    {artist.groupName}
                  </figcaption>
                </figure>
              </SwiperSlide>
            ))}
          </div>
          <div className="swiper-button-next" tabIndex={0} />
        </Swiper>
      </div>
    );
}

export default RandomArtists;
