import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from '@/layouts/common/layout';
import { lazy, Suspense } from 'react';

const MainPage = lazy(() => import('@/pages/main/page'));
const LandingPage = lazy(() => import('@/pages/landing/page'));
const CommunityPage = lazy(() => import('@/pages/community/page'));
function App() {
  return (
    //<ErrorBoundary FallbackComponent={PrintError}>
    <Suspense fallback={<div role="status">Loading...</div>}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/community" element={<Layout />}>
            <Route index element={<CommunityPage />}></Route>
          </Route>
          <Route path="/main" element={<Layout />}>
            <Route index element={<MainPage />}></Route>
            <Route path="community" element={<div>커뮤니티</div>} />
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
