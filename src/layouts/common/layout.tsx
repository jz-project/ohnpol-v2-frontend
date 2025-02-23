import OhnpolHeader from '@/components/ohnpol-header';
import { Outlet } from 'react-router';

function OhnpolLayout() {
  return (
    <>
      <OhnpolHeader />
      <header className="mx-auto my-10 ">
        <Outlet />
      </header>
    </>
  );
}

export default OhnpolLayout;
