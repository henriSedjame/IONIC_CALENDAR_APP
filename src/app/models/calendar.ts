import {Mode} from "./enums/mode.enum";

export class Calendar {
  public mode: Mode;
  public currentDate: Date;

  constructor(mode: Mode, currentDate: Date){
    this.mode = mode;
    this.currentDate = currentDate;
  }
}
