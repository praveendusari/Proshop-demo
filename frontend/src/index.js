import React from 'react';
import ReactDOM from 'react-dom/client';
//import 'bootstrap/dist/css/bootstrap.min.css';
import {createBrowserRouter,createRoutesFromElements,Route, RouterProvider} from 'react-router-dom';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HomeScreen } from './components/screens/HomeScreen';
const routes = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} >
      <Route index={true} path="/" element={<HomeScreen />} />
    </Route>
  )
)
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={routes}>
      </RouterProvider>
  </React.StrictMode>
);


reportWebVitals();
