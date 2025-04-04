import FavArtists from '@/pages/main/components/FavArtists.tsx';
import Title from '@/layouts/common/title.tsx';
import ArtistsSwiper from '@/components/ArtistsSwiper';
import { allArtistList } from '@/temp/artists.ts';
import { Artist } from '@/types/artist.ts';

function AllArtistPage() {
  // 소속사별로 아티스트 분류
  const sortByEnterComp = allArtistList.reduce<Record<string, Artist[]>>(
    (acc, artist) => {
      if (!acc[artist.enterComp]) {
        acc[artist.enterComp] = [];
      }
      acc[artist.enterComp].push(artist);
      return acc;
    },
    {}
  );

  const groupedArtist = Object.entries(sortByEnterComp);

  return (
    <main className="bg-transparent w-full flex-1">
      <Title> 전체 아티스트 페이지 </Title>
      <h1 className="sr-only">전체 아티스트 페이지</h1>

      {/* 상단 헤더박스 */}
      <div className="w-full h-[10vh] bg-primary-300"></div>

      {/* 최대 아티스트 */}
      <section className="w-full flex flex-col py-20 pl-7 gap-10 mb-[2vh]">
        <article className="main-content">
          <h2>나의 최애 아티스트</h2>
          <FavArtists />
        </article>
      </section>

      {/* 모든 아티스트 */}
      <section className="w-full flex flex-col py-20 pl-7 gap-10 mb-[2vh]">
        <article className="main-content">
          <h2>모든 아티스트</h2>
          {groupedArtist.map(([enterComp, artist]) => (
            <>
              <h2>{enterComp}</h2>
              <ArtistsSwiper
                artists={artist}
                keyPrefix={`all-artist-${enterComp}`}
              />
            </>
          ))}
        </article>
      </section>
    </main>
  );
}

export default AllArtistPage;
