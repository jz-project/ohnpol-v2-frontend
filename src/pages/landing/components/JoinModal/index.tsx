import React, { useState } from "react";
import { isEmail, isPassword } from "@/utils/validator";


interface JoinFormData {
  nickname: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

type JoinError = Record<keyof JoinFormData, Error | null>;

interface EventData {
  name: keyof JoinFormData;
  value: string;
}

const JoinModal: React.FC = () => {
  const [formData, setFormData] = useState<JoinFormData>({
    nickname: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });
  
  const [error, setError] = useState<JoinError>({
    nickname: null,
    email: null,
    password: null,
    passwordConfirm: null,
  });
  
  const isAllInputted = Object.values(formData).every(Boolean);
  const isAllValid = Object.values(error).every((e) => e === null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget as EventData;
    
    switch (name) {
      case 'nickname': {
        const valueLength = value.trim().length;
        setError((error) => ({
          ...error,
          username:
            valueLength < 2
              ? new Error('닉네임은 2글자 이상입력해야 합니다.')
              : null,
        }));
        break;
      }
      case 'email': {
        setError((error) => ({
          ...error,
          email: !isEmail(value.trim())
            ? new Error('올바른 이메일 형식을 입력하세요.')
            : null,
        }));
        break;
      }
      case 'password': {
        setError((error) => ({
          ...error,
          password: !isPassword(value.trim(), {min: 6})
            ? new Error('숫자, 영문 조합 6자리 이상 입력하세요.')
            : null,
        }));
        break;
      }
      case 'passwordConfirm': {
        setError((error) => ({
          ...error,
          passwordConfirm:
            formData.password !== value.trim()
              ? new Error('입력한 패스워드와 동일하게 입력해야 합니다.')
              : null,
        }));
      }
    }
    
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  
  const handleRegister = async (formData: FormData) => {
    if (!isAllInputted) return;
    if (!isAllValid) {
      alert("입력 내용을 다시 확인해주세요.");
    }
    console.log("회원가입 요청:", formData);
    return alert("회원가입 성공!");
  };
  
  return (
    <div className="flex items-center justify-center">
      <div className="p-8 bg-white rounded-lg text-center">
        {/* 제목 */}
        <div className="mb-6 p-4">
          <p className="text-gray-600 pb-3">함께 즐기는 덕질 생활 '온폴'</p>
          <h1 className="text-3xl font-bold">회원가입</h1>
        </div>
        
        {/* 회원가입 폼 */}
        <form action={handleRegister} className="flex flex-col gap-4 w-full">
          <input
            type="text"
            name="nickname"
            placeholder="닉네임"
            value={formData.nickname}
            onChange={handleChange}
            className="w-60 h-9 px-4 rounded-full bg-gray-200 border-none"
          />
          
          <input
            type="text"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
            className="w-60 h-9 px-4 rounded-full bg-gray-200 border-none"
          />
          
          <input
            type="password"
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
            className="w-60 h-9 px-4 rounded-full bg-gray-200 border-none"
          />
          
          <input
            type="password"
            name="passwordConfirm"
            placeholder="비밀번호 확인"
            value={formData.passwordConfirm}
            onChange={handleChange}
            className="w-60 h-9 px-4 rounded-full bg-gray-200 border-none"
          />
          
          {/* 가입하기 버튼 */}
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              disabled={!isAllInputted || !isAllValid}
              className="w-24 h-10 bg-blue-600 text-white rounded-full hover:brightness-90 disabled:opacity-50"
            >
              가입하기
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JoinModal;