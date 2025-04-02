import { IconLike } from '@/components/IconLike'; //todo : IconLikeEmpty 추가

interface PostItem {
  postId: number;
  polaroid: string;
  nickname: string;
  enterComp: string;
  groupName: string;
  memberName: string;
  albumName: string;
  likeQuant: number;
  userId: number;
}

interface PostProps {
  item: PostItem;
}

const Post: React.FC<PostProps> = ({ item }) => {
  const postLikeQuant = item.likeQuant; //todo: 추후 useState로 관리

  // const handleClickLikeIcon = async () => {
  //   try {
  //     setIsLikePost((prev) => !prev);
  //     isLikePost ? await deleteLike() : await postLike();
  //     getPostLikeQuant();
  //   } catch (e) {
  //     console.error('Error in handleClickLikeIcon:', e);
  //   }
  // };

  return (
    <div className="flex w-[70%] min-w-[740px] max-w-[900px] h-[32vw] min-h-[530px] max-h-[600px] overflow-hidden box-border">
      {/* 왼쪽 */}
      <div className="flex flex-col justify-center items-center w-[60%] h-full bg-primary-100 rounded-l-[30px]">
        <div className="flex justify-center items-center w-[300px] h-[400px] max-h-[400px] overflow-hidden rounded-[20px] bg-gray-300 shadow-lg">
          <img src={item.polaroid} alt="Polaroid" className="h-full" />
        </div>
      </div>

      {/* 오른쪽 */}
      <div className="w-[45%] h-full bg-transparent rounded-r-[30px] px-[4%] py-[10%] flex flex-col justify-between">
        <div>
          {/* 닉네임 */}
          <div className="text-5xl font-bold">{item.nickname}</div>

          {/* 태그 */}
          <div className="flex flex-wrap min-w-[160px] max-w-[200px] w-full my-2 text-primary-300 font-bold text-xl">
            <span className="mr-2">#{item.enterComp}</span>
            <span className="mr-2">#{item.groupName}</span>
            {item.groupName !== item.memberName && (
              <span className="mr-2">#{item.memberName}</span>
            )}
            <span className="mr-2">#{item.albumName}</span>
          </div>

          {/* 날짜 */}
          <div className="text-primary-300 text-[90%]">
            {new Date().toISOString().split('T')[0]}
          </div>
        </div>

        {/* 좋아요 */}
        <div className="flex items-center w-1/2 gap-[5%] text-[180%] font-bold">
          <IconLike /> {/*todo : toggle기능 추가*/}
          <span>{postLikeQuant}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
