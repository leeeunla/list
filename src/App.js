import { Tab } from "./components 20230911/Tab";
import { S1 } from "./components 20230911/S1";
import { List } from "./components 20230911/20230911/List";
import { AvaterList } from "./components 20230911/20230912/AvaterList";
import { PropsTest } from "./components 20230911/20230912/PropsTest";
import { CounterState } from "./components 20230911/CounterState";
import { Home } from "./components 20230911/20230913/Home";
import { createGlobalStyle } from "styled-components";
import { Gallery } from "./components 20230911/20230914/Gallery";
import { Openweater } from "./components 20230911/20230914/OpenWeater";
import { MyRef } from "./components 20230911/20230915/MyRef";
import { MyRouter } from "./components 20230911/20230915/MyRouter";
import { GameShop } from "./components 20230911/20230918/GameShop";
import { Flower } from "./components 20230911/웹사이트만들기/Flower";
import { UseContext } from "./components 20230911/20230918/UseContext";

const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: 'GmarketSansMedium';
    src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansMedium.woff') format('woff');
    font-weight: normal;
    font-style: normal;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Poppins,GmarketSansMedium;
}
`;

export default function App() {
  return (
    <>
      <GlobalStyle />
      {/* <GameShop /> */}
      {/* <Flower /> */}
      <MyRouter />
      {/* <UseContext /> */}
    </>
  );
}
