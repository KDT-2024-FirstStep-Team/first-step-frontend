import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { BrowserRouter, useLocation } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import NavBar from './components/NavBar.tsx';

const Root = () => {
  const location = useLocation();
  const hideNavPaths = [
    '/select-login',
    '/consultant-chatbot',
    '/login',
    '/signup',
    '/notification',
    '/mypage',
    '/password',
  ]; // 네비바 숨길 경로 추가

  return (
    <>
      {!hideNavPaths.includes(location.pathname) && <NavBar />}
      <App />
    </>
  );
};

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Root />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
