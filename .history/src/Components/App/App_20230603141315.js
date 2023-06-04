import "./App.css";
import Header from "../Header/Header";
import Admin from "./;
import ShowProduct from "./components/Admin/ShowProduct";

import { Routes, Route } from "react-router-dom";
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
