import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";

import reportWebVitals from './utils/reportWebVitals';

// components
import Application from './components/Application';

// scss
import '../src/scss/index.scss'



const root = createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<StrictMode>
		<BrowserRouter>
			<Application />
		</BrowserRouter>
	</StrictMode>
);


reportWebVitals();
