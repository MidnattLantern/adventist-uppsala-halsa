import Styles from "./AbuseContent.module.css";

type RecipeContentType = {
    CoconutCookiesIngredients: React.FC;
    CoconutCookiesInstructions: React.FC;
    DateBallsIngredients: React.FC;
    DateBallsInstructions: React.FC;
};

const CoconutCookiesIngredients = () => {
    return(
        <div className={`${Styles.SectionView} ${Styles.TableSize}`}>
            <li className={Styles.Paragraph}>{"½ tsk smält kokosolja"}</li>
            <li className={Styles.Paragraph}>{"120 g mandelmjöl"}</li>
            <li className={Styles.Paragraph}>{"30 g kokosflingor"}</li>
            <li className={Styles.Paragraph}>{"60 g kokosolja"}</li>
            <li className={Styles.Paragraph}>{"1 stort ägg"}</li>
            <li className={Styles.Paragraph}>{"1/tsk vaniljpulver"}</li>
            <li className={Styles.Paragraph}>{"40 g mjuka urkärnade finhackade dadlar"}</li>
            <li className={Styles.Paragraph}>{"1 nypa salt"}</li>
        </div>
    )
};
const CoconutCookiesInstructions = () => {
    return(
        <div className={Styles.SectionView}>
            <p className={Styles.Paragraph}>{"Smaksätt med Carob, torkad frukt (finhackad) för extra tuggmotstånd."}</p>
            <p className={Styles.Paragraph}>{"180 grader, 160 varmluft. Smörj plåten med kokosolja"}</p>
            <p className={Styles.Paragraph}>{"Mixa alla ingredienser med stavmixer, tillsätt lite vatten om degen är för smulig."}</p>
            <p className={Styles.Paragraph}>{"Forma degen till 20 små bollar och lägg på plåten."}</p>
            <p className={Styles.Paragraph}>{"Platta till ca 1 cm tjocklek."}</p>
            <p className={Styles.Paragraph}>{"Grädda 15 minuter"}</p>
            <p className={Styles.Paragraph}>{"Låt svalna en stund på plåten, lägg sedan på galler."}</p>
            <p className={Styles.Paragraph}>{"Förvara i lufttät burk i frysen."}</p>
        </div>
    )
};

const DateBallsIngredients = () => {
    return(
        <div className={`${Styles.SectionView} ${Styles.TableSize}`}>
            <li className={Styles.Paragraph}>{"2 1/2 dl urkärnade dadlar eller dadelmassa (125 g)"}</li>
            <li className={Styles.Paragraph}>{"1 1/2 dk kokosmjölk"}</li>
            <li className={Styles.Paragraph}>{"ev 1 krm salt"}</li>
            <li className={Styles.Paragraph}>{"ev lite vaniljpulver"}</li>
            <li className={Styles.Paragraph}>{"1 1/2 dl mandlar ev svagt rostade"}</li>
            <li className={Styles.Paragraph}>{"3 dl Saltå dinkelflingor eller fiberhavregryn"}</li>
            <li className={Styles.Paragraph}>{"1/2-1 1/2 dl kokosmjölk"}</li>
            <li className={Styles.Paragraph}>{"kokosflingor"}</li>
        </div>
    )
};

const DateBallsInstructions = () => {
    return(
        <div className={Styles.SectionView}>
            <p className={Styles.Paragraph}>{"Koka dadlarna några minuter i 1 1/2 dl kokosmjölk tills det blir mjuka"}</p>
            <p className={Styles.Paragraph}>{"Rör ev ner salt och vaniljpulver och mosa väl eller mixa med mixerstav"}</p>
            <p className={Styles.Paragraph}>{"Blanda i dinkelflingor eller havregryn och tillsätt mer kokosmjölk till en jämn smet"}</p>
            <p className={Styles.Paragraph}>{"Forma till små bollar och rulla dom i kokosflingor"}</p>
            <p className={Styles.Paragraph}>{"Förvara i kylskåp"}</p>
        </div>
    )
};

const RecipeContent: RecipeContentType = {
    CoconutCookiesIngredients,
    CoconutCookiesInstructions,
    DateBallsIngredients,
    DateBallsInstructions
};

RecipeContent.CoconutCookiesIngredients = CoconutCookiesIngredients;
RecipeContent.CoconutCookiesInstructions = CoconutCookiesInstructions;
RecipeContent.DateBallsIngredients = DateBallsIngredients;
RecipeContent.DateBallsInstructions = DateBallsInstructions;

export default RecipeContent;