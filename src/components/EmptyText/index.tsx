function EmptyText({
  text = '아직 등록된 데이터가 없습니다.',
}: {
  text?: string;
}) {
  return (
    <div className="flex justify-center items-center w-full h-full min-h-20">
      <p className="text-[#242424] font-medium text-[17.5px]">{text}</p>
    </div>
  );
}

export default EmptyText;
