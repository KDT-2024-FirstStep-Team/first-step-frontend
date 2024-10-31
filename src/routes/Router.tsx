import { Routes, Route } from 'react-router-dom';
import Home from '../pages/Home.tsx';
import Consultant from '@/pages/Consultant.tsx';
import Bbu from '@/pages/Bbu.tsx';
import Community from '@/pages/Community.tsx';

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/consultant" element={<Consultant />} />
      <Route path="/question" element={<Bbu />} />
      <Route path="/community" element={<Community />} />
      {/* 추가 라우트 */}
    </Routes>
  );
}

export default Router;
