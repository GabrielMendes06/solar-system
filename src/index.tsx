import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { SolarSystemProvider } from './components/CompContext/InfSolarSystem';
import { DwarfPlanetsProvider } from './components/CompContext/infDwarfPlanets';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <SolarSystemProvider>
      <DwarfPlanetsProvider>
        <App />
      </DwarfPlanetsProvider>
    </SolarSystemProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
