import Styles from "./HealthList.module.css";

const HealthList = ({
    setWaterExpanded,
    setTemperanceExpanded,
    setExersiceExpanded,
    setSunshineExpanded,
    setRestExpanded,
    setTrustInGodExpanded,
    setAirExpanded,
    setNutritionExpanded
} : {
    setWaterExpanded: React.Dispatch<React.SetStateAction<boolean>>
    setTemperanceExpanded: React.Dispatch<React.SetStateAction<boolean>>
    setExersiceExpanded: React.Dispatch<React.SetStateAction<boolean>>
    setSunshineExpanded: React.Dispatch<React.SetStateAction<boolean>>
    setRestExpanded: React.Dispatch<React.SetStateAction<boolean>>
    setTrustInGodExpanded: React.Dispatch<React.SetStateAction<boolean>>
    setAirExpanded: React.Dispatch<React.SetStateAction<boolean>>
    setNutritionExpanded: React.Dispatch<React.SetStateAction<boolean>>
}) => {
    return (
        <div className={Styles.HealthListView}>

            <div className={Styles.DropdownView}>
                <a className={Styles.Key1Column} href="#water" onClick={() => {setWaterExpanded(true)}}>
                    <h1 className={Styles.KeyCharacter}>V</h1>
                    <p className={Styles.Key1Title}>{" - Vatten"}</p>
                </a>
                <a className={Styles.Key2Column} href="#temperance" onClick={() => {setTemperanceExpanded(true)}}>
                    <h1 className={Styles.KeyCharacter}>A</h1>
                    <p className={Styles.Key2Title}>{" - Avhållsamhet"}</p>
                </a>
                <a className={Styles.Key3Column} href="#exersice" onClick={() => {setExersiceExpanded(true)}}>
                    <h1 className={Styles.KeyCharacter}>R</h1>
                    <p className={Styles.Key3Title}>{" - Rörelse"}</p>
                </a>
                <a className={Styles.Key4Column} href="#sunshine" onClick={() => {setSunshineExpanded(true)}}>
                    <h1 className={Styles.KeyCharacter}>S</h1>
                    <p className={Styles.Key4Title}>{" - Solsken"}</p>
                </a>
                <a className={Styles.Key5Column} href="#rest" onClick={() => {setRestExpanded(true)}}>
                    <h1 className={Styles.KeyCharacter}>Å</h1>
                    <p className={Styles.Key5Title}>{" - Återhämtning"}</p>
                </a>
                <a className={Styles.Key6Column} href="#trust-in-god" onClick={() => {setTrustInGodExpanded(true)}}>
                    <h1 className={Styles.KeyCharacter}>G</h1>
                    <p className={Styles.Key6Title}>{" - Gudsförtröstan"}</p>
                </a>
                <a className={Styles.Key7Column} href="#air" onClick={() => {setAirExpanded(true)}}>
                    <h1 className={Styles.KeyCharacter}>O</h1>
                    <p className={Styles.Key7Title}> - O<sub>2</sub> {"(syre)"}</p>
                </a>
                <a className={Styles.Key8Column} href="#nurtrition" onClick={() => {setNutritionExpanded(true)}}>
                    <h1 className={Styles.KeyCharacter}>D</h1>
                    <p className={Styles.Key8Title}>{" - Diet"}</p>
                </a>
            </div>

            <div className={Styles.OrdinaryView}>
                <a className={Styles.OrdinaryKey} href="#water" onClick={() => {setWaterExpanded(true)}}> {"Vatten"} </a>
                <a className={Styles.OrdinaryKey} href="#temperance" onClick={() => {setTemperanceExpanded(true)}}> {"Avhållsamhet"} </a>
                <a className={Styles.OrdinaryKey} href="#exersice" onClick={() => {setExersiceExpanded(true)}}> {"Rörelse"} </a>
                <a className={Styles.OrdinaryKey} href="#sunshine" onClick={() => {setSunshineExpanded(true)}}> {"Solsken"} </a>
                <a className={Styles.OrdinaryKey} href="#rest" onClick={() => {setRestExpanded(true)}}> {"Återhämtning"} </a>
                <a className={Styles.OrdinaryKey} href="#trust-in-god" onClick={() => {setTrustInGodExpanded(true)}}> {"Gudsförtröstan"} </a>
                <a className={Styles.OrdinaryKey} href="#air" onClick={() => {setAirExpanded(true)}}> O<sub>2</sub> {"(syre)"} </a>
                <a className={Styles.OrdinaryKey} href="#nurtrition" onClick={() => {setNutritionExpanded(true)}}> {"Diet"} </a>
            </div>
        </div>
    )
};

export default HealthList;