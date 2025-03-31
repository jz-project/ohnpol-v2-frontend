import { useState } from 'react';
import { IconStar, IconEmptyStar } from '@/components/IconStar';

interface ArtistProfileProps {
  artistInfo: {
    photo: string;
    groupName: string;
    fandom: string;
    company: string;
    collectionQuant: number;
  };
}

interface ArtistImageProps {
  photo: string;
}

interface ArtistInfoProps {
  groupName: string;
  fandom: string;
  company: string;
}

interface CollectionInfoProps {
  myCollectionQuant: number;
  totalCollectionQuant: number;
}

interface FavoriteButtonProps {
  isFavorite: boolean;
  favoriteCount: number;
  toggleFavorite: () => void;
}

// 아티스트이미지
function ArtistImage({ photo }: ArtistImageProps) {
  return (
    <div className="w-[300px] h-[180px] rounded-[100px] overflow-hidden shadow-lg bg-gray-300 flex justify-center items-center">
      <img src={photo} alt="Artist" className="w-full h-full object-cover" />
    </div>
  );
}

//아티스트정보
function ArtistInfo({ groupName, fandom, company }: ArtistInfoProps) {
  return (
    <div>
      <p className="text-white font-bold text-2xl">{groupName}</p>
      <p className="text-black font-semibold text-sm mt-1">팬덤명 : {fandom}</p>
      <p className="text-black font-semibold text-sm">소속 : {company}</p>
    </div>
  );
}

// 즐겨찾기버튼
function FavoriteButton({
  isFavorite,
  favoriteCount,
  toggleFavorite,
}: FavoriteButtonProps) {
  return (
    <div
      className="flex items-center mt-2 text-white font-bold text-lg"
      onClick={toggleFavorite}
    >
      {isFavorite ? <IconStar /> : <IconEmptyStar />}
      {favoriteCount.toLocaleString()} {/* 숫자 포맷팅 */}
    </div>
  );
}

function CollectionInfo({
  myCollectionQuant,
  totalCollectionQuant,
}: CollectionInfoProps) {
  return (
    <p className="mt-2 text-black font-semibold text-sm">
      내가 가진 컬렉션 {myCollectionQuant}/{totalCollectionQuant}
    </p>
  );
}

//부모
function ArtistProfile({ artistInfo }: ArtistProfileProps) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(120223251); // Todo: 초깃값 더미
  // const [myCollectionQuant, setMyCollectionQuant] = useState(7); // Todo: 초깃값 더미

  // 즐겨찾기 버튼 클릭 핸들러
  function toggleFavorite() {
    setIsFavorite((prev) => !prev);
    setFavoriteCount((prev) => (isFavorite ? prev - 1 : prev + 1));
  }

  return (
    <div className="flex items-center justify-center w-full h-[240px] bg-primary-300 p-6 rounded-lg shadow-md">
      <ArtistImage photo={artistInfo.photo} />
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
        <CollectionInfo
          myCollectionQuant={7}
          totalCollectionQuant={artistInfo.collectionQuant}
        />
      </div>
    </div>
  );
}

export default ArtistProfile;
