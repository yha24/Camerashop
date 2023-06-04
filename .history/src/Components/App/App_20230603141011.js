import './App.css';
import ShowProduct from './components/Show_product';
import Cart from './Cart';
import Footer from '../Admin/footer';
import Header from '../Header/Header';
import Admin from './components/Admin';
import { Routes,Route} from "react-router-dom";
function App() {
  return (
    <div>
         <Header />
         <Routes>
         <Route path='/' element={<Show/>}/>
         <Route path='/Admin' element={<Admin/>}/>;
            {/* <Route path='/Cart' element={<Cart/>}/> */}
            
         </Routes>
        
    </div>
     
  );
}

export default App;
