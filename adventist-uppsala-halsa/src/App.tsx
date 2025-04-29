import React from 'react';
import Styles from './App.module.css';
import Logo from "./assets/logos/adventist-symbol-cave.png";

const App = () => {

  return (
    <div className={Styles.AppContainer} data-testid="app-container">
      <header className={Styles.HeaderContainer}>
        <img className={Styles.Logo} src={Logo} alt="logo"/>
        <h1>Header</h1>
      </header>

      <main className={Styles.MainContainer}>
        <h1>Main</h1>
      </main>

      <footer className={Styles.FooterContainer}>
        <h1>Footer</h1>
      </footer>

    </div>
  );
}

export default App;
