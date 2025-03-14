type ToggleButtonProps = React.ComponentProps<'button'> & {
  label: string;
  isOff?: boolean;
  onRender?: React.ReactElement;
  offRender?: React.ReactElement;
};

function ToggleButton({
  label,
  isOff = true,
  onRender,
  offRender,
  // className = '',
  ...buttonProps
}: ToggleButtonProps) {
  return (
    <button
      className={`
      flex justify-center items-center
      w-8 h-8 rounded-md border-0 px-0 py-0 bg-transparent
      leading-none
      hover:enabled:bg-black/10
      ${!isOff ? 'bg-sky-300' : ''}
      `}
      {...buttonProps}
    >
      {isOff ? offRender : onRender}
      <span className="sr-only">{label}</span>
    </button>
  );
}

export default ToggleButton;
