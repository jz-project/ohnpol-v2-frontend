import { NavLink } from 'react-router';
import { tm } from '@/utils/tw-merge';
import { OhnpolLogo } from '../ohnpol-logo';

function OhnpolHeader() {
  return (
    <nav>
      <h2 className="sr-only">헤더와 메뉴</h2>
      <ul
        className={tm(
          'flex flex-row justify-between items-center',
          'py-3 px-3',
          'text-xm font-medium'
        )}
      >
        <li>
          <NavLink to="/main">
            <h2 className="sr-only">메인로고</h2>
            <OhnpolLogo size={30} />
          </NavLink>
        </li>
        <ul className="flex flex-row gap-7">
          <ul className="flex flex-row gap-3">
            <li>
              <NavLink to="/editor">편집기</NavLink>
            </li>
            <li>
              <NavLink to="/community">커뮤니티</NavLink>
            </li>
            <li>
              <NavLink to="/mypage">마이페이지</NavLink>
            </li>
            <li>
              <NavLink to="/">로그아웃</NavLink>
            </li>
          </ul>
          <li>
            <p>유저프로필</p>
          </li>
        </ul>
      </ul>
    </nav>
  );
}
export default OhnpolHeader;
