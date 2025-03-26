import { BrowserRouter, Route, Routes } from 'react-router';
import OhnpolLayout from '@/layouts/common/layout';
import { lazy, Suspense } from 'react';

const MainPage = lazy(() => import('@/pages/main/page'));
const LandingPage = lazy(() => import('@/pages/landing/page'));

function App() {
  return (
    //<ErrorBoundary FallbackComponent={PrintError}>
    <Suspense fallback={<div role="status">Loading...</div>}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main" element={<OhnpolLayout />}>
            <Route index element={<MainPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
    //</ErrorBoundary/>
  );
}

export default App;
