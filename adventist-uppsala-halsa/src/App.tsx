import Styles from './App.module.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import EightHealthKeysWrapper from './pages/EightHealthKeys/EightHealthKeysWrapper';
import Fuse from 'fuse.js';
import waterContent from "./content/healthKeys/water.json";
import Dropdown from './components/Dropdown/Dropdown';
import AboutUsWrapper from './pages/AboutUs/AboutUsWrapper';
import NaturalMedicineWrapper from './pages/NaturalMedicine/NaturalMedicineWrapper';
import AbuseWrapper from './pages/Abuse/AbuseWrapper';
import NervousSystemHealthWrapper from './pages/NervousSystemHealth/NervousSystemHealthWrapper';
import HerbsForHumansWrapper from './pages/HerbsForHumans/HerbsForHumansWrapper';
import FirstAidKitWrapper from './pages/FirstAidKit/FirstAidKitWrapper';

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

        <Dropdown title='8 HÄLSONYCKLAR' expandedByDefault={false} id="eight-health-keys">
          <EightHealthKeysWrapper />
        </Dropdown>

        <Dropdown title='VILKA ÄR VI?' expandedByDefault={false} id="about-us">
          <AboutUsWrapper/>
        </Dropdown>

        <Dropdown title='FÖRKYLNING & NATURLIG BEHANDLING' expandedByDefault={false} id="natural-medicine-wrapper">
          <NaturalMedicineWrapper/>
        </Dropdown>

        <Dropdown title='MISSBRUK' expandedByDefault={true} id="abuse">
          <AbuseWrapper />
        </Dropdown>

        <Dropdown title='HÄLSA FÖR NERVSYSTEMET' expandedByDefault={false} id="nervous-system-health-wrapper">
          <NervousSystemHealthWrapper />
        </Dropdown>

        <Dropdown title="ÖRTER TILL MÄNNISKANS TJÄNST" expandedByDefault={false} id="herbs-for-humans">
          <HerbsForHumansWrapper />
        </Dropdown>

        <Dropdown title='1:a HJÄLPEN KIT' expandedByDefault={false} id="first-aid-kit">
          <FirstAidKitWrapper />
        </Dropdown>

      </main>

      <footer className={Styles.FooterContainer} data-testid="footer">
        <Footer />
      </footer>

    </div>
  );
}

export default App;
