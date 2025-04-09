import { tm } from '@/utils/tw-merge';
import { OhnpolLogo } from '../OhnpolLogo';
import ConfirmNavLink from '@/pages/editor/components/ConfirmNavLink';
import { useState } from 'react';

function EditorPageHeader() {
  const [isLoggedIn] = useState();

  return (
    <header
      className={tm(
        'w-full h-fit py-2 px-5',
        'bg-neutral-50 z-10',
        'flex justify-center items-center',
        'text-[1rem] font-middle',
        'border-b-1 border-b-gray-200'
      )}
    >
      <nav className={tm('flex-1 justify-between items-center')}>
        <ul
          className={tm('flex flex-row justify-between items-center', 'h-full')}
        >
          <li>
            <ConfirmNavLink to="/">
              <h2 className="sr-only">메인로고</h2>
              <OhnpolLogo size={38} />
            </ConfirmNavLink>
          </li>
          {isLoggedIn ? (
            <ul className="flex flex-row gap-7">
              <ul className="flex flex-row gap-4">
                <li>
                  <ConfirmNavLink className="nav-menu" to="/editor">
                    편집기
                  </ConfirmNavLink>
                </li>
                <li>
                  <ConfirmNavLink className="nav-menu" to="/main/community">
                    커뮤니티
                  </ConfirmNavLink>
                </li>
                <li>
                  <ConfirmNavLink className="nav-menu" to="/main/mypage">
                    마이페이지
                  </ConfirmNavLink>
                </li>
                <li>
                  <ConfirmNavLink className="nav-menu" to="/">
                    로그아웃
                  </ConfirmNavLink>
                </li>
              </ul>
              <li>
                <p>유저프로필</p>
              </li>
            </ul>
          ) : (
            <li>
              <button
                type="button"
                className={tm(
                  // 명도 대비 접근성을 고려해 텍스트 색상 검정색으로 변경
                  'bg-primary-300 text-neutral-950',
                  'rounded-full py-2 px-4',
                  'hover:bg-primary-100 active:bg-primary-300'
                )}
              >
                회원가입하기
              </button>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
}
export default EditorPageHeader;
