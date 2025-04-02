import { IconEmptyStar, IconStar } from '@/components/IconStar';

interface FavoriteButtonProps {
  isFavorite: boolean;
  favoriteCount: number;
  toggleFavorite: () => void;
}

function FavoriteButton({
  isFavorite,
  favoriteCount,
  toggleFavorite,
}: FavoriteButtonProps) {
  return (
    <div
      className="flex items-center mt-2 text-white font-bold text-lg gap-2"
      onClick={toggleFavorite}
    >
      {isFavorite ? <IconStar /> : <IconEmptyStar />}
      {favoriteCount.toLocaleString()}
    </div>
  );
}

export default FavoriteButton;
