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
import Filter from "./page/Filter";
import Voucher from "./page/Voucher";
import WishList from "./components/WishList";
import Checkout from "./page/Checkout";
import CheckoutOnline from "./page/CheckoutOnline";
import QRPayment from "./page/QRPayment";
import Transport from "./page/Transport";
import PaySucces from "./page/PaySucces";
import Notification from "./page/Notification";

const App = () => {
  return (
    <div>
      <div className="min-h-screen flex flex-col">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/detail" element={<Detail />} />
          <Route path="/filter" element={<Filter />} />
          <Route path="/voucher" element={<Voucher />} />
          <Route path="/wishlist" element={<WishList />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-online" element={<CheckoutOnline/>} />
          <Route path="/qrpay" element={<QRPayment/>} />
          <Route path="/transport" element={<Transport/>} />
          <Route path="/paysucces" element={<PaySucces/>} />
          <Route path="/notification" element={<Notification/>} />
        </Routes>
      </div>
    </div>
  );
};

export default App;
