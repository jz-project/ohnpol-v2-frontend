import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Layout from '@/layouts/common/layout';
import MyPageLayout from '@/layouts/mypage/layout.tsx';
import { lazy, Suspense } from 'react';
import ScrollToTop from '@/layouts/common/scroll-to-top.tsx';
import Posts from '@/pages/my/components/Posts.tsx';
import Collections from '@/pages/my/components/Collections.tsx';
import Designs from '@/pages/my/components/Designs.tsx';
import Likes from '@/pages/my/components/Likes.tsx';

const MainPage = lazy(() => import('@/pages/main/page'));
const LandingPage = lazy(() => import('@/pages/landing/page'));
const CommunityPage = lazy(() => import('@/pages/community/page'));
const AllArtistPage = lazy(() => import('@/pages/all-artist/page'));
const MyPage = lazy(() => import('@/pages/my/page'));
function App() {
  return (
    //<ErrorBoundary FallbackComponent={PrintError}>
    <Suspense fallback={<div role="status">Loading...</div>}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route element={<Layout />}>
            <Route path="main" element={<MainPage />} />
            <Route path="all-artist" element={<AllArtistPage />} />
            <Route
              path="all-artist/community/:artistId"
              element={<CommunityPage />}
            />
            <Route path="mypage" element={<MyPage />}>
              <Route element={<MyPageLayout />}>
                <Route index element={<Navigate to="posts" replace />} />
                <Route path="posts" element={<Posts />} />
                <Route path="collections" element={<Collections />} />
                <Route path="designs" element={<Designs />} />
                <Route path="likes" element={<Likes />} />
              </Route>
            </Route>
          </Route>
          <Route path="editor" element={<div>편집기</div>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
    //</ErrorBoundary/>
  );
}

export default App;
