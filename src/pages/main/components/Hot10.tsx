import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { tm } from '@/utils/tw-merge';
import { posts } from '@/data/posts';
import { Post } from '@/types/post';

function Hot10() {
  const cards = posts.sort((a, b) => b.likes - a.likes).slice(0, 10) as Post[];
  const breakpointsConfig = {
    0: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 5,
      slidesPerGroup: 1,
    },
    1024: {
      slidesPerView: 6,
      slidesPerGroup: 2,
    },
    1280: {
      slidesPerView: 7,
      slidesPerGroup: 3,
    },
    1440: {
      slidesPerView: 8,
      slidesPerGroup: 4,
    },
  };

  return (
    <div className="fav-artist-swiper h-full">
      <Swiper
        loop={false}
        className="!h-full flex justify-center items-center"
        spaceBetween={25}
        breakpoints={breakpointsConfig}
        navigation={{
          prevEl: '.swiper-button-prev',
          nextEl: '.swiper-button-next',
          disabledClass: 'sr-only',
        }}
        modules={[Navigation]}
      >
        <div className="swiper-button-prev" tabIndex={0} />
        {cards?.map((card, index) => (
          <SwiperSlide
            key={`hot10_${card.postId}`}
            className={tm(
              'flex flex-col justify-between items-center',
              '!h-fit-content'
            )}
          >
            <p className="font-bold text-2xl">{index + 1}</p>
            <figure
              className={tm(
                'flex flex-col items-center gap-2',
                'w-full h-full'
              )}
            >
              <img
                className={tm(
                  'w-full aspect-[165/233]',
                  'overflow-hidden',
                  'rounded-[15px]',
                  'object-cover',
                  'transition-all duration-200 ease-in-out',
                  'hover:brightness-120 hover:cursor-pointer'
                )}
                src={card.image}
                alt="포토카드 이미지"
                tabIndex={0}
              />
              <figcaption
                className={tm(
                  'flex flex-col items-start justify-centerg',
                  'w-full h-2/10',
                  'font-middle text-middle'
                )}
              >
                <div className="flex items-center gap-1">
                  <span>
                    {/* 좋아요 토글 기능은
                    추후 실제 데이터 적용시 구현 예정
                  */}
                    <img src="/assets/icons/liked.svg" alt="liked" />
                  </span>
                  <p>{card.likes}</p>
                </div>
                <p>{card.userNickname}</p>
                <div
                  className={tm(
                    'flex flex-row flex-wrap items-start leading-4.5 gap-1',
                    'pt-1',
                    'text-primary-300'
                  )}
                >
                  <p>#{card.groupName}</p>
                  <p>#{card.enterName}</p>
                  <p>#{card.memberName}</p>
                  <p>#{card.collection.replace(/ /g, '_')}</p>
                </div>
              </figcaption>
            </figure>
          </SwiperSlide>
        ))}
        <div className="swiper-button-next" tabIndex={0} />
      </Swiper>
    </div>
  );
}

export default Hot10;
