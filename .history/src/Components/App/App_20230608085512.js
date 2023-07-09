import ReactDOM from "react-dom";
import {BrowserRouter  as Router , Switch, Route, Link} from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Admin from "../Admin/Admin";
import ShowProduct from "../Admin/ShowProduct";
import ApiDataDisplay from "../../tiki";
function App() {
  return (
  //   <Router>
  //   <div>
  //   <div className='header'>
  //     <img className='img' src='https://www.sacvang.com/data/02/logo-banh-kem-07.jpg'></img>
  //     <div className='menu'>
  //       <ul >
  //         <li>
  //             <Link to="/">TRANG CHỦ</Link>
  //         </li>
  //         <li>
  //           <Link to="/Admin">ADMIN</Link>
  //         </li>
  //       </ul>
  //     </div>
  // </div>
  //       <Switch>
  //         <Route  exact path="/" component={ShowProduct } />
  //         {/* <Route index component={ShowProduct } /> */}
  //         <Route path="/Admin" component={Admin} />
  //         {/* <Route path='/Cart' element={<Cart/>}/> */}
  //       </Switch>
  //   </div>
  //   </Router>
  // );
  <ApiDataDisplay />
  )
}

export default App;
