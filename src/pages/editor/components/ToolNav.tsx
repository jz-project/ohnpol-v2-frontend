import { tm } from '@/utils/tw-merge';
import {
  EditImageIcon,
  EditTextIcon,
  FrameIcon,
  PaintIcon,
  StickerIcon,
} from './Icons';

function ToolNav({
  nowMenu,
  setNowMenu,
}: {
  nowMenu: string;
  setNowMenu: React.Dispatch<React.SetStateAction<string>>;
}) {
  const menus = [
    { icon: <EditImageIcon />, label: '이미지' },
    { icon: <PaintIcon />, label: '그리기' },
    { icon: <EditTextIcon />, label: '텍스트' },
    { icon: <StickerIcon />, label: '스티커' },
    { icon: <FrameIcon />, label: '프레임' },
  ];

  const handleMenuClick = (label: string) => {
    const prevMenu = nowMenu;
    if (prevMenu === label) return;
    setNowMenu(label);
  };

  return (
    <nav className={tm('flex items-center px-2', 'editor_right-buttons')}>
      <ul className="flex justify-evenly">
        {menus.map((menu) => (
          <li key={menu.label}>
            <button
              className={
                menu.label === nowMenu
                  ? 'bg-neutral-50 text-neutral-950 '
                  : 'text-neutral-600 hover:text-primary-300 bg-secondary-100 hover:bg-neutral-100'
              }
              onClick={() => handleMenuClick(menu.label)}
            >
              {menu.icon}
              <span>{menu.label}</span>
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default ToolNav;
