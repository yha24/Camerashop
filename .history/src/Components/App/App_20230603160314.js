import ReactDOM from "react-dom/client";
import {BrowserRouter  as Router , Switch, Route} from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Admin from "../Admin/Admin";
import ShowProduct from "../Admin/ShowProduct";
function App() {
  return (
    <Router>
    <div>
      <Header />
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
