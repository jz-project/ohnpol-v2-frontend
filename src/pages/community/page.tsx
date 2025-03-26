import { useState } from 'react';
import ArtistProfile from '@/components/ArtistProfile';
import OhnpolHeader from '@/components/ohnpol-header';
import artistImage from '@/temp/images/방탄소년단.webp';
import allPost from '@/temp/community/allPost.ts';
import memberProfile from '@/temp/community/memberProfile.ts';

function CommunityPage() {
  const [clickedMember, setClickedMember] = useState<string | null>(null);

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
      <div className="flex flex-col items-center w-full h-fit pt-5">
        <div className="flex justify-center items-center w-[90%] h-[50vh] gap-x-4">
          {memberProfile?.map((item, index) => (
            <div key={`member_${index + 1}`} className="w-[180px]">
              <p className="text-center font-semibold">{item?.name}</p>

              <div
                className="flex justify-center items-center w-[180px] h-[261px] mx-2 my-2 rounded-[20px] border border-gray-300 bg-gray-300 shadow-lg overflow-hidden cursor-pointer transition-transform duration-100 hover:scale-110"
                onClick={() => setClickedMember(item?.name)}
              >
                <div className="flex justify-center items-center w-[180px] h-[261px]">
                  <img
                    src={item?.memPhoto}
                    alt="memberPhoto"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="w-[95%] bg-[#ede5e5] mt-12 mb-12 rounded-[15px] py-[120px]">
          {/* 전체보기 버튼 */}
          <button
            className="absolute top-[755px] right-[30px] w-[80px] h-[35px] rounded-[18px] border-none mr-[20px] bg-primary-300 text-white float-right text-[16px] cursor-pointer transition-all duration-100 hover:brightness-90"
            onClick={() => {
              setClickedMember(null);
            }}
          >
            전체보기
          </button>

          {/* 컨텐츠 영역 */}
          <div className="mx-auto flex flex-wrap justify-center items-center w-[85%] h-[90%]">
            {clickedMember === null ? (
              allPost.map((item) => (
                <div
                  key={`allPost_${item.postId}`}
                  className="flex justify-center items-center w-[180px] h-[261px] m-2 rounded-[20px] border border-gray-300 bg-gray-300 shadow-lg overflow-hidden cursor-pointer transition-transform duration-100 hover:scale-110"
                  onClick={() => {
                    // setClickedPost(item.postId);
                  }}
                >
                  <img
                    src={item.polaroid && item.polaroid}
                    alt="allPolaroid"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            ) : allPost.length === 0 ? (
              <div className="text-gray-500 text-[20px] font-semibold w-full h-[100px] flex flex-col justify-center items-center">
                업로드된 포스트가 없습니다!
              </div>
            ) : (
              allPost.map((item) => (
                <div
                  key={`memberPost_${item.postId}`}
                  className="flex justify-center items-center w-[180px] h-[261px] m-2 rounded-[20px] border border-gray-300 bg-gray-300 shadow-lg overflow-hidden cursor-pointer transition-transform duration-100 hover:scale-110"
                  // onClick={() => {}}
                >
                  <img
                    src={item.polaroid && item.polaroid}
                    alt="Polaroid"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityPage;
