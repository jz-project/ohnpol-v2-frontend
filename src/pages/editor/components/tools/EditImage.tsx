import { HorizontalIcon, VerticalIcon, BlackWhiteIcon } from '../Icons';
import RoundButton from './RoundButton';

function EditImage() {
  const topButtons = [
    { label: '좌우대칭', icon: <HorizontalIcon /> },
    { label: '상하대칭', icon: <VerticalIcon /> },
    { label: '흑백', icon: <BlackWhiteIcon /> },
  ];

  return (
    <div>
      <div className="flex justify-center gap-3 items-center">
        {topButtons.map((button) => (
          <RoundButton
            key={button.label}
            onClick={() => console.log(button.label)}
            icon={button.icon}
            label={button.label}
          />
        ))}
      </div>
    </div>
  );
}

export default EditImage;
