import Styles from "./HealthList.module.css";

const HealthList = () => {
    return (
        <div className={Styles.HealthListView}>
            <ul>
                <li>
                    {"Vatten"}
                </li>
                <li>
                    {"Avhållsamhet"}
                </li>
                <li>
                    {"Rörelse"}
                </li>
                <li>
                    {"Skolsken"}
                </li>
                <li>
                    {"Återhämtning"}
                </li>
                <li>
                    {"Gudsförtröstan"}
                </li>
                <li>
                    O<sub>2</sub> {"(syre)"}
                </li>
                <li>
                    {"Diet"}
                </li>
            </ul>
        </div>
    )
};

export default HealthList;