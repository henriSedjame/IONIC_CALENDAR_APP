export class Evenement {
  public title: string;
  public startTime: string;
  public endTime: string;
  public allDay: boolean;

  constructor(title?:string, start?:string, end?:string, allDay?: boolean){
    this.title = title;
    this.startTime = start;
    this.endTime = end;
    this.allDay = allDay;
  }
}
