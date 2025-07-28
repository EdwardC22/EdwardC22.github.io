import React from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import { store } from './store';
import './styles/globals.css';
import './i18n';

const container = document.getElementById('app');
const root = createRoot(container!);
root.render(
    <Provider store={store}>
        <App />
    </Provider>
);