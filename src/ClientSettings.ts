export class ClientSettings {
    clientId: Number;
    settings: Map<String, ClientSetting>;

    constructor() {
        this.clientId = 0;
        this.settings = new Map<String, ClientSetting>();
    }
}
  
export class ClientSetting {
    name: string;
    description: string;
    default: string;
  
    constructor() {
      this.name = "";
      this.description = "";
      this.default = ""
    }
}

export default ClientSettings;