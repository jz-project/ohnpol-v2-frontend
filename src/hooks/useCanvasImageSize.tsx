import { useEffect } from 'react';
import { useCanvasStore } from '@/stores/canvas';
import { calculateCanvasImageSize } from '@/utils/calculateCanvasImageSize';

export const useCanvasImageSize = (
  image: HTMLImageElement | null,
  containerRef: React.RefObject<HTMLDivElement>
) => {
  const setCanvas = useCanvasStore((state) => state.setCanvas);

  const updateImageSize = () => {
    if (!image || !containerRef.current) return;

    const { width, height } = containerRef.current.getBoundingClientRect();

    const { newWidth, newHeight } = calculateCanvasImageSize(
      image,
      width,
      height
    );

    setCanvas({
      canvasWidth: width,
      canvasHeight: height,
      photoCardWidth: newWidth,
      photoCardHeight: newHeight,
    });

    image.width = newWidth;
    image.height = newHeight;
  };

  useEffect(() => {
    updateImageSize(); // 초기 계산

    const handleResize = () => {
      updateImageSize();
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [image, containerRef]); // deps에 image 바뀌면 다시 계산

  return null; // 필요하면 나중에 사이즈 반환해도 됨
};
