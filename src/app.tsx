import { BrowserRouter, Route, Routes } from 'react-router';
import OhnpolLayout from './layouts/common/layout';
import MainPage from './pages/main/page';

function App() {
  return (
    <>
      <div className="flex flex-col bg-blue-300 p-1.5">
        <h1 className="text-2xl">당신의 폴꾸 온폴 - 임시 네비게이션</h1>
        <ul>
          <li>
            <a href="/main" className="">
              메인페이지
            </a>
          </li>
          <li>
            <a href="/">랜딩페이지</a>
          </li>
        </ul>
      </div>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/main" element={<OhnpolLayout />}>
            <Route index Component={MainPage}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
