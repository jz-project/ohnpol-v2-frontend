import { useState } from 'react';
import { Link } from 'react-router';
import LoginModal from '@/pages/landing/components/LoginModal';
import JoinModal from '@/pages/landing/components/JoinModal';
import Modal from 'react-modal';

function LandingPage() {
  const [isClickedLogin, setIsClickedLogin] = useState(false);
  const [isClickedJoin, setIsClickedJoin] = useState(false);
  
  const onClickLogin = () => {
    setIsClickedLogin((prev) => !prev);
  };
  const onClickJoin = () => {
    setIsClickedJoin((prev) => !prev);
  };
  // 모달 스타일
  const ModalStyles:ReactModal.Styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0, 0.7)',
      zIndex: 10,
    },
    content: {
      display: 'flex',
      justifyContent: 'center',
      background: 'white',
      overflow: 'auto',
      width: '450px',
      height: '500px',
      margin: 'auto auto',
      WebkitOverflowScrolling: 'touch',
      borderRadius: '15px',
      outline: 'none',
      zIndex: 10,
    },
  };
  return (
    <div className="flex w-full h-screen min-w-[1000px]">
      {/* 왼쪽 */}
      <div className="flex flex-col w-1/2 h-full p-8 bg-blue-600">
        <header className="flex h-20">
          <div className="h-full">
            <img src="/ohnpol_v2.svg" alt="Onpol Logo" className="h-10"/>
          </div>
        </header>
        <div className="flex flex-col items-left justify-center w-full h-full">
          <div className="text-white">
            <h1 className="text-3xl font-bold">랜딩페이지</h1>
            <h1 className="text-2xl font-medium">이곳은 랜딩 페이지입니다.</h1>
            <h1 className="text-2xl font-medium">슬라이드 혹은 애니메이션 형식으로 넘어갑니다.</h1>
          </div>
        </div>
      </div>
      
      {/* 오른쪽 */}
      <div className="flex flex-col w-1/2 h-full p-8">
        <div className="flex flex-col items-center justify-center w-full h-full">
          <div className="text-center">
            <h1 className="text-3xl font-bold">
              나만의 폴꾸에서<br />
              포카 컬렉션, 그리고 최애 자랑까지
            </h1>
            <p className="mt-2 text-gray-600">함께 즐기는 덕질 생활 ‘온폴’</p>
            <div className="mt-6">
              <button
                onClick={onClickLogin}
                className="m-2 px-4 py-2 border border-gray-500 rounded-lg bg-white text-gray-700 hover:brightness-90 active:brightness-75"
              >
                로그인
              </button>
              <Modal
                isOpen={isClickedLogin}
                style={ModalStyles}
                onRequestClose={onClickLogin}
                ariaHideApp={false}
              >
                <LoginModal />
              </Modal>
              <button
                onClick={onClickJoin}
                className="m-2 px-4 py-2 border border-gray-500 rounded-lg bg-white text-gray-700 hover:brightness-90 active:brightness-75"
              >
                회원가입
              </button>
              <Modal
                isOpen={isClickedJoin}
                style={ModalStyles}
                onRequestClose={onClickJoin}
                ariaHideApp={false}
              >
                <JoinModal />
              </Modal>
              
            </div>
            <div className="mt-4">
              {/* 임시 라우팅. 회원가입 구현 후에는 editor로 라우트해야함 */}
              <Link to="/main">
              <button
                className="px-6 py-2 bg-gray-600 text-white rounded-lg"
              >
                로그인 없이 폴꾸하기
              </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;