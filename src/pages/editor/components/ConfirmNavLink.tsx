// components/ConfirmNavLink.tsx
import { useNavigate } from 'react-router';
import { MouseEvent } from 'react';
import { confirmExit } from '@/utils/confirmExit';

interface ConfirmNavLinkProps {
  to: string;
  children: React.ReactNode;
  className?: string;
}

export default function ConfirmNavLink({
  to,
  children,
  className,
}: ConfirmNavLinkProps) {
  const navigate = useNavigate();

  const handleClick = async (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const ok = await confirmExit(
      '페이지를 나가시겠어요? 변경사항이 저장되지 않을 수 있습니다.'
    );
    if (ok) navigate(to);
  };

  return (
    <a href={to} onClick={handleClick} className={className}>
      {children}
    </a>
  );
}
