import { Fragment } from 'react';
import { ClientSettings } from './ClientSettings';
import { ManagerSettings } from './ManagerSettings';

interface IGreetingProps {
    clientSettings: ClientSettings
    managerSettings: ManagerSettings
};
  
const ManagerSettingsCard = ({clientSettings, managerSettings}: IGreetingProps) => {
    let elements: JSX.Element[] = [];
    clientSettings.settings.forEach((item, key) => {
        var managerEntry = managerSettings.settings.get(key);
        elements.push(
            <Fragment>
                <h2>{key}</h2>
                <h3>{item.description}</h3>
                <input title={item.name} type="text" value={managerEntry?.timeFrame}></input>
            </Fragment>
        )
    })
    return (<>{elements}</>)
};

export default ManagerSettingsCard;