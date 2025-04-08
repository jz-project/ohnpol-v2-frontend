function UserProfile() {
  return (
    <section className="w-full bg-primary-300 text-white p-7 flex items-center gap-4">
      <div className="w-20 h-20 bg-gray-200 rounded-full" />
      <div>
        <h1 className="text-xl font-bold">닉네임</h1>
        <p className="text-sm">자기소개</p>
      </div>
    </section>
  );
}

export default UserProfile;
