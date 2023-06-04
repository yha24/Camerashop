import './App.css';
import Show from './components/Show_product';
import Cart from './Cart';
import Header from '.';
import Footer from '../Admin/footer';
import Admin from './components/Admin';
import { Routes,Route} from "react-router-dom";
function App() {
  return (
    <div>
         <Header/>
         <Routes>
         <Route path='/' element={<Show/>}/>
         <Route path='/Admin' element={<Admin/>}/>;
            {/* <Route path='/Cart' element={<Cart/>}/> */}
            
         </Routes>
        
    </div>
     
  );
}

export default App;
