import "./styles.css";
import { createContext, useContext } from "react";
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";

const UserContext = createContext();

export default function App() {
  return (
    <div className="text-center">
      <Navbar />
      <UserContext.Provider value={{ user: "Deepak Pal" }}>
        <MainPage />
      </UserContext.Provider>
    </div>
  );
}
