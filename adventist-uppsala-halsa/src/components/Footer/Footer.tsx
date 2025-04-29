import Styles from "./Footer.module.css";

const Footer = () => {

    return(
        <div className={Styles.FooterComponentContainer}>
            <a className={Styles.FooterLink} href="https://www.adventist.se/" target="_blank" rel="noreferrer">adventist.se</a>
            <p className={Styles.FooterCopyright}>© Uppsala Adventkyrka</p>
        </div>
    )
};

export default Footer;