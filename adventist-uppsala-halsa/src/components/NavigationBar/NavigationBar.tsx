import { Link } from "react-router-dom";
import { useViewPortContext } from "../../contexts/useViewportContext";
import Styles from "./NavigationBar.module.css";
import {ReactComponent as BurgerIcon} from "../../assets/vector-icons/burger-menu.svg";
import {ReactComponent as CloseIcon} from "../../assets/vector-icons/close-icon.svg";
import {ReactComponent as LinkIcon} from "../../assets/vector-icons/generic-star-icon.svg";
import {ReactComponent as HomeIcon} from "../../assets/vector-icons/home-icon.svg";
import {ReactComponent as ExternalLinkIcon} from "../../assets/vector-icons/external-link-icon.svg";
import { useState } from "react";

const BREAKPOINT_SHORT_TITLE = 768

const NavigationBar = () => {
    const { viewportWidth } = useViewPortContext();
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    const BurgerExpand = () => {
        return (
            <button onClick={() => {setIsExpanded(!isExpanded)}} className={Styles.BurgerCloseExpandButton}>
                {isExpanded ?
                <CloseIcon className={Styles.BurgerCloseIconColor}/>
                :
                <BurgerIcon className={Styles.BurgerCloseIconColor}/>
                }
            </button>
        )
    };

    const LinksView = () => {
        return (
            <div className={`${Styles.LinksView} ${isExpanded && Styles.LinksViewExpanded}`}>
                <Link to="/" onClick={() => {setIsExpanded(false)}} className={Styles.HomeLink}>
                    <HomeIcon className={Styles.LinkIconSize}/> {"Adventkyrkan Hälsa"}
                </Link>
                <a href="https://uppsala.adventkyrka.se/" target="_blank" rel="noreferrer" className={Styles.Link}>
                    <ExternalLinkIcon className={Styles.LinkIconSize}/> {"Adventistkyrkan Uppsala"}
                </a>
                <hr className={Styles.LineBreak}/>
                <Link to="/åtta-hälsonycklar" onClick={() => {setIsExpanded(false)}} className={Styles.Link}>
                    <LinkIcon className={Styles.LinkIconSize}/> {"8 hälsonycklar"}
                </Link>
                <Link to="/vilka-är-vi" onClick={() => {setIsExpanded(false)}} className={Styles.Link}>
                    <LinkIcon className={Styles.LinkIconSize}/> {"Vilka är vi?"}
                </Link>
                <Link to="/förkylning-och-naturlig-behandling" onClick={() => {setIsExpanded(false)}} className={Styles.Link}>
                    <LinkIcon className={Styles.LinkIconSize}/> {"Förkylning & naturlig behandling"}
                </Link>
                <hr className={Styles.LineBreak}/>
                <Link to="/missbruk" onClick={() => {setIsExpanded(false)}} className={Styles.Link}>
                    <LinkIcon className={Styles.LinkIconSize}/> {"Missbruk"}
                </Link>
                <Link to="/hälsa-för-nervsystemet" onClick={() => {setIsExpanded(false)}} className={Styles.Link}>
                    <LinkIcon className={Styles.LinkIconSize}/> {"Hälsa för nervsystemet"}
                </Link>
                <Link to="/örter-till-människans-tjänst" onClick={() => {setIsExpanded(false)}} className={Styles.Link}>
                    <LinkIcon className={Styles.LinkIconSize}/> {"Örter till människans tjänst"}
                </Link>
                <hr className={Styles.LineBreak}/>
                <Link to="/första-hjälpen-kit" onClick={() => {setIsExpanded(false)}} className={Styles.Link}>
                    <LinkIcon className={Styles.LinkIconSize}/> {"1:a hjälpen kit"}
                </Link>
            </div>
        )
    }

    return (
        <div className={Styles.NavigationBarView}>
            <BurgerExpand/>
            <LinksView/>
        </div>
    )
};

export default NavigationBar;