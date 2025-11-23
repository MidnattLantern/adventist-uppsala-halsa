import { Link } from "react-router-dom";
import { useViewPortContext } from "../../contexts/useViewportContext";
import Styles from "./NavigationBar.module.css";
import {ReactComponent as BurgerIcon} from "../../assets/vector-icons/burger-menu.svg";
import {ReactComponent as CloseIcon} from "../../assets/vector-icons/close-icon.svg";
import {ReactComponent as LinkIcon} from "../../assets/vector-icons/generic-star-icon.svg";
import {ReactComponent as HomeIcon} from "../../assets/vector-icons/home-icon.svg";
import {ReactComponent as ExternalLinkIcon} from "../../assets/vector-icons/external-link-icon.svg";
import { useEffect, useState } from "react";

const BREAKPOINT_WIDTH = 768;

const NavigationBar = () => {
    const { viewportWidth } = useViewPortContext();
    const [isExpanded, setIsExpanded] = useState<boolean>(false);

    useEffect(() => {
        if (viewportWidth > BREAKPOINT_WIDTH) {
            setIsExpanded(false);
        }
    }, [viewportWidth])

    const BurgerExpand = () => {
        return (
            <button onClick={() => {setIsExpanded(!isExpanded)}} className={`${Styles.BurgerCloseExpandButton} ${isExpanded && Styles.BurgerCloseExpanded}`}>
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
                    <HomeIcon className={Styles.LinkIconSize}/> <p>{"Adventkyrkan Hälsa"}</p>
                </Link>
                <a href="https://uppsala.adventkyrka.se/" target="_blank" rel="noreferrer" className={Styles.Link}>
                    <ExternalLinkIcon className={Styles.LinkIconSize}/> <p>{"Adventistkyrkan Uppsala"}</p>
                </a>
                <hr className={Styles.LineBreak}/>
                <Link to="/åtta-hälsonycklar" onClick={() => {setIsExpanded(false)}} className={Styles.Link}>
                    <LinkIcon className={Styles.LinkIconSize}/> <p>{"8 hälsonycklar"}</p>
                </Link>
                <Link to="/vilka-är-vi" onClick={() => {setIsExpanded(false)}} className={Styles.Link}>
                    <LinkIcon className={Styles.LinkIconSize}/> <p>{"Vilka är vi?"}</p>
                </Link>
                <Link to="/förkylning-och-naturlig-behandling" onClick={() => {setIsExpanded(false)}} className={Styles.Link}>
                    <LinkIcon className={Styles.LinkIconSize}/> <p>{"Förkylning & naturlig behandling"}</p>
                </Link>
                <hr className={Styles.LineBreak}/>
                <Link to="/missbruk" onClick={() => {setIsExpanded(false)}} className={Styles.Link}>
                    <LinkIcon className={Styles.LinkIconSize}/> <p>{"Beroenden"}</p>
                </Link>
                <Link to="/hälsa-för-nervsystemet" onClick={() => {setIsExpanded(false)}} className={Styles.Link}>
                    <LinkIcon className={Styles.LinkIconSize}/> <p>{"Hälsa för nervsystemet"}</p>
                </Link>
                <Link to="/örter-till-människans-tjänst" onClick={() => {setIsExpanded(false)}} className={Styles.Link}>
                    <LinkIcon className={Styles.LinkIconSize}/> <p>{"Örter till människans tjänst"}</p>
                </Link>
                <hr className={Styles.LineBreak}/>
                <Link to="/första-hjälpen-kit" onClick={() => {setIsExpanded(false)}} className={Styles.Link}>
                    <LinkIcon className={Styles.LinkIconSize}/> <p>{"1:a hjälpen kit"}</p>
                </Link>
            </div>
        )
    }

    return (
        <>
            {viewportWidth < BREAKPOINT_WIDTH && <BurgerExpand/>}
            <LinksView/>
        </>
    )
};

export default NavigationBar;