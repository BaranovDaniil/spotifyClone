import React from "react";
import { token } from "./utils/getToken";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  /**
   * get the token and store it
   */
  async function fetchToken() {
    try {
      const apiToken = await token();
      localStorage.setItem("token", apiToken);
    } catch (error) {
      alert(error);
    }
  }
  fetchToken();

  return (
    <>
      <Header></Header>
      <NavBar></NavBar>
      <MainContent></MainContent>
    </>
  );
}

export default App;
