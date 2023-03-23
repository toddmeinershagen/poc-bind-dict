export class ManagerSettings {
    clientId: Number;
    employeeUid: Number;
    settings: Map<String, ManagerSetting>;
  
    constructor() {
      this.clientId = 0;
      this.employeeUid = 0;
      this.settings = new Map<String, ManagerSetting>();
    }
}
  
  export class ManagerSetting {
    timeFrame: string;
    
    constructor() {
      this.timeFrame = "";
    }
}