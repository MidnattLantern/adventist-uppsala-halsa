import Styles from "./NavigationTable.module.css";

const NavigationTable = () => {
    return(
        <table className={Styles.NavLinkTable}>
            <tr className={Styles.NavLinkRow}>
                <td className={Styles.NavLinkSection}>
                    <a className={Styles.NavLink} href="#meadowsweet">{"Älgörtste"}</a>
                    <a className={Styles.NavLink} href="#flubomb">{"Influensabomben"}</a>
                    <a className={Styles.NavLink} href="#watertherapy">{"Vattenterapi"}</a>
                </td>
                <td className={Styles.NavLinkSection}>
                    <a className={Styles.NavLink} href="#cayennepepper">{"Cayennepeppar"}</a>
                    <a className={Styles.NavLink} href="#coughmedicine">{"Hostmedicin"}</a>
                    <a className={Styles.NavLink} href="#otitis">{"Öroninflammation"}</a>
                </td>
            </tr>
            <tr className={Styles.NavLinkRow}>
                <td className={Styles.NavLinkSection}>
                    <a className={Styles.NavLink} href="#cough">{"Hosta"}</a>
                    <a className={Styles.NavLink} href="#sore-throat">{"Halsont"}</a>
                    <a className={Styles.NavLink} href="#ginger-shot">{"Ingefära shot"}</a>
                </td>
                <td className={Styles.NavLinkSection}>
                    <a className={Styles.NavLink} href="#chicoryroot">{"Cikoriarot"}</a>
                    <a className={Styles.NavLink} href="#carob">{"Carob"}</a>
                    <a className={Styles.NavLink} href="#chaga">{"Chaga Sprängticka"}</a>
                </td>
            </tr>
        </table>
    )
};

export default NavigationTable;