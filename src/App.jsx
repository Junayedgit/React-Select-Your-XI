import { useState } from "react";
import "./App.css";
import Banner from "./Banner/Banner";
import Header from "./Header/Header";
import Players from "./Players/Players";

function App() {
  const [coin, setCoin] = useState(0);

  const handleCollectCoin = () => {
    const coins = 160000000;
    setCoin(coins);
  };

  return (
    <>
      <Header coin={coin}></Header>
      <Banner handleCollectCoin={handleCollectCoin}></Banner>
      <Players></Players>
    </>
  );
}

export default App;
