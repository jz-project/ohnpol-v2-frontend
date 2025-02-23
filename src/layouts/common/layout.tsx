import OhnpolHeader from '@/components/ohnpol-header';
import { Outlet } from 'react-router';

function OhnpolLayout() {
  return (
    <>
      <header className="h-fit fixed top-0 left-0 right-0 bg-white">
        <OhnpolHeader />
      </header>
      <div className="flex flex-col bg-blue-300 p-1.5 mt-13">
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
      <Outlet />
    </>
  );
}

export default OhnpolLayout;
