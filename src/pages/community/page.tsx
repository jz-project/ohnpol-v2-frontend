import { useState } from 'react';
import ArtistProfile from './components/ArtistProfile';
import Header from '@/components/Header';
import artistImage from '@/temp/images/bts.webp';
import allPost from '@/temp/allPost.ts';
import memberProfile from '@/temp/memberProfile.ts';
import Modal from 'react-modal';
import Post from '@/components/Post';

function CommunityPage() {
  const [clickedMember, setClickedMember] = useState<string | null>(null);
  const [clickedPost, setClickedPost] = useState(0);
  const [isClickedPost, setIsClickedPost] = useState(false);

  const closePostModal = () => {
    setIsClickedPost(false);
  };

  const getClickedPostInfo = (postId: number) => {
    const postInfo = allPost.find((item) => item.postId === postId);
    console.log(postInfo);

    return {
      postId: postInfo?.postId ?? 0,
      polaroid: postInfo?.polaroid ?? '',
      nickname: postInfo?.nickname ?? 'Unknown',
      enterComp: postInfo?.enterComp ?? 'Unknown',
      groupName: postInfo?.groupName ?? 'Unknown',
      memberName: postInfo?.memberName ?? 'Unknown',
      albumName: postInfo?.albumName ?? 'Unknown',
      likeQuant: postInfo?.likeQuant ?? 0,
      userId: postInfo?.userId ?? 0,
    };
  };

  const postModalStyle: ReactModal.Styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0, 0.5)',
      zIndex: 999,
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'white',
      overflow: 'auto',
      width: 'fit-content',
      height: 'fit-content',
      margin: 'auto auto',
      WebkitOverflowScrolling: 'touch',
      WebkitUserSelect: 'none',
      borderRadius: '48px',
      outline: 'none',
      border: '0',
      padding: '0',
    },
  };

  return (
    <>
      <Header />
      <ArtistProfile
        artistInfo={{
          photo: artistImage,
          groupName: '방탄소년단',
          fandom: '아미',
          company: 'BigHitMusic',
          collectionQuant: 23,
        }}
      />
      {/* 멤버별 이미지 */}
      <div className="flex flex-col items-center w-full h-fit pt-5">
        <div className="flex justify-center items-center w-[90%] h-[50vh] gap-x-4">
          {memberProfile?.map((item, index) => (
            <div key={`member_${index + 1}`} className="w-[180px]">
              <p className="text-center font-semibold">{item?.name}</p>

              <div
                className="w-full max-w-[180px] min-w-[100px] aspect-[3/4.35] mx-2 my-2 rounded-[20px] border border-gray-300 bg-gray-300 shadow-lg overflow-hidden cursor-pointer transition-transform duration-100 hover:scale-110"
                onClick={() => setClickedMember(item?.name)}
              >
                <div className="flex justify-center items-center w-full h-full">
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
        <div className="w-[95%] md:w-[85%] bg-[#ede5e5] mt-6 md:mt-20 mb-6 md:mb-12 rounded-[15px] py-[10vh] relative flex flex-col">
          {/* 전체보기 버튼 */}
          <button
            className="absolute top-[-6%] right-[0vw] w-[20vw] max-w-[80px] h-[8vw] max-h-[35px] rounded-[18px] border-none bg-primary-300 text-white text-[5vw] md:text-[16px] cursor-pointer transition-all duration-100 hover:brightness-90"
            onClick={() => {
              // todo: 함수추가 필요
            }}
          >
            전체보기
          </button>

          {/* 도안 */}
          <div className="mx-auto flex flex-wrap justify-center items-center w-[85%] h-[90%]">
            {clickedMember === null ? (
              allPost.map((item) => (
                <div
                  key={`allPost_${item.postId}`}
                  className="flex justify-center items-center w-[180px] h-[261px] m-2 rounded-[20px] border border-gray-300 bg-gray-300 shadow-lg overflow-hidden cursor-pointer transition-transform duration-100 hover:scale-110"
                  onClick={() => {
                    console.log('clickedMember is null');
                    setClickedPost(item.postId);
                    console.log(item.postId);
                    setIsClickedPost(true);
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
                  onClick={() => {
                    console.log('clickedMember is', clickedMember);
                    setClickedPost(item.postId);
                    console.log(item.postId);
                    setIsClickedPost(true);
                  }}
                >
                  <img
                    src={item.polaroid && item.polaroid}
                    alt="Polaroid"
                    className="w-full h-full object-cover"
                  />
                </div>
              ))
            )}
            <Modal
              isOpen={isClickedPost}
              onRequestClose={closePostModal}
              ariaHideApp={false}
              style={postModalStyle}
            >
              <Post item={getClickedPostInfo(clickedPost)} />
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

export default CommunityPage;
