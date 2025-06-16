import { useViewPortContext } from "../../contexts/useViewportContext";
import Styles from "./Dropdown.module.css";
import { ReactNode, useEffect, useState } from "react";

const TITLE_CHARACTER_LIMIT = 12;
const BREAKPOINT_SHORT_TITLE = 768

const Dropdown = ({
    title,
    children,
    expandedByDefault,
    id
} : {
    title?: string,
    children?: ReactNode,
    expandedByDefault?: boolean,
    id?: string
}) => {
    const { viewportWidth } = useViewPortContext();
    const [isExpanded, setIsExpanded] = useState<boolean>(false);
    const [titleLength, setTitleLength] = useState<number | undefined>(0);
    useEffect(() => {
        expandedByDefault && setIsExpanded(true);
        setTitleLength(title?.length);
    }, [expandedByDefault, title])

    return(
        <div className={Styles.DropdownView} id={id}>
            <div className={Styles.TitleExpandButtonView} onClick={() => {setIsExpanded(!isExpanded)}}>
                <h1 className={Styles.TitleText}>
                    {title?.length && title.length > TITLE_CHARACTER_LIMIT && viewportWidth < BREAKPOINT_SHORT_TITLE ?
                        (title?.slice(0, TITLE_CHARACTER_LIMIT) + "...")
                    :
                        (title)
                    }
                </h1>
                <button className={Styles.ExpandButton}>{isExpanded ? 'Stäng' : 'Öppna'}</button>
            </div>
            <div className={`${Styles.ChildrenView} ${isExpanded && Styles.ExpandedChildrenView}`}>
                {children}
            </div>
        </div>
    )
};

export default Dropdown;