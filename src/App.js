import React from "react";
import Swal from "sweetalert2";
import bg from "./image/nen1.jpg";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/main";
class App extends React.Component {
  render() {
    return (
      <div
        className="text-black relative font-sans bg-cover "
        style={{ backgroundImage: `url(${bg})`, height: "100vh" }}
      >
        <Header />
        <Main />
      </div>
    );
  }
}
export default App;
