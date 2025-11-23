import Styles from "./NaturalMedicine.module.css";

type FlubombContentType = {
  Recipe: React.FC;
  Treatment: React.FC;
};

const Recipe = () => {
    return(<>
        <table className={Styles.TableSize}>
            <tr>
                <td className={Styles.AlternativeParagraph}>{"Gurkmeja"}</td>
                <td className={Styles.AlternativeParagraph}>{"80 g"}</td>
            </tr>
            <tr>
                <td className={Styles.AlternativeParagraph}>{"Vitlök"}</td>
                <td className={Styles.AlternativeParagraph}>{"80 g"}</td>
            </tr>
            <tr>
                <td className={Styles.AlternativeParagraph}>{"Ingefära"}</td>
                <td className={Styles.AlternativeParagraph}>{"80 g"}</td>
            </tr>
            <br/>
            <tr>
                <td className={Styles.AlternativeParagraph}>{"Pepparrot"}</td>
                <td className={Styles.AlternativeParagraph}>{"40 g"}</td>
            </tr>
            <tr>
                <td className={Styles.AlternativeParagraph}>{"Gul lök"}</td>
                <td className={Styles.AlternativeParagraph}>{"40 g"}</td>
            </tr>
            <tr>
                <td className={Styles.AlternativeParagraph}>{"Cayennepeppar"}</td>
                <td className={Styles.AlternativeParagraph}>{"20 g"}</td>
            </tr>
            <br/>
            <tr>
                <td className={Styles.AlternativeParagraph}>{"Svartpeppar"}</td>
                <td className={Styles.AlternativeParagraph}>{"5 g"}</td>
            </tr>
        </table>
        <p className={Styles.AlternativeParagraph}>Mixa ihop ingridienserna till en smet</p>
    </>)
};

const Treatment = () => {
    return(<>
            <p className={Styles.AlternativeParagraph}>{"Drick 3 gånger om dagen."}</p>
            <p className={Styles.AlternativeParagraph}>{"Bland en tesked med saften från en halv citron och hett vaten."}</p>
        </>
    )
};

const FlubombContent: FlubombContentType = {
  Recipe,
  Treatment
};

FlubombContent.Recipe = Recipe;
FlubombContent.Treatment = Treatment;

export default FlubombContent;