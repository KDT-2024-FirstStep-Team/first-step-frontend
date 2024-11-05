import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import Bbu from '@/pages/Bbu.tsx';
import Community from '@/pages/Community.tsx';
import Mypage from '@/pages/Mypage.tsx';
import Notification from '@/pages/Notification.tsx';
import Search from '@/pages/Search.tsx';
import Analysis from '@/pages/Analysis.tsx';
import SelectLogin from '@/pages/SelectLogin.tsx';
import Login from '@/pages/Login.tsx';
import SignUp from '@/pages/SignUp.tsx';
import Password from '@/pages/Password.tsx';
import Counselor from '@/pages/Counselor.tsx';
import CounselorChatBot from '@/pages/CounselorChatBot.tsx';
import UserGuide from '@/pages/UserGuide.tsx';
import Buy from '@/pages/Buy.tsx';
import MyHeart from '@/pages/MyHeart.tsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/counselor" element={<Counselor />} />
      <Route path="/question" element={<Bbu />} />
      <Route path="/community" element={<Community />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/counselor-chatbot" element={<CounselorChatBot />} />
      <Route path="/search" element={<Search />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/select-login" element={<SelectLogin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/password" element={<Password />} />
      <Route path="/user-guide" element={<UserGuide />} />
      <Route path="/buy" element={<Buy />} />
      <Route path="/myheart" element={<MyHeart />} />
      {/* 추가 라우트 */}
    </Routes>
  );
}

export default Router;
