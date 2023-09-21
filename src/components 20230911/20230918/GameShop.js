import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Home } from "./Home";
import { Products } from "./Products";
import { Dashboard } from "./Dashboard";
import { Other } from "./Other";
import { Error } from "./Error";
import { Login } from "./Login";
import { SingleProduct } from "./SingleProduct";
import { ProductWrapper } from "./ProductWrapper";
import { createContext, useState } from "react";
import games from "./db/Data";
import { ProtectedRoute } from "./ProtectedRoute";

export const GameContext = createContext();
const defaultCheckList = games.map((g) => {
  return { id: g.id, checked: false };
});

export function GameShop() {
  const [checkList, setCheckList] = useState(defaultCheckList);
  const [user, setUser] = useState({});
  return (
    <>
      <GameContext.Provider value={{ checkList, setCheckList, user, setUser }}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navbar />}>
              <Route index element={<Home />} />
              <Route path="home" element={<Home />} />
              <Route path="products" element={<ProductWrapper />}>
                <Route index element={<Products />} />
                <Route path=":id" element={<SingleProduct />} />
              </Route>
              <Route
                path="dashborad"
                element={
                  <ProtectedRoute>
                    <Dashboard />
                  </ProtectedRoute>
                }
              ></Route>
              <Route path="login" element={<Login />} />
              <Route path="cart" element={<Other />} />
              <Route path="*" element={<Error />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </GameContext.Provider>
    </>
  );
}
