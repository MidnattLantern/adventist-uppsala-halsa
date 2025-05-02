import Styles from "./Header.module.css";
import Icon from "../../assets/logos/adventist-symbol-cave.png";
import { ReactComponent as SearchIcon } from "../../assets/vector-icons/search-icon.svg"; //prebuilt margins
import { useState, useRef } from "react";

const Header = () => {
    const Logo = () => {
        return(
            <a href="https://uppsala.adventkyrka.se/" target="_blank" rel="noreferrer" className={Styles.Logo}>
                <img className={Styles.LogoIcon} src={Icon} alt="logo"/>
                <h1 className={Styles.LogoTitle}>Adventkyrkan</h1>
            </a>
        )
    };

    // Fixed on bottom right for phone, Stay on header for desktop.
    // Always collapsed for desktop.
    // Automatically focus and blur input for desktop, find "Comment to disable autofocus".
    const SearchBar = () => {
        const [inputText, setInputText] = useState<string>("");
        const inputRef = useRef<HTMLInputElement>(null);
        const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
            setInputText(event.target.value);
        };
        return(
            <div
            className={`${Styles.SearchBar}`}
            onMouseEnter={() => inputRef.current?.focus()} // Comment to disable autofocus
            onMouseLeave={() => inputRef.current?.blur()} // Comment to disable autofocus
            >
                <SearchIcon className={Styles.SearchIcon}/>
                <input
                className={`${Styles.SearchInputField}`}
                onChange={handleInputChange}
                value={inputText}
                type="text" 
                id="search-bar"
                name="search-bar"
                ref={inputRef}
                />
            </div>
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