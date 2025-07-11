import ZigZag from "../../components/ZigZag/ZigZag";
import Styles from "./HerbsForHumansWrapper.module.css";

const HerbsForHumansWrapper = () => {
    const Paragraph1 = () => {
        return <p className={Styles.Paragraph}><strong>Hud:</strong> aloe vera; gullris; slåttergubbe; stor kardborre; en; röllika; brännässla; vitplister; hjorttunga; maskros; styvmorsviol; järnört; havtorn; isop; timjan; blåklint; rysk martorn; flockarun; åsnetörne; ärenpris; groblad; ringblomma; Johannesört; lin; lavendel; gåsört; mejram; cikoria; skelört; läkemalva; kryddsalvia; ölandskungsljus; småborre; kransborre; rödplister; fackelblomster; kvickrot; våtarv</p>
    };
    const Paragraph2 = () => {
        return <p className={Styles.Paragraph}><strong>Skelettsystem:</strong> gullris; blåbär; slåttergubbe; stor kardborre; en; brännässla; vallört; maskros; kalmus; lin; gåsört; vårtbjörk; våtarv; ärenpris; lomme; persilja; tistelgullfrö; åsnetörne; åkerfräke</p>
    };
    const Paragraph3 = () => {
        return <p className={Styles.Paragraph}><strong>Prostata:</strong> nicktistel; vitplister; luddunört; trampört; hjärtstilla; lingon</p>
    };
    const Paragraph4 = () => {
        return <p className={Styles.Paragraph}><strong>Matsmältningssystem:</strong> aloe vera; kvanne; gullris; isop; blåbär; slåttergubbe; nicktistel; en; röllika; citronmeliss; brännässla; nypon; vitplister; mistel; malört; gråbo; hjorttunga; maskros; styvmorsviol; lind; havtorn; islandslav; timjan; kamomill; kalmus; blåklint; rysk martorn; tiggarnöt; flockarun; ringblomma; småborre; brakved; lin; lavendel; gåsört; johannesört; vänderot; mejram; Mariatistel; cikoria; ärenpris; kryddsalvia; kustdaggkåpa; lomme; kransborre; persilja; rödplister; trampört; fackelblomster; såpnejlika; ögontröst; kungsmynta; hjärtstilla; tistelgullfrö; kvickrot; fläcklungört; våtarv; skelört; dansk körvel</p>
    };
    const Paragraph5 = () => {
        return <p className={Styles.Paragraph}><strong>Nervsystem:</strong> citronmeliss; gråbo; hagtorn; islandslav; kamomill; gullviva; tiggarnöt; ringblomma; lin; lavendel; vänderot; mejram; vårtbjörk; Johannesört; kryddsalvia; kungsmynta; hjärtstilla; kvickrot; järnört; skelört</p>
    };
    const Paragraph6 = () => {
        return <p className={Styles.Paragraph}><strong>Muskelsystem:</strong> slåttergubbe; stor kardborre; vallört; timjan; vänderot; vårtbjörk; persilja; hjärtstilla</p>
    };
    const Paragraph7 = () => {
        return <p className={Styles.Paragraph}><strong>Utsöndringssystem:</strong> gullris; stor kardborre; nicktistel; röllika; brännässla; nypon; vitplister; maskros; styvmorsviol; kamomill; tiggarnöt; luddunört; småborre; gåsört; vildhallonblad; cikoria; vårtbjörk; persilja; rödplister; trampört; älgört; såpnejlika; tistelgullfrö; kvickrot; åsnetörne; fläcklungört; lingon; en; dansk körvel; åkerfräke</p>
    };
    const Paragraph8 = () => {
        return <p className={Styles.Paragraph}><strong>Syn:</strong> blåbär; blåklint; tiggarnöt; ringblomma; gåsört; ögontröst; groblad; skelört</p>
    };
    const Paragraph9 = () => {
        return <p className={Styles.Paragraph}><strong>Andningssystem:</strong> aloe vera; kvanne; gullris; en; röllika; nypon; citronmeliss; vitplister; mistel; gråbo; hjorttunga; styvmorsviol; lind; havtorn; islandslav; timjan; gullviva; blåklint; rysk martorn; ringblomma; isop; lavendel; mejram; hästhov; ärenpris; groblad; läkemalva; kryddsalvia; ölandskungsljus; kransborre; rödplister; ögontröst; kungsmynta; hjärtstilla; kvickrot; fläcklungört; våtarv; järnört; åkerfräke</p>
    };
    const Paragraph10 = () => {
        return <p className={Styles.Paragraph}><strong>Kvinnligt reproduktionsorgan:</strong> gullris; munkpeppar; en; röllika; vitplister; mistel; gråbo; tiggarnöt; lavendel; gåsört; mejram; vildhallonblad; kustdaggkåpa; lomme; fackelblomster; våtarv; kungsmynta; järnört</p>
    };
    const Paragraph11 = () => {
        return <p className={Styles.Paragraph}><strong>Kardiovaskulärt system:</strong> gullris; blåbär; slåttergubbe; kalmus; munkpeppar; en; citronmeliss; brännässla; vitplister; mistel; gråbo; hagtorn; styvmorsviol; lind; timjan; gullviva; blåklint; tiggarnöt; flockarun; lin; mejram; vildhallonblad; lomme; trampört; hjärtstilla; kvickrot; järnört; skelört; lingon; dansk körvel</p>
    };
    const Paragraph12 = () => {
        return <p className={Styles.Paragraph}><strong>Cancer:</strong> gullris; blåbär; gråbo; maskros; styvmorsviol; kalmus; tiggarnöt; lin; gåsört; persilja; tistelgullfrö; sprängticka; sidenticka</p>
    };

    return(
        <div className={Styles.HerbsForHumansWrapperView}>
            <h1 className={Styles.Title}>ÖRTER TILL MÄNNISKANS TJÄNST</h1>
            <div className={Styles.HerbInfoView}>
                <p className={Styles.Paragraph}>I tusentals år har örter använts för hälsa och läkedom.</p>
                <p className={Styles.Paragraph}>Örter kan användas på många olika sätt:</p>
                <div>
                    <li className={Styles.Paragraph}>Färskt eller tillagad i mat</li>
                    <li className={Styles.Paragraph}>Örtte</li>
                    <li className={Styles.Paragraph}>Dekokt</li>
                    <li className={Styles.Paragraph}>Örtextrakt</li>
                    <li className={Styles.Paragraph}>Örtomslag</li>
                    <li className={Styles.Paragraph}>Eterisk olja</li>
                    <li className={Styles.Paragraph}>Salva</li>
                    <li className={Styles.Paragraph}>Inhalation</li>
                    <li className={Styles.Paragraph}>Fotbad</li>
                    <li className={Styles.Paragraph}>Bastubad</li>
                    <li className={Styles.Paragraph}>Övriga behandlingar med vattenånga</li>
                </div>
                <p className={Styles.Paragraph}>Skörda örterna under soliga dagar för bästa effekt. Ta också vara på ”ogräset” i din trädgård, mycket av det är både nyttigt och gott. </p>
            </div>
            
            <hr className={Styles.LineBreak}/>
            <h1 className={Styles.Title}>KLASSIFICERING AV ÖRTER EFTER ANVÄNDNINGSOMRÅDE</h1>
            <ZigZag contentData={[ Paragraph1, Paragraph2, Paragraph3, Paragraph4, Paragraph5, Paragraph6, Paragraph7, Paragraph8, Paragraph9, Paragraph10, Paragraph11, Paragraph12 ]}/>
            
        </div>
    )
};

export default HerbsForHumansWrapper;