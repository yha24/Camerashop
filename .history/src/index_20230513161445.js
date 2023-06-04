import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
// import Header from './Components/Header/Header';
// import Footer from './Components/Footer/Footer';
import App from './Components/App/App';
// import reportWebVitals from './reportWebVitals';
// import From from './Components/Form/Form';
// import DrinkMenu from './Components/body/DrinkMenu';
// import RightContent from './components/Content/RightContent';



// ReactDOM.render(<App />, document.getElementById('root'))
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  <React.StrictMode>
     {/* <Header></Header> */}
     <BrowserRouter>
      <App></App>
     </BrowserRouter>
   
    {/* <From></From>
    <Footer></Footer> */}
    {/* <DrinkMenu></DrinkMenu> */}


  //</React.StrictMode>//đóng react




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();