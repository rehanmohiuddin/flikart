import React, { FormEvent, useMemo, useRef, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages";
import Cart from "./Pages/Cart";
import Wishlist from "./Pages/Wishlist";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/wishlist" element={<Wishlist />} />
    </Routes>
  );
}

export default App;
