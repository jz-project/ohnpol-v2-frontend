import { NavLink } from 'react-router';
import { tm } from '@/utils/tw-merge';
import { OhnpolLogo } from '../OhnpolLogo';
import { useEffect, useState } from 'react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true); // 스크롤이 50px 이상 내리면 블러 처리
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={tm(
        'w-full h-17 py-5 px-5',
        'fixed top-0 bg-neutral-200 z-10',
        'flex justify-center items-center',
        'text-[1.1rem] font-middle',
        'transition-all duration-700 ease-in-out',
        `${isScrolled ? 'backdrop-blur-lg' : 'backdrop-blur-none'}`
      )}
      style={{
        backgroundColor: isScrolled
          ? 'rgba(255, 255, 255, 0.7)'
          : 'transparent',
      }}
    >
      <nav className={tm('flex-1 justify-between items-center')}>
        <ul
          className={tm('flex flex-row justify-between items-center', 'h-full')}
        >
          <li>
            <NavLink to="/main">
              <h2 className="sr-only">메인로고</h2>
              <OhnpolLogo size={42} />
            </NavLink>
          </li>
          <ul className="flex flex-row gap-7">
            <ul className="flex flex-row gap-4">
              <li>
                <NavLink className="nav-menu" to="/editor">
                  편집기
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-menu" to="/community">
                  커뮤니티
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-menu" to="/mypage">
                  마이페이지
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-menu" to="/">
                  로그아웃
                </NavLink>
              </li>
            </ul>
            <li>
              <p>유저프로필</p>
            </li>
          </ul>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
