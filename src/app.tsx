import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from '@/layouts/common/layout';
import { lazy, Suspense } from 'react';
import ScrollToTop from '@/layouts/common/scroll-to-top.tsx';

const MainPage = lazy(() => import('@/pages/main/page'));
const LandingPage = lazy(() => import('@/pages/landing/page'));
const CommunityPage = lazy(() => import('@/pages/community/page'));
const AllArtistPage = lazy(() => import('@/pages/all-artist/page'));
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
            <Route path="mypage" element={<div>마이페이지</div>} />
          </Route>
          <Route path="editor" element={<div>편집기</div>} />
        </Routes>
      </BrowserRouter>
    </Suspense>
    //</ErrorBoundary/>
  );
}

export default App;
