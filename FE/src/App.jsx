import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import AddEmployee from "./pages/AddEmployee";
import Basket from "./pages/Basket";
import Update from "./pages/Update";
import MainProvider from "./context/MainProvider";
import WishListProvider from "./context/WishListProvider";
import WishListPage from "./pages/WishListPage";

function App() {


  return (
    <>
    <MainProvider>
      <WishListProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="add" element={<AddEmployee />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/wishList" element={<WishListPage />} />
          <Route path="/edit/:id" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </WishListProvider>
    </MainProvider>
    </>
  )
}

export default App
