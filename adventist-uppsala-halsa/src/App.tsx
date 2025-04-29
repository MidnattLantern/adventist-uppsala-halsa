import Styles from './App.module.css';
import Logo from "./assets/logos/adventist-symbol-cave.png";
import Footer from './components/Footer/Footer';

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

      <footer className={Styles.FooterContainer} data-testid="footer">
        <Footer />
      </footer>

    </div>
  );
}

export default App;
