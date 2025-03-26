import { tm } from '@/utils/tw-merge';

function Footer() {
  return (
    <footer
      className={tm(
        'w-full text-neutral-100 py-4 text-center',
        'bg-neutral-800'
      )}
    >
      <p>&copy; 2025 - All rights reserved</p>
    </footer>
  );
}

export default Footer;
