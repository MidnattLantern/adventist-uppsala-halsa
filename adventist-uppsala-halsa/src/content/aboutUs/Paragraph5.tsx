import Styles from "./AboutUs.module.css";

export const Paragraph5 = () => {
    return(
        <>
            <p className={Styles.Paragraph}>{"Loma Linda i Kalifornien är en av 5 platser i världen - blå zoner - där befolkningen är friskare, och lever avsevärt mycket längre än den övriga befolkningen."}</p>
            <a className={Styles.ExternalLink} target="_blank" rel="noreferrer" href="https://www.bluezones.com/explorations/loma-linda-california/">bluezones.com/explorations/loma-linda-california</a>
        </>
    )
}