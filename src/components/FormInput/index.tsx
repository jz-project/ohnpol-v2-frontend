import React, { useId, useState } from 'react';
import { IconEyeOff, IconEyeOn } from '@/components/IconEye';
import ToggleButton from '@/components/ToggleButton';

type FormInputProps = React.ComponentProps<'input'> & {
  hasToggleButton?: boolean;
  hasError?: Error | null;
};

function FormInput({
  hasToggleButton = false,
  hasError,
  type = 'text',
  ...inputProps
}: FormInputProps) {
  const id = useId();
  const descId = useId();

  const [isOff, setIsOff] = useState(true);

  const handleToggle = () => {
    setIsOff((isOff) => !isOff);
  };
  const inputType = type === 'password' && !isOff ? 'text' : type;

  const buttonLabel = `패스워드 ${isOff ? '표시' : '감춤'}`;

  return (
    <>
      <div>
        <div className="flex">
          <input
            id={id}
            type={inputType}
            aria-describedby={descId}
            {...inputProps}
            className="w-60 h-9 px-4 rounded-full bg-gray-200 border-none"
          />
          {hasToggleButton && (
            <ToggleButton
              type="button"
              label={buttonLabel}
              title={buttonLabel}
              offRender={<IconEyeOff />}
              onRender={<IconEyeOn />}
              isOff={isOff}
              onClick={handleToggle}
              className="p-1"
            />
          )}
        </div>
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
