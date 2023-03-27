import { MetricDialogSettings } from './MetricDialogSettings';
import { MetricSettings, MetricSetting } from './MetricSettings';
import { getClientSettings, getManagerSettings } from './ApiCalls';
import ManagerSettingsCard from './ManagerSettingsCard';
import './App.css';


function getBindableManagerSettingsFrom(clientSettings:MetricDialogSettings, managerSettings:MetricSettings):MetricSettings {
  let bindableSettings:MetricSettings = {
    clientId: managerSettings.clientId,
    employeeUid: managerSettings.employeeUid,
    settings: new Map<String, MetricSetting>()
  }

  clientSettings.settings.forEach((item, key) => {
    var managerSetting = managerSettings.settings.get(key);
    var setting:MetricSetting = { timeFrame: managerSetting?.timeFrame ?? item.default };
    bindableSettings.settings.set(key, setting)
  });

  return bindableSettings;
}


function displayBindableSettings(bindableSettings:MetricSettings) {
  let json = JSON.stringify(bindableSettings);
  alert(json);
}


function App() {
  let clientId = 213476;
  let employeeUid = 1023234001;
  let clientSettings = getClientSettings(clientId);
  let managerSettings = getManagerSettings(clientId, employeeUid);
  let bindableSettings = getBindableManagerSettingsFrom(clientSettings, managerSettings);

  return (
    <div className="App">
      <ManagerSettingsCard clientSettings={clientSettings} managerSettings={bindableSettings} />
      {/* <button onClick={() => displayBindableSettings(bindableSettings)}>Display</button> */}
    </div>
  );
}

export default App;