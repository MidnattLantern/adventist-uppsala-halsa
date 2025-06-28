import { ReactNode } from "react";
import Styles from "./Button.module.css";

const Button = ({
    children, semiOpaque, onClick
} : {
    children?: ReactNode, semiOpaque?: boolean, onClick?: () => void
}) => {

    return(
        <div className={`${Styles.ButtonContainer}`}>
            <button onClick={onClick} className={`${Styles.Button} ${semiOpaque && Styles.SemiOpaque}`}>{children}</button>
        </div>
    )
};

export default Button;