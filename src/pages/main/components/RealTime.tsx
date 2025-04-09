import { posts } from '@/temp/posts.ts';
import { tm } from '@/utils/tw-merge';

function RealTime() {
  return (
    <div
      className={tm(
        'flex flex-row justify-center gap-6',
        'w-full',
        'p-15',
        'bg-neutral-500 rounded-[15px]'
      )}
    >
      {posts.slice(0, 4).map((post) => (
        <div
          key={post.postId}
          className={tm(
            'max-w-[195px] min-w-[75px] aspect-[57/87]',
            'rounded-[15px] overflow-hidden',
            'ring-offset-shadow ring-offset-4 ring-neutral-200 ring-1',
            'transition-all duration-300 ease-in-out',
            'hover:shadow-2xl hover:shadow-neutral-800',
            'hover:brightness-120 hover:scale-102 hover:cursor-pointer'
          )}
        >
          <img
            src={post.image}
            alt="포토카드 이미지"
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  );
}

export default RealTime;
