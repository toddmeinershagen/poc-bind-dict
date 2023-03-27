
import { MetricDialogSettings, MetricDialogSetting } from './MetricDialogSettings';
import { MetricSettings, MetricSetting } from './MetricSettings';


export function getClientSettings(clientId:Number):MetricDialogSettings {
    var clientSettings:MetricDialogSettings = {
      clientId: clientId,
      settings: new Map<String, MetricDialogSetting>()
    };
    
    clientSettings.settings.set("Promotions", {
      name: "TimeFrame",
      description: "Select a time frame/period.",
      options: [
        { id: "1:day", text: "1 day" },
        { id: "1:week", text: "1 week" },
        { id: "2:week", text: "2 week" }, 
        { id: "1:month", text: "1 month" },
        { id: "2:month", text: "2 month" },
        { id: "3:month", text: "3 month" },
        { id: "4:month", text: "4 month" },
      ],
      default: "1:day"
    });
  
    clientSettings.settings.set("Recognitions", {
      name: "TimeFrame",
      description: "Select a time frame/period.",
      options: [
        { id: "1:day", text: "1 day" },
        { id: "1:week", text: "1 week" },
        { id: "2:week", text: "2 week" }, 
        { id: "1:month", text: "1 month" },
        { id: "2:month", text: "2 month" },
        { id: "3:month", text: "3 month" },
        { id: "4:month", text: "4 month" },
      ],
      default: "1:day"
    });
  
    return clientSettings;
}
  
  
  export function getManagerSettings(clientId:Number, employeeUid: Number):MetricSettings {
    var managerSettings:MetricSettings = {
      clientId: clientId,
      employeeUid: employeeUid,
      settings: new Map<String, MetricSetting>()
    };
    
    managerSettings.settings.set("Promotions", {
      timeFrame: "2:week"
    });
  
    managerSettings.settings.set("Recognitions", {
      timeFrame: "4:month"
    });
  
    return managerSettings;
}