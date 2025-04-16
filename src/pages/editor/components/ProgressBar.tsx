interface ProgressBarProps {
  value: number;
  max: number;
  width?: number | string;
  height?: number | string;
  containerColor?: string;
  varColor?: string;
}

function ProgressBar({
  value,
  max,
  width = '100%',
  height = '0.5rem',
  containerColor = 'white',
  varColor = 'var(--primary-color)',
}: ProgressBarProps) {
  const percentage = (value / max) * 100;

  return (
    <div
      className="w-full h-[8px] min-w-[100px] bg-neutral-600 rounded-[10px] overflow-hidden"
      style={{ width: width, height: height, backgroundColor: containerColor }}
    >
      <div
        className="w-full h-full bg-primary-300"
        style={{ width: `${percentage}%`, backgroundColor: varColor }}
      />
    </div>
  );
}

export default ProgressBar;
