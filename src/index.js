import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { BrowserRouter as Router} from 'react-router-dom';
import App from './App';
import { HashRouter } from 'react-router-dom'

 const root = createRoot(document.getElementById('root'));
root.render(
<HashRouter>
    <App />
    </HashRouter>
    );