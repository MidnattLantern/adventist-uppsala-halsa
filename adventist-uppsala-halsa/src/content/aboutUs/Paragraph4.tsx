import Styles from "./AboutUs.module.css";

export const Paragraph4 = () => {
    return(
        <>
            <p className={Styles.Paragraph}>{"Omfattande hälsostudier har genomförts med kopplingen mellan livsstil och ett längre och friskare liv:"}</p>
            <a className={Styles.ExternalLink} target="_blank" rel="noreferrer" href="https://adventisthealthstudy.org/studies/AHS-1">{"adventisthealthstudy.org/studies/AHS-1"}</a>
            <a className={Styles.ExternalLink} target="_blank" rel="noreferrer" href="https://adventisthealthstudy.org/studies/AHS-2">{"adventisthealthstudy.org/studies/AHS-2"}</a>
        </>
    )
}