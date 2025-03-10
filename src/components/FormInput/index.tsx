import { useId } from 'react';

type FormInputProps = React.ComponentProps<'input'> & {
  hasToggleButton?: boolean;
  hasError?: Error | null;
};

function FormInput({
                     // hasToggleButton = false,
                     hasError,

                     ...inputProps
                   }: FormInputProps) {
  const id = useId();
  const descId = useId();
  

  
  return (
    <>
      <div>
        <input
          id={id}
          aria-describedby={descId}
          {...inputProps}
          className="w-60 h-9 px-4 rounded-full bg-gray-200 border-none"
        />
      {hasError && (
        <p
          id={descId}
          role="alert"
          aria-live="assertive"
          className="text-red-700 font-medium text-[13px] m-1 p-0 pl-4 pl-4 min-h-[10px]"
        >
          {hasError.message}
        </p>
      )}
      </div>
    </>
  );
}

export default FormInput;
