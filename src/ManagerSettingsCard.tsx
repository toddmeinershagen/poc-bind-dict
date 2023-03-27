import { Fragment } from 'react';
import { MetricDialogSettings } from './MetricDialogSettings';
import { MetricSettings } from './MetricSettings';

interface IManagerSettingsCardProps {
    clientSettings: MetricDialogSettings
    managerSettings: MetricSettings
};
  
const ManagerSettingsCard = ({clientSettings, managerSettings}: IManagerSettingsCardProps) => {

    const handleChange = (e:React.ChangeEvent<HTMLSelectElement>, key:String) => {
        alert(`change:  ${key} - ${e.target.value}`)
        var managerEntry = managerSettings.settings.get(key);
        if (managerEntry != null) {
            managerEntry.timeFrame = e.target.value; 
        }
    };

    let elements: JSX.Element[] = [];
    clientSettings.settings.forEach((item, key) => {
        var managerEntry = managerSettings.settings.get(key);
        elements.push(
            <Fragment>
                <h2>{key}</h2>
                <h3>{item.description}</h3>
                <select title={item.description} onChange={(e) => handleChange(e, key)}>
                    { item.options.map(o => <option value={o.id} selected={managerEntry?.timeFrame===o.id}>{o.text}</option>) }
                </select>
            </Fragment>
        )
    })
    return (
        <>
            {elements}
            <button onClick={(e) => alert(JSON.stringify(managerSettings))}>Show Manager Settings</button>
        </>
    )
};

export default ManagerSettingsCard;
