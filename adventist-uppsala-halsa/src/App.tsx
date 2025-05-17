import Styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import EightHealthKeysWrapper from './pages/EightHealthKeys/EightHealthKeysWrapper';
import Fuse from 'fuse.js';
import waterContent from "./content/healthKeys/water.json";

const App = () => {
  type HealthKeyCardContent = {
  id: string;
  title: string;
  paragraphs: string[];
};
const allEightHealthContents: HealthKeyCardContent[] = [
  waterContent,
]
const fuse = new Fuse(allEightHealthContents, {
  keys: ['title', 'paragraphs'],
  includeMatches: true,
  threshold: 0.3
});
const results = fuse.search("vatten");

results.forEach(result => {
    console.log("fuse results");
    console.log(result.item.title);
    console.log(result.matches);
});

  return (
    <div className={Styles.AppContainer} data-testid="app-container">
      <header className={Styles.HeaderContainer} data-testid="header">
        <Header />
      </header>

      <main className={Styles.MainContainer}>
        <EightHealthKeysWrapper />
      </main>

      <footer className={Styles.FooterContainer} data-testid="footer">
        <Footer />
      </footer>

    </div>
  );
}

export default App;
