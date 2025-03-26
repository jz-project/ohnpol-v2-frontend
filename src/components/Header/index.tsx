import { NavLink } from 'react-router';
import { tm } from '@/utils/tw-merge';
import { OhnpolLogo } from '../OhnpolLogo';

function Header() {
  return (
    <nav
      className={tm(
        'w-full h-17 py-5 px-7',
        'fixed top-0 bg-neutral-200 z-10',
        'flex-1 justify-between items-center',
        'text-lg font-medium'
      )}
    >
      <ul
        className={tm('flex flex-row justify-between items-center', 'h-full')}
      >
        <li>
          <NavLink to="/main">
            <h2 className="sr-only">메인로고</h2>
            <OhnpolLogo size={38} />
          </NavLink>
        </li>
        <ul className="flex flex-row gap-7">
          <ul className="flex flex-row gap-4">
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
export default Header;
