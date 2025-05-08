import Styles from "./ClickableImage.module.css";
import { ReactNode } from "react";

const ClickableImage = ({
    src,
    children,
    onClick
} : {
    src: string,
    children?: ReactNode, 
    onClick?: () => void
}) => {
    return (
        <div className={Styles.ClickableImageContainer} onClick={onClick}>
            <img className={Styles.ImageFrame} src={src} alt={"failed to load " + src} />
            <button className={Styles.ButtonFrame}>
                <p>{children}</p>
            </button>
        </div>
    )
};

export default ClickableImage;