import { FirstPage } from "./components/firstPage/FirstPage";
import { Footer } from "./components/footer/Footer";
import { Header } from "./components/header/Header";
import { Routes, Route } from "react-router-dom";
import { ElectronicSecondPage } from "./components/secondPage/ElectronicSecondPage";
import { HomeSourceItems } from "./components/secondPage/secondPageForHome/HomeSourceItems";
import { Clothing } from "./components/thirdPageMain/Clothing";
import { CartPage } from "./components/mycart/CartPage";
import useHeartIconClick from "./components/hook/saveFavorite";
import {useState} from "react";

function App() {

  const [open, setOpen] = useState(false);
  const [flags, setFlags] = useState(false)

   const { chosenItems, handleHeartIconClick, handleRemoveItem, handleClearAll } = useHeartIconClick();

   const searchHandling = ()=>{
    setOpen(false);
    setFlags(false);
   }
  return (
    <div className="App" onClick={()=>searchHandling()}>
      <Header  chosenItems={chosenItems} setOpen={setOpen} open={open} flags={flags} setFlags={setFlags}/>
      <Routes>
        <Route exact path="/ecommerce-frontend" element={<FirstPage />} />
        <Route path="/second" element={<ElectronicSecondPage handleHeartIconClick={handleHeartIconClick}/>} />
        <Route path="/HomeSourceItems" element={<HomeSourceItems  handleHeartIconClick={handleHeartIconClick} />} />
        <Route path="/clothing" element={<Clothing />} />
        <Route path="/cart" element={<CartPage  chosenItems={chosenItems} handleClearAll={handleClearAll} handleRemoveItem={handleRemoveItem} />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
