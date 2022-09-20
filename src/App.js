import { calculateTotal } from "./features/cart/cartSlice";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Checkout from "./pages/Checkout-page";
import Earphones from "./pages/Earphones-category-page";
import Error404 from "./pages/Error404-page";
import Headphones from "./pages/Headphones-category-page";
import Home from "./pages/Homepage";
import NavigationBar from "./components/navigation/NavigationBar";
import products from "./data.json";
import SignIn from "./pages/Authentication-page";
import Speakers from "./pages/Speakers-category-page";
import EarphoneItem from "./components/categories-component/earphones-category-component/EarphoneItem";
import HeadphoneItem from "./components/categories-component/headphones-category-component/HeadphoneItem";
import SpeakerItem from "./components/categories-component/speakers-category-component/SpeakerItem";

function App() {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(calculateTotal());
  }, [cartItems, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<NavigationBar products={products} />}>
        <Route index element={<Home products={products} />} />
        <Route path="headphones" element={<Headphones products={products} />} />
        <Route
          path="headphones/:name"
          element={<HeadphoneItem products={products} />}
        />
        <Route path="speakers" element={<Speakers products={products} />} />
        <Route
          path="speakers/:name"
          element={<SpeakerItem products={products} />}
        />
        <Route path="earphones" element={<Earphones products={products} />} />
        <Route
          path="earphones/:name"
          element={<EarphoneItem products={products} />}
        />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Error404 />} />
      </Route>
    </Routes>
  );
}

export default App;
