import { tm } from '@/utils/tw-merge';
import ToolNav from './ToolNav';
import { useEffect, useState } from 'react';
import EditImage from './tools/EditImage';
import Paint from './tools/Paint';
import TextTool from './tools/Text';
import Sticker from './tools/Sticker';
import Frame from './tools/Frame';

function ToolBox() {
  const tools = [
    { label: '이미지', element: <EditImage /> },
    { label: '그리기', element: <Paint /> },
    { label: '텍스트', element: <TextTool /> },
    { label: '스티커', element: <Sticker /> },
    { label: '프레임', element: <Frame /> },
  ];

  const [nowMenu, setNowMenu] = useState('이미지');

  useEffect(() => {
    console.log('현재 메뉴:', nowMenu);
  }, [nowMenu]);

  return (
    <>
      <ToolNav nowMenu={nowMenu} setNowMenu={setNowMenu} />
      <div className={tm('bg-neutral-50', 'w-full', 'flex flex-1', 'p-3')}>
        {tools.map((tool) => {
          if (tool.label === nowMenu) {
            return (
              <div
                key={tool.label}
                className={tm('flex flex-col', 'w-full py-10 px-3')}
              >
                {tool.element}
              </div>
            );
          }
          return null;
        })}
      </div>
    </>
  );
}

export default ToolBox;
