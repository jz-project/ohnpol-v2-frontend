import { tm } from '@/utils/tw-merge';
import { LoadIcon, SaveIcon, UndoIcon, RedoIcon, DeleteIcon } from './Icons';

function LeftButtons() {
  return (
    <div
      className={tm(
        'w-full',
        'flex justify-between',
        'px-5',
        'editor_left-buttons'
      )}
    >
      <div className="flex gap-3">
        <button type="button">
          <LoadIcon />
          <span>불러오기</span>
        </button>
        <button type="button" disabled={true}>
          <DeleteIcon />
          <span>삭제하기</span>
        </button>
      </div>

      <div className="flex gap-3">
        <button type="button" disabled={true}>
          <UndoIcon />
          <span>뒤로</span>
        </button>
        <button type="button">
          <RedoIcon />
          <span>앞으로</span>
        </button>
        <button type="button">
          <SaveIcon />
          <span>저장하기</span>
        </button>
      </div>
    </div>
  );
}

export default LeftButtons;
