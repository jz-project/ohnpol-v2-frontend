import React, { useState } from "react";
import { useNavigate } from 'react-router';
import { isEmail, isPassword } from '@/utils/validator';
import FormInput from '@/components/FormInput';


interface LoginFormData {
  email: string;
  password: string;
}
type LoginError = Record<keyof LoginFormData, Error | null>;

interface EventData {
  name: keyof LoginFormData;
  value: string;
}

interface LoginModalProps {
  closeModal: () => void;
}

const LoginModal: React.FC<LoginModalProps> = ( { closeModal } ) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<LoginFormData>({
    email: '',
    password: '',
  })
  const [error, setError] = useState<LoginError>({
    email: null,
    password: null,
  });
  
  const isAllInputted = formData.email.length > 0 && formData.password.length > 0;
  const isAllValid = Object.values(error).every((e) => e === null);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget as EventData;
    
    switch (name) {
      case 'email': {
        setError((error) => ({
          ...error,
          email: !isEmail(value)
            ? new Error('올바른 이메일 형식을 입력하세요.')
            : null,
        }));
        break;
      }
      case 'password': {
        setError((error) => ({
          ...error,
          password: !isPassword(value, {min: 6})
            ? new Error('숫자, 영문 조합 6자리 이상 입력하세요.')
            : null,
        }));
        break;
      }
    }
    
    const nextFormData = {
      ...formData,
      [name]: value,
    };
    
    setFormData(nextFormData);
  };
  
  const handleLogin = async (formData: FormData) => {
    if (!isAllInputted) return;
    if (!isAllValid) {
      alert("입력 내용을 다시 한 번 확인해주세요.")
    }
    console.log("로그인 요청:", formData);
    alert("로그인 성공!");// todo: 실제 API 연결 시에 api요청.
    navigate('/main'); // todo : 요청 성공할 시 라우팅
    closeModal();
  };
  
  return (
    <div className="flex items-center justify-center">
      <div className="p-8 bg-white rounded-lg text-center">
        {/* 제목 */}
        <div className="mb-6 p-4">
          <p className="text-gray-600 pb-3">함께 즐기는 덕질 생활 '온폴'</p>
          <h1 className="text-3xl font-bold">로그인</h1>
        </div>
        
        {/* 로그인 폼 */}
        <form action={handleLogin} className="flex flex-col item-center justify-center gap-6 w-full">
          <FormInput
            type="email"
            name="email"
            placeholder="이메일"
            value={formData.email}
            onChange={handleChange}
            hasError={error.email}
          />
          <FormInput
            type="password"
            name="password"
            placeholder="비밀번호"
            value={formData.password}
            onChange={handleChange}
            hasError={error.password}
            hasToggleButton 
          />
          <div className="flex justify-center mt-4">
            <button
              type="submit"
              disabled={!isAllInputted || !isAllValid}
              className="w-18 h-9 bg-blue-600 text-white rounded-full mt-4 hover:brightness-80 disabled:opacity-50 cursor-not-allowed"
            >
              로그인
            </button>
          </div>
        </form>
      </div>
    </div>
)
  
  
};

export default LoginModal;