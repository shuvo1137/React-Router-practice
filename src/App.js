import "./App.css";
import Header from "./Header/Header";
import { Route, Routes } from "react-router-dom";
import Friends from "./Friends/Friends";
import Navigation from "./Header/Navigation/Navigation";
import FriendDetail from "./FriendDetail/FriendDetail";
import Countries from "./Countries/Countrys/Countries";
import Country from "./Countries/Country/Country";
import Meals from "./Food/Meals/Meals";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Routes>
        <Route path="/" element={<Header></Header>}></Route>
        <Route path="/friends" element={<Friends></Friends>}></Route>
        <Route path="/meal" element={<Meals></Meals>}>
          {" "}
        </Route>
        <Route
          path="/friends/:friendId"
          element={<FriendDetail></FriendDetail>}
        ></Route>
        <Route path="/countries" element={<Countries></Countries>}></Route>
        <Route
          path="/countries/:countryName"
          element={<Country></Country>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
