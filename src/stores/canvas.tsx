import { create } from 'zustand';
import { combine, devtools, persist } from 'zustand/middleware';

interface CanvasStore {
  canvasWidth: number;
  canvasHeight: number;
  photoCardImage: HTMLImageElement | null;
  photoCardLoaded: boolean;
  photoCardWidth: number;
  photoCardHeight: number;
  photoCardX: number;
  photoCardY: number;
  rotation: number;
  scale: number;
  opacity: number;
  flipX: boolean;
  flipY: boolean;
  blackWhite: boolean;
  saturation: number;
  brightness: number;
  contrast: number;
  frame: string;
}

const initialCanvas = {
  canvasWidth: 0,
  canvasHeight: 0,
  photoCardImage: null as HTMLImageElement | null,
  photoCardLoaded: false,
  photoCardWidth: 55,
  photoCardHeight: 85,
  photoCardX: 0,
  photoCardY: 0,
  rotation: 0,
  scale: 1,
  opacity: 1,
  flipX: false,
  flipY: false,
  blackWhite: false,
  saturation: 1,
  brightness: 1,
  contrast: 1,
  frame: '',
};

export const useCanvasStore = create(
  persist(
    devtools(
      combine(
        {
          canvas: initialCanvas,
        },
        (set) => ({
          setCanvas: (newCanvas: Partial<CanvasStore>) =>
            set((state) => ({
              canvas: { ...state.canvas, ...newCanvas },
            })),
          initCanvas: () => set({ canvas: initialCanvas }),
        })
      )
    ),
    {
      name: 'store/canvas',
      partialize: (state) => ({ canvas: state.canvas }),
    }
  )
);
