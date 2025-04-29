import Styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const App = () => {

  return (
    <div className={Styles.AppContainer} data-testid="app-container">
      <header className={Styles.HeaderContainer} data-testid="header">
        <Header />
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
