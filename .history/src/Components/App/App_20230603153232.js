import { Routes, Router} from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import Admin from "../Admin/Admin";
import ShowProduct from "../Admin/ShowProduct";
function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<ShowProduct />} />
        <Route path="/Admin" element={<Admin />} />;
        {/* <Route path='/Cart' element={<Cart/>}/> */}
      </Routes>
    </div>
  );
}

export default App;
