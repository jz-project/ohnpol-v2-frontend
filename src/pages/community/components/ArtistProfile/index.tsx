import { useState } from 'react';
import ArtistInfo from '../ArtistInfo';
import FavoriteButton from '../FavoriteButton';

interface ArtistProfileProps {
  artistInfo: {
    photo: string;
    groupName: string;
    fandom: string;
    company: string;
    collectionQuant: number;
  };
}

function ArtistProfile({ artistInfo }: ArtistProfileProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(120223251); // Todo: 초깃값 더미
  const myCollectionQuant = 7; // Todo: 추후 useState로 관리

  // 즐겨찾기 버튼 클릭 핸들러
  function toggleFavorite() {
    setIsFavorite((prev) => !prev);
    setFavoriteCount((prev) => (isFavorite ? prev - 1 : prev + 1));
  }

  return (
    <div className="flex items-center justify-center w-full h-[240px] bg-primary-300 p-6 rounded-lg shadow-md">
      <div className="w-[300px] h-[180px] rounded-[100px] overflow-hidden shadow-lg bg-gray-300 flex justify-center items-center">
        <img
          src={artistInfo.photo}
          alt="Artist"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="ml-6">
        <ArtistInfo
          groupName={artistInfo.groupName}
          fandom={artistInfo.fandom}
          company={artistInfo.company}
        />
        <FavoriteButton
          isFavorite={isFavorite}
          favoriteCount={favoriteCount}
          toggleFavorite={toggleFavorite}
        />
        <p className="mt-2 text-black font-semibold text-sm">
          내가 가진 컬렉션 {myCollectionQuant}/{artistInfo.collectionQuant}
        </p>
      </div>
    </div>
  );
}

export default ArtistProfile;
