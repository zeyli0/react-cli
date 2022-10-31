import React from "react";
import { createRoot } from "react-dom/client";
import styles from "../assets/index.scss";
import water_jpg from "../assets/img/001.jpg";
class App extends React.Component {
  render() {
    return (
      <div className={styles.content}>
        react
        <img src={water_jpg} width="200px"></img>
      </div>
    );
  }
}
const root = createRoot(document.getElementById("root"));
root.render(<App />);
