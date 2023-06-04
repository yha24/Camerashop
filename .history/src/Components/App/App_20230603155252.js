import ReactDOM from "react-dom/client";
import {BrowserRouter as Switch, Route} from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Admin from "../Admin/Admin";
import ShowProduct from "../Admin/ShowProduct";
function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
      <Sw>
        <Route path="/" element={<ShowProduct />} />
        <Route index element={<ShowProduct />} />
        <Route path="/Admin" element={<Admin />} />;
        {/* <Route path='/Cart' element={<Cart/>}/> */}
      </Sw>
      </BrowserRouter>
    </div>
  );
}

export default App;