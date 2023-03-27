export class MetricSettings {
    clientId: Number;
    employeeUid: Number;
    settings: Map<String, MetricSetting>;
  
    constructor() {
      this.clientId = 0;
      this.employeeUid = 0;
      this.settings = new Map<String, MetricSetting>();
    }
}
  
  export class MetricSetting {
    timeFrame: string;
    
    constructor() {
      this.timeFrame = "";
    }
}