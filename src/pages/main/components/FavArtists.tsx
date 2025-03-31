import ArtistsSwiper from '@/components/ArtistsSwiper';
import { favArtists } from '@/data/artists';
import { FavArtist } from '@/types/artist';
import EmptyText from '../../../components/EmptyText';

function FavArtists() {
  return (
    <>
      {favArtists.length === 0 ? (
        <EmptyText text="최애 아티스트를 등록하세요!" />
      ) : (
        <ArtistsSwiper
          artists={favArtists as FavArtist[]}
          keyPrefix="fav-artist"
        />
      )}
    </>
  );
}

export default FavArtists;
