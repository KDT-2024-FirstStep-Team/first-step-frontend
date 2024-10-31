import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import NavBar from './components/NavBar.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <App />
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
