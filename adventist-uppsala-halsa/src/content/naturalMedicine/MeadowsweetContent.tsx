import Styles from "./NaturalMedicine.module.css";

type MeadowsweetContentType = {
  Effects: React.FC;
  Recipe: React.FC;
  Treatment: React.FC;
};

const Effects = () => {
    return(<>
        <p className={Styles.AlternativeParagraph}>{"Älgört innehåller salicylsyra, som:"}</p>
        <li className={Styles.AlternativeListItem}>{"Är antiinflammatorisk och smärtstillande. Hjälper mot huvudvärk och ledvärk."}</li>
        <li className={Styles.AlternativeListItem}>{"Är febernedsättande"}</li>
        <li className={Styles.AlternativeListItem}>{"Stärker andnings och immunförsvaret."}</li>
        <br/>
        <li className={Styles.AlternativeListItem}>{"Är svett och urindrivande"}</li>
        <li className={Styles.AlternativeListItem}>{"Reglerar blodtrycket"}</li>
        <li className={Styles.AlternativeListItem}>{"Hjälper mot matsmältningsproblem"}</li>
        <br/>
        <li className={Styles.AlternativeListItem}>{"Hjälper mot halsbränna"}</li>
    </>)
};

const Recipe = () => {
    return(<>
        <table className={Styles.TableSize}>
        <tr>
            <td className={Styles.AlternativeParagraph}>{"torkad smulad älgört"}</td>
            <td className={Styles.AlternativeParagraph}>{"1-2 tsk"}</td>
        </tr>
        <tr>
            <td className={Styles.AlternativeParagraph}>{"vatten"}</td>
            <td className={Styles.AlternativeParagraph}>{"1 liter"}</td>
        </tr>
    </table>
    <p className={Styles.AlternativeParagraph}>{"Plocka under säsong, och torka. Förvara i mörk, tättslutande burk."}</p>
    <p className={Styles.AlternativeParagraph}>{"Koka upp och låt dra i 5-10 minuter."}</p>
    <p className={Styles.AlternativeParagraph}>{"Alternativt i kallt vatten över natten."}</p>
    <p className={Styles.AlternativeParagraph}>{"För bästa effekt drick utan uppvärmning."}</p>
    </>)
};

const Treatment = () => {
    return(<>
        <p className={Styles.AlternativeParagraph}>{"Iakttag försiktighet om du:"}</p>
        <li className={Styles.AlternativeListItem}>{"Tar blodförtunnande läkemedel,"}</li>
        <li className={Styles.AlternativeListItem}>{"Är allergisk mot aspirin."}</li>
    </>)
}

const MeadowsweetContent: MeadowsweetContentType = {
  Effects,
  Recipe,
  Treatment
};

MeadowsweetContent.Effects = Effects;
MeadowsweetContent.Recipe = Recipe;
MeadowsweetContent.Treatment = Treatment;

export default MeadowsweetContent;