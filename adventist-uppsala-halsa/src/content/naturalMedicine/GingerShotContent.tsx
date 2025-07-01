import Styles from "./NaturalMedicine.module.css";

type GingerShotContentType = {
  Recipe: React.FC
};

const Recipe = () => {
    return(<>
        <table className={Styles.TableSize}>
            <tr>
                <td className={Styles.AlternativeParagraph}>{"Ingefära"}</td>
                <td className={Styles.AlternativeParagraph}>{"80 g"}</td>
            </tr>
            <tr>
                <td className={Styles.AlternativeParagraph}>{"Honung"}</td>
                <td className={Styles.AlternativeParagraph}>{"0,5 dl"}</td>
            </tr>
            <tr>
                <td className={Styles.AlternativeParagraph}>{"Utklämd saft"}</td>
                <td className={Styles.AlternativeParagraph}>{"3 citroner"}</td>
            </tr>
            <br/>
            <tr>
                <td className={Styles.AlternativeParagraph}>{"Vatten"}</td>
                <td className={Styles.AlternativeParagraph}>{"1,4 dl"}</td>
            </tr>
        </table>
        <p className={Styles.AlternativeParagraph}>{"Ingefäran hackas grovt, utan att skalas."}</p>
        <p className={Styles.AlternativeParagraph}>{"Blanda alla ingredienser, utom citron, och kör i blender."}</p>
        <p className={Styles.AlternativeParagraph}>{"Sila innehållet i ett grovt tyg, så stora bitar inte kommer med."}</p>
        <br/>
        <p className={Styles.AlternativeParagraph}>{"Blanda i citronsaft efter önskad smak."}</p>
        <p className={Styles.AlternativeParagraph}>{"Lägg till extra honung vid behov."}</p>
    </>)
};

const GingerShotContent: GingerShotContentType = {
  Recipe
};

GingerShotContent.Recipe = Recipe;

export default GingerShotContent;