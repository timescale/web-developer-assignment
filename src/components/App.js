import React from "react";

import logo from "../assets/images/logo.svg";

// Component
import Movies from "./Movies/Movies";

//  Styles
import styles from "./styles/App.module.css";

const App = () => {
  return (
    <div className={styles.Container}>
      <Movies logo={logo} />
    </div>
  );
};

export default App;
