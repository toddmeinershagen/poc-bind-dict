export class MetricDialogSettings {
    clientId: Number;
    settings: Map<String, MetricDialogSetting>;

    constructor() {
        this.clientId = 0;
        this.settings = new Map<String, MetricDialogSetting>();
    }
}
  
export class MetricDialogSetting {
    name: string;
    description: string;
    options: MetricDialogSettingOption[];
    default: string;
  
    constructor() {
      this.name = "";
      this.description = "";
      this.options = [];
      this.default = ""
    }
}

export class MetricDialogSettingOption {
    id: string;
    text: string;

    constructor() {
        this.id = "";
        this.text = "";
    }
}

export default MetricDialogSettings;