import { useCanvasStore } from '@/stores/canvas';
import { tm } from '@/utils/tw-merge';
import { useEffect } from 'react';
import { DeleteIcon, LoadIcon, RedoIcon, SaveIcon, UndoIcon } from './Icons';

function LeftButtons() {
  const photoCardLoaded = useCanvasStore(
    (state) => state.canvas.photoCardLoaded
  );

  const handleLoadImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const url = URL.createObjectURL(file);
      const image = new Image();
      image.src = url;
      image.onload = () => {
        const setCanvas = useCanvasStore.getState().setCanvas;
        setCanvas({
          photoCardImage: image,
          photoCardLoaded: true,
        });
        URL.revokeObjectURL(url); // 메모리 해제
        console.log(useCanvasStore.getState().canvas);
      };
    }
  };

  const handleDeleteImage = () => {
    const emptyCanvas = useCanvasStore.getState().initCanvas;

    emptyCanvas();
    console.log(useCanvasStore.getState().canvas);
    console.log('Image deleted');
    // 파일 인풋 비워주기
    const fileInput = document.getElementById('file') as HTMLInputElement;
    if (fileInput) {
      fileInput.value = '';
    }
  };

  useEffect(() => {
    console.log('Photo card loaded:', photoCardLoaded);
  }, [photoCardLoaded]);

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
        <input
          id="file"
          type="file"
          accept="image/*"
          onChange={handleLoadImage}
          className="hidden"
        />
        <label htmlFor="file">
          <LoadIcon />
          <span>불러오기</span>
        </label>
        <button
          type="button"
          disabled={!photoCardLoaded}
          onClick={handleDeleteImage}
        >
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
