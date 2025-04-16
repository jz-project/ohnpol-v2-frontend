import { useCanvasImageSize } from '@/hooks/useCanvasImageSize';
import { useCanvasStore } from '@/stores/canvas';
import { calculateCanvasImageSize } from '@/utils/calculateCanvasImageSize';
import type Konva from 'konva';
import { useEffect, useRef } from 'react';
import { Image, Layer, Stage } from 'react-konva';

function Canvas() {
  const containerRef = useRef<HTMLDivElement | null>(null);

  const {
    photoCardImage,
    canvasWidth,
    canvasHeight,
    photoCardX: photoCardImageX,
    photoCardY: photoCardImageY,
  } = useCanvasStore((state) => state.canvas);

  const setCanvas = useCanvasStore((state) => state.setCanvas);

  useCanvasImageSize(
    photoCardImage,
    containerRef as React.RefObject<HTMLDivElement>
  );

  useEffect(() => {
    if (!containerRef.current) return;
    const { width, height } = containerRef.current.getBoundingClientRect();

    if (!photoCardImage) return;
    const { newWidth, newHeight } = calculateCanvasImageSize(
      photoCardImage,
      width,
      height
    );

    // 이미지 크기 설정
    if (photoCardImage instanceof HTMLImageElement) {
      // 중앙 위치 계산
      const x = -(newWidth - width) / 2;
      const y = -(height - newHeight) / 2;

      setCanvas({
        photoCardX: x,
        photoCardY: y,
      });
    }

    // 무한 루프 방지
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [photoCardImage]);

  // 리사이즈 이벤트 핸들러

  const handleDragEnd = (e: Konva.KonvaEventObject<DragEvent>) => {
    const { x, y } = e.target.attrs;
    setCanvas({
      photoCardX: x,
      photoCardY: y,
    });

    console.log(photoCardImageX, photoCardImageY);
  };

  return (
    <div ref={containerRef} className="w-full h-full">
      {photoCardImage instanceof HTMLImageElement && photoCardImage.complete ? (
        <Stage width={canvasWidth} height={canvasHeight}>
          <Layer>
            <Image
              image={photoCardImage}
              x={photoCardImageX}
              y={photoCardImageY}
              draggable
              dragBoundFunc={(pos) => {
                if (!photoCardImage) return pos;

                const isLandscape =
                  photoCardImage.naturalWidth >= photoCardImage.naturalHeight;

                const imageWidth = photoCardImage.width;
                const imageHeight = photoCardImage.height;

                const maxX = 0;
                const minX = canvasWidth - imageWidth;

                const maxY = 0;
                const minY = canvasHeight - imageHeight;

                const boundedX = Math.min(maxX, Math.max(minX, pos.x));
                const boundedY = Math.min(maxY, Math.max(minY, pos.y));

                return isLandscape
                  ? { x: boundedX, y: photoCardImageY } // 세로 고정, 가로 제한
                  : { x: photoCardImageX, y: boundedY }; // 가로 고정, 세로 제한
              }}
              onDragEnd={handleDragEnd}
            />
          </Layer>
        </Stage>
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-500">
          포토카드 이미지 55x85
        </div>
      )}
    </div>
  );
}

export default Canvas;
