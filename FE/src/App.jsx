import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'
import MainLayout from "./layout/MainLayout";
import HomePage from "./pages/HomePage";
import AdminPage from "./pages/AdminPage";
import AddEmployee from "./pages/AddEmployee";
import Basket from "./pages/Basket";
import Update from "./pages/Update";
import MainProvider from "./context/MainProvider";

function App() {


  return (
    <>
    <MainProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="admin" element={<AdminPage />} />
          <Route path="add" element={<AddEmployee />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/edit/:id" element={<Update />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </MainProvider>
    </>
  )
}

export default App
