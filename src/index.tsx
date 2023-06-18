import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './utils/reportWebVitals';

import Application from './components/Application';

import './scss/index.scss'

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>

		<Application />

	</React.StrictMode>
);


reportWebVitals();
