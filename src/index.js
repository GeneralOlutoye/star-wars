import { ConfigProvider } from 'antd';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ConfigProvider theme={{ token: { colorPrimary: 'blue' } }}>
      <App />
    </ConfigProvider>
);