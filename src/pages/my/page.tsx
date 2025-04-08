import { Outlet } from 'react-router-dom';
import UserProfile from '@/pages/my/components/UserProfile.tsx';

// const tabs = [
//   { label: '포스트', path: 'posts' },
//   { label: '컬렉션', path: 'collections' },
//   { label: '내 도안', path: 'designs' },
//   { label: '좋아요', path: 'likes' },
// ];

function MyPage() {
  return (
    <div className="w-full">
      <UserProfile />
      <div className="px-6 mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default MyPage;
