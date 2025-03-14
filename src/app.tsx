import { BrowserRouter, Route, Routes } from 'react-router';
import OhnpolLayout from './layouts/common/layout';
import MainPage from './pages/main/page';
import LandingPage from './pages/landing/page';
import CommunityPage from '@/pages/community/page.tsx';

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/main" element={<OhnpolLayout />}>
            <Route index Component={MainPage}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
