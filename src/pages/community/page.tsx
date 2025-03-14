import ArtistProfile from '@/components/ArtistProfile'; // ⭐ 이미지 경로 예시
import OhnpolHeader from '@/components/ohnpol-header';
import artistImage from '@/temp/images/방탄소년단.webp';
function CommunityPage() {
  return (
    <>
      <OhnpolHeader />
      <ArtistProfile
        artistInfo={{
          photo: artistImage,
          groupName: '방탄소년단',
          fandom: '아미',
          company: 'BigHitMusic',
          collectionQuant: 23,
        }}
      />
    </>
  );
}

export default CommunityPage;
