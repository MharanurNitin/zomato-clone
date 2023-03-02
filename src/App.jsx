import "./App.css";
import Home from "./pages/Home.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RestaurantList from "./pages/RestaurantList";
import { RecoilRoot } from "recoil";
import OrderOnline from "./components/RestaurantList/OrderOnline";
import DineOut from "./components/RestaurantList/DineOut";
import NightLife from "./components/RestaurantList/NightLife";
import ClickedSingleRestaurantDetail from "./pages/ClickedSingleRestaurantDetail";
import CheckoutPage from "./pages/CheckoutPage";
function App() {
  return (
    <div className="App">
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/:city" element={<RestaurantList />}>
              <Route path="" element={<OrderOnline />} />
              <Route path="delivery" element={<OrderOnline />} />
              <Route path="dine-out" element={<DineOut />} />
              <Route path="night-life" element={<NightLife />} />
              <Route
                path=":restaurantName/order"
                element={<ClickedSingleRestaurantDetail />}
              />
            </Route>
            <Route path="/checkout/order" element={<CheckoutPage />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
    </div>
  );
}

export default App;
