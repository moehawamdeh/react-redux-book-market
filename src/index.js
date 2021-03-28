import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from './app/store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css';
import { LanguageProvider } from './features/MultiLang/LanguageProvider';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
        <LanguageProvider>
        <BrowserRouter>
          <App />
          </BrowserRouter>
        </LanguageProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
