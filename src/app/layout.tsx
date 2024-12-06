import type { Metadata } from 'next';
import NavBar from './components/NavBar';
import StyledComponentsRegistry from './lib/registry';
import GlobalStyles from './styles/GlobalStyles';

export const metadata: Metadata = {
  title: 'Vite App',
  description: 'Vite App is a...',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          rel="stylesheet"
        />
      </head>
      <body className="app-container">
        <StyledComponentsRegistry>
          <GlobalStyles />
          <NavBar />
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
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
