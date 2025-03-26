import { BrowserRouter, Route, Routes } from 'react-router';
import Layout from './layouts/common/layout';
import MainPage from './pages/main/page';
import LandingPage from './pages/landing/page';

function App() {
  return (
    <>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/main" element={<Layout />}>
            <Route index element={<MainPage />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
