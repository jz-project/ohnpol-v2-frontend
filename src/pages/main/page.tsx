import FavArtists from '@/pages/main/components/FavArtists';
import Hot10 from '@/pages/main/components/Hot10';
import PopularCollection from '@/pages/main/components/HotCollection';
import MainBanner from '@/pages/main/components/MainBanner';
import RandomArtists from '@/pages/main/components/RandomArtists';
import RealTime from '@/pages/main/components/RealTime';
import { tm } from '@/utils/tw-merge';
import 'swiper/swiper-bundle.css';
import Title from '../../layouts/common/title';

function MainPage() {
  return (
    <>
      <Title>메인페이지</Title>
      <h1 className="sr-only">메인페이지</h1>

      {/* 메인 배너 */}
      <section className="w-full h-fit-content">
        <MainBanner />
      </section>

      {/* 메인 컨텐츠 */}
      <section className="w-full flex flex-col py-20 pl-7 gap-10">
        <article className="main-content">
          <h2>나의 최애 아티스트</h2>
          <FavArtists />
        </article>

        <article className="main-content">
          <h2>폴꾸 HOT 10</h2>
          <Hot10 />
        </article>

        <article className="main-content mr-7">
          <h2>실시간 도안</h2>
          <RealTime />
        </article>

        <section className={tm('grid grid-cols-2 gap-7 h-full', ' mr-7')}>
          <article className="main-content col-span-1">
            <h2>뜨는 컬렉션</h2>
            <PopularCollection />
          </article>
          <article className="main-content col-span-1 flex justify-center">
            <h2>모든 아티스트</h2>
            <RandomArtists />
          </article>
        </section>
      </section>
    </>
  );
}

export default MainPage;
