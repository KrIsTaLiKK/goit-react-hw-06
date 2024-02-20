import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './components/App/App';
import { Provider } from 'react-redux';
import { persistedStore, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
