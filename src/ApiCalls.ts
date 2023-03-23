
import { ClientSettings, ClientSetting } from './ClientSettings';
import { ManagerSettings, ManagerSetting } from './ManagerSettings';


export function getClientSettings(clientId:Number):ClientSettings {
    var clientSettings:ClientSettings = {
      clientId: clientId,
      settings: new Map<String, ClientSetting>()
    };
    
    clientSettings.settings.set("Promotions", {
      name: "TimeFrame",
      description: "Select a time frame/period.",
      default: "1:day"
    });
  
    clientSettings.settings.set("Recognitions", {
      name: "TimeFrame",
      description: "Select a time frame/period.",
      default: "1:day"
    });
  
    return clientSettings;
}
  
  
  export function getManagerSettings(clientId:Number, employeeUid: Number):ManagerSettings {
    var managerSettings:ManagerSettings = {
      clientId: clientId,
      employeeUid: employeeUid,
      settings: new Map<String, ManagerSetting>()
    };
    
    managerSettings.settings.set("Promotions", {
      timeFrame: "2:week"
    });
  
    managerSettings.settings.set("Recognitions", {
      timeFrame: "4:month"
    });
  
    return managerSettings;
}