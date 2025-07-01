import Styles from "./NaturalMedicine.module.css";

type OtitisContentType = {
    Recipe: React.FC;
    Treatment: React.FC;
};

const Recipe = () => {
    return(<>
        <table className={Styles.TableSize}>
            <tr>
                <td className={Styles.AlternativeParagraph}>{"Gullök"}</td>
                <td className={Styles.AlternativeParagraph}>{"En hel"}</td>
            </tr>
        </table>
        <p className={Styles.AlternativeParagraph}>{"Koka gullöken, dela sedan på mitten."}</p>
        <p className={Styles.AlternativeParagraph}>{"Krama ur löksaften."}</p>
    </>)
};

const Treatment = () => {
    return(<>
        <p className={Styles.AlternativeParagraph}>{"Behandlas efter att det svalnat något."}</p>
        <p className={Styles.AlternativeParagraph}>{"Häll lite löksaft i örat."}</p>
        <p className={Styles.AlternativeParagraph}>{"Linda in den andra lökhalvan i bomullstyg, eller en strumpa, och lägg på örat."}</p>
        <br/>
        <p className={Styles.AlternativeParagraph}>{"Upprepa behandlingen vid behov."}</p>
    </>)
};

const OtitisContent: OtitisContentType = {
    Recipe,
    Treatment
};

OtitisContent.Recipe = Recipe;
OtitisContent.Treatment = Treatment;

export default OtitisContent;