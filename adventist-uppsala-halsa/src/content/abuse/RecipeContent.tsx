import Styles from "./AbuseContent.module.css";

type RecipeContentType = {
    CoconutCookiesIngredients: React.FC;
    CoconutCookiesInstructions: React.FC;
    DateBallsIngredients: React.FC;
    DateBallsInstructions: React.FC;
    WeedPestoIngredients: React.FC;
    WeedPestoInstructions: React.FC;
    FriedDandelionBudsIngredients: React.FC;
    FriedDandelionBudsInstructions: React.FC;

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

const WeedPestoIngredients = () => {
    return(
        <div className={`${Styles.SectionView} ${Styles.TableSize}`}>
            <li className={Styles.Paragraph}>{"1 dl solroskärnor"}</li>
            <li className={Styles.Paragraph}>{"3 dl hackad späd kirskål"}</li>
            <li className={Styles.Paragraph}>{"1 dl hackad späd brännässla"}</li>
            <li className={Styles.Paragraph}>{"Näringsjäst"}</li>
            <li className={Styles.Paragraph}>{"Himalajasalt"}</li>
            <li className={Styles.Paragraph}>{"Olivolja"}</li>
        </div>
    )
};

const WeedPestoInstructions = () => {
    return(
        <div className={Styles.SectionView}>
            <p className={Styles.Paragraph}>{"Mixa solroskärnor och ogräs, var för sig"}</p>
            <p className={Styles.Paragraph}>{"Rör i näringsjäst och olivolja till en bra konsistens"}</p>
            <p className={Styles.Paragraph}>{"Smaka av med himalajasalt"}</p>
        </div>
    )
};

const FriedDandelionBudsIngredients = () => {
    return(
        <div className={`${Styles.SectionView} ${Styles.TableSize}`}>
            <li className={Styles.Paragraph}>{"Späda maskrosknoppar"}</li>
            <li className={Styles.Paragraph}>{"Vitlök"}</li>
            <li className={Styles.Paragraph}>{"Himalajasalt"}</li>
            <li className={Styles.Paragraph}>{"Näringsjäst"}</li>
            <li className={Styles.Paragraph}>{"Himalajasalt"}</li>
            <li className={Styles.Paragraph}>{"Kokosolja — neutral smak"}</li>
        </div>
    )
};

const FriedDandelionBudsInstructions = () => {
    return(
        <div className={Styles.SectionView}>
            <p className={Styles.Paragraph}>{"Ta bort stjälken från maskrosknoppen — för att slippa besk smak"}</p>
            <p className={Styles.Paragraph}>{"Stek maskrosknopparna med pressad vitlök i kokosolja"}</p>
            <p className={Styles.Paragraph}>{"Krydda med salt"}</p>
        </div>
    )
};

const RecipeContent: RecipeContentType = {
    CoconutCookiesIngredients,
    CoconutCookiesInstructions,
    DateBallsIngredients,
    DateBallsInstructions,
    WeedPestoIngredients,
    WeedPestoInstructions,
    FriedDandelionBudsIngredients,
    FriedDandelionBudsInstructions
};

RecipeContent.CoconutCookiesIngredients = CoconutCookiesIngredients;
RecipeContent.CoconutCookiesInstructions = CoconutCookiesInstructions;
RecipeContent.DateBallsIngredients = DateBallsIngredients;
RecipeContent.DateBallsInstructions = DateBallsInstructions;
RecipeContent.WeedPestoIngredients = WeedPestoIngredients;
RecipeContent.WeedPestoInstructions = WeedPestoInstructions;
RecipeContent.FriedDandelionBudsIngredients = FriedDandelionBudsIngredients;
RecipeContent.FriedDandelionBudsInstructions = FriedDandelionBudsInstructions;

export default RecipeContent;