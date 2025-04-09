import EditorPageHeader from '@/components/EditorPageHeader';
import Title from '@/layouts/common/title';
import { tm } from '@/utils/tw-merge';
import LeftButtons from './components/LeftButtons';
import ToolBox from './components/ToolBox';
import {
  MoveBackwardIcon,
  MoveToBackIcon,
  MoveToFrontIcon,
  MoveForwardIcon,
} from './components/Icons';
import RoundButton from './components/tools/RoundButton';

function Editor() {
  const bottomButtons = [
    { label: '맨 뒤로', icon: <MoveToBackIcon /> },
    { label: '뒤로', icon: <MoveBackwardIcon /> },
    { label: '앞으로', icon: <MoveForwardIcon /> },
    { label: '맨 앞으로', icon: <MoveToFrontIcon /> },
  ];

  return (
    <div
      className={tm(
        'w-full min-w-[1000px] min-h-screen',
        'bg-neutral-200',
        'flex flex-col items-center',
        'text-neutral-950 text-[17px] font-medium'
      )}
    >
      <Title>편집기</Title>
      <h1 className="sr-only">편집기 페이지</h1>
      <EditorPageHeader />
      <main className={tm('w-full', 'flex flex-1 justify-between', 'py-2')}>
        <section className={tm('flex flex-col itmes-center', 'w-full')}>
          <LeftButtons />

          <div
            className={tm(
              'flex flex-col items-center justify-center gap-3 h-full',
              'py-auto',
              'bg-neutral-50'
            )}
          >
            <div
              className={tm(
                'border-2 border-dashed border-secondary-400',
                'w-full max-w-[40vh] min-w-[220px] min-h-[250px] aspect-[57/87]',
                'mt-15',
                'flex items-center justify-center'
              )}
            >
              포토카드 공간
            </div>
            <div className="editor_bottom-buttons flex gap-3">
              {bottomButtons.map((button) => (
                <RoundButton
                  key={button.label}
                  onClick={() => console.log(button.label)}
                  icon={button.icon}
                  label={button.label}
                />
              ))}
            </div>

            <output>선택된 오브젝트</output>
          </div>
        </section>

        <section className={tm('flex flex-col itmes-center')}>
          <ToolBox />
        </section>
      </main>
    </div>
  );
}

export default Editor;
