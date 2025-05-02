import Styles from "./Header.module.css";
import Icon from "../../assets/logos/adventist-symbol-cave.png";

const Header = () => {
    const Logo = () => {
        return(
            <a href="https://uppsala.adventkyrka.se/" target="_blank" rel="noreferrer" className={Styles.Logo}>
                <img className={Styles.LogoIcon} src={Icon} alt="logo"/>
                <h1 className={Styles.LogoTitle}>Adventkyrkan</h1>
            </a>
        )
    };
    const SearchBar = () => {
        return(
            <input className={Styles.SearchBar} type="text" id="search-bar" name="search-bar" placeholder="Sök..."/>
        )
    };

    return(
        <div className={Styles.HeaderComponentContainer}>
            <Logo />
            <SearchBar />
        </div>
    )
};

export default Header;