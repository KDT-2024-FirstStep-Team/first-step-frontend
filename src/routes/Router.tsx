import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import Consultant from '@/pages/Consultant.tsx';
import Bbu from '@/pages/Bbu.tsx';
import Community from '@/pages/Community.tsx';
import Mypage from '@/pages/Mypage.tsx';
import Notification from '@/pages/Notification.tsx';
import ConsultantChatBot from '@/pages/ConsultantChatBot.tsx';
import Search from '@/pages/Search.tsx';
import Analysis from '@/pages/Analysis.tsx';
import SelectLogin from '@/pages/SelectLogin.tsx';
import Login from '@/pages/Login.tsx';
import SignUp from '@/pages/SignUp.tsx';
import Password from '@/pages/Password.tsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consultant" element={<Consultant />} />
      <Route path="/question" element={<Bbu />} />
      <Route path="/community" element={<Community />} />
      <Route path="/mypage" element={<Mypage />} />
      <Route path="/notification" element={<Notification />} />
      <Route path="/consultant-chatbot" element={<ConsultantChatBot />} />
      <Route path="/search" element={<Search />} />
      <Route path="/analysis" element={<Analysis />} />
      <Route path="/select-login" element={<SelectLogin />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/password" element={<Password />} />
      {/* 추가 라우트 */}
    </Routes>
  );
}

export default Router;
