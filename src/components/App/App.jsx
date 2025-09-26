import Header from "../Header";
import SideMenu from "../SideMenu";
import styles from "./App.module.css";

function App() {
  return (
    <div className={styles.app}>
      <Header />
      <SideMenu />
      <div className="mainContent">
        <h1>This is Main Contnet Area</h1>
      </div>
    </div>
  );
}

export default App;
