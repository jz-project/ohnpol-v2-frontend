interface ArtistInfoProps {
  groupName: string;
  fandom: string;
  company: string;
}

function ArtistInfo({ groupName, fandom, company }: ArtistInfoProps) {
  return (
    <div>
      <p className="text-white font-bold text-2xl">{groupName}</p>
      <p className="text-black font-semibold text-sm mt-1">팬덤명 : {fandom}</p>
      <p className="text-black font-semibold text-sm">소속 : {company}</p>
    </div>
  );
}

export default ArtistInfo;
