import ReactDOM from "react-dom";
import {BrowserRouter  as Router , Switch, Route} from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Admin from "../Admin/Admin";
import ShowProduct from "../Admin/ShowProduct";
function App() {
  return (
    <Router>
    <div>
    <div className='header'>
        <img className='img' src='https://www.sacvang.com/data/02/logo-banh-kem-07.jpg'></img>
        <div className='menu'>
          <ul >
            <li>
                <a href="/">TRANG CHỦ</a>
            </li>
            <li>
              <a href="/Admin">ADMIN</a>
            </li>
          </ul>
        </div>
    </div>
        <Switch>
          <Route  exact path="/" component={ShowProduct } />
          {/* <Route index component={ShowProduct } /> */}
          <Route path="/Admin" component={Admin} />
          {/* <Route path='/Cart' element={<Cart/>}/> */}
        </Switch>
    </div>
    </Router>
  );
}

export default App;
