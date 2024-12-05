import cardBanner from '../public/card-banner-bg.png';

export default function App() {
  return <img src={cardBanner.src} />;
}

// import { useLocation } from 'react-router-dom';
// import Router from './routes/Router';
// import NavBar from './components/NavBar';

// const App = () => {
//   const location = useLocation();
//   const hideNavPaths = [
//     '/select-login',
//     '/consultant-chatbot',
//     '/login',
//     '/signup',
//     '/notification',
//     '/mypage',
//     '/password',
//     '/buy',
//     '/myheart',
//     '/mypage',
//     '/counselor-chatbot'
//   ]; // 네비바 숨길 경로 추가

//   return (
//     <>
//       {!hideNavPaths.includes(location.pathname) && <NavBar />}

//       <div className="app-container">
//         <Router></Router>
//       </div>
//     </>
//   );
// };

// export default App;
