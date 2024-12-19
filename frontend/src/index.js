import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
//import  'bootstrap/dist/css/bootstrap.min.css';
import {
  Route,Routes,BrowserRouter as Router
} from 'react-router-dom';
import HomeScreen  from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
      <Route path='/' element={<App />} >
      <Route index={true} path='/' element={<HomeScreen />} />
      <Route path='/product/:id' element={<ProductScreen />} />
    </Route>
    </Routes>
    </Router>
    
    
  </React.StrictMode>
);


reportWebVitals();
