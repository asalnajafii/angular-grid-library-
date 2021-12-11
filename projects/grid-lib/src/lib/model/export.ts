import {BehaviorSubject} from 'rxjs';

export class ExportConfig {
  public icon!: string;
  public iconCustomClass!: string;
  public buttonCustomClass!: string;
  public buttonName!: string;
  public exportResponse: BehaviorSubject<any>;
  constructor(icon: string, iconCustomClass: string, buttonCustomClass: string, buttonName: string) {
    this.icon = icon;
    this.iconCustomClass = iconCustomClass;
    this.buttonCustomClass = buttonCustomClass;
    this.buttonName = buttonName;
    this.exportResponse = new BehaviorSubject<any>('');
  }
}

export class ExportModel {
  format!: string;
  q!: string;
  filter!: string;
  order!: any;
}
