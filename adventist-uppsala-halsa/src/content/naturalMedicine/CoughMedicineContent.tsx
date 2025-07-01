import Styles from "./NaturalMedicine.module.css";

type CoughmedicineContentType = {
    Recipe: React.FC;
    Treatment: React.FC;
};

const Recipe = () => {
    return(<>
        <p className={Styles.AlternativeParagraph}>{"Varva lökringar och honung i en burk,"}</p>
        <p className={Styles.AlternativeParagraph}>{"låt stå i rumstemperatur 24 timmar."}</p>
        <p className={Styles.AlternativeParagraph}>{"Sila bort lökringarna."}</p>
        <br/>
        <p className={Styles.AlternativeParagraph}>{"Förvaras i kylskåp 1 månad."}</p>
    </>)
};

const Treatment = () => {
    return(<>
        <p className={Styles.AlternativeParagraph}>{"Behandlas tre gånger om dagen."}</p>
        <table className={Styles.TableSize}>
            <tr>
                <td className={Styles.AlternativeParagraph}>{"Under 3 år"}</td>
                <td className={Styles.AlternativeParagraph}>{"¼ tsk"}</td>
            </tr>
            <tr>
                <td className={Styles.AlternativeParagraph}>{"Över 3 år"}</td>
                <td className={Styles.AlternativeParagraph}>{"½ tsk"}</td>
            </tr>
            <tr>
                <td className={Styles.AlternativeParagraph}>{"Över 18 år"}</td>
                <td className={Styles.AlternativeParagraph}>{"1 tsk"}</td>
            </tr>
        </table>
    </>)
};

const CoughmedicineContent: CoughmedicineContentType = {
    Recipe,
    Treatment
};

CoughmedicineContent.Recipe = Recipe;
CoughmedicineContent.Treatment = Treatment;

export default CoughmedicineContent;