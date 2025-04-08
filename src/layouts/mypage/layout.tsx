import { NavLink, Outlet } from 'react-router-dom';

function Layout() {
  return (
    <div className="mt-6">
      <nav className="flex gap-8 pb-2 font-bold text-xl">
        <NavLink
          to="posts"
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-black' : 'text-black'
          }
        >
          포스트
        </NavLink>
        <NavLink
          to="collections"
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-black' : 'text-black'
          }
        >
          컬렉션
        </NavLink>
        <NavLink
          to="designs"
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-black' : 'text-black'
          }
        >
          내 도안
        </NavLink>
        <NavLink
          to="likes"
          className={({ isActive }) =>
            isActive ? 'border-b-2 border-black' : 'text-black'
          }
        >
          좋아요
        </NavLink>
      </nav>

      <div className="mt-6">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
