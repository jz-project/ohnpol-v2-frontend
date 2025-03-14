import type { IconProp } from '@/types/icon.ts';

export function IconStar({ size = 18, fill = '#FFFF00' }: IconProp) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22">
      <path
        d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
        fill={fill}
        stroke="#212121"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}

export function IconEmptyStar({ size = 18, fill = 'none' }: IconProp) {
  return (
    <svg width={size} height={size} viewBox="0 0 22 22">
      <path
        d="M11 1L14.09 7.26L21 8.27L16 13.14L17.18 20.02L11 16.77L4.82 20.02L6 13.14L1 8.27L7.91 7.26L11 1Z"
        fill={fill}
        stroke="#212121"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
}
