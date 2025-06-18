import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Home from "./page/Home";
import Cart from "./page/Cart";
import Detail from "./page/Detail";

const App = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail" element={<Detail />} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
