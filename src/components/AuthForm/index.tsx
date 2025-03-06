import React, { useState } from "react";

interface AuthFormProps {
  type: "login" | "register";
  onSubmit: (user: { nickname?: string; email: string; password: string }) => void;
}

const AuthForm: React.FC<AuthFormProps> = ({ type, onSubmit }) => {
  const [user, setUser] = useState({ nickname: "", email: "", password: "" });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(user);
    console.log(user);
  };
  
  return (
    <div className="p-6 bg-white rounded-lg shadow-md w-96">
      <h2 className="text-2xl font-bold text-center">{type === "login" ? "로그인" : "회원가입"}</h2>
      <form className="mt-4 flex flex-col" onSubmit={handleSubmit}>
        {type === "register" && (
          <input
            type="text"
            name="nickname"
            placeholder="닉네임"
            value={user.nickname}
            onChange={handleChange}
            className="border p-2 rounded mb-2"
          />
        )}
        <input
          type="text"
          name="email"
          placeholder="이메일"
          value={user.email}
          onChange={handleChange}
          className="border p-2 rounded mb-2"
        />
        <input
          type="password"
          name="password"
          placeholder="비밀번호"
          value={user.password}
          onChange={handleChange}
          className="border p-2 rounded mb-4"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600">
          {type === "login" ? "로그인" : "가입하기"}
        </button>
      </form>
    </div>
  );
};

export default AuthForm;