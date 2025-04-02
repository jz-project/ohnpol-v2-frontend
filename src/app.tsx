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
          <Route path="/onboarding" element={<LandingPage />} />
          <Route element={<Layout />}>
            <Route path="/" element={<MainPage />} />
            <Route path="community" element={<CommunityPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
    //</ErrorBoundary/>
  );
}

export default App;
