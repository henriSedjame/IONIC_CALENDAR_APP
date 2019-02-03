import {Component, Input, OnInit} from '@angular/core';
import {Evenement} from "../models/event";
import {ModalController, NavController} from "@ionic/angular";
import * as moment from "moment";

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.page.html',
  styleUrls: ['./event-modal.page.scss']
})
export class EventModalPage implements OnInit {

  @Input()selectedDay: any;
  event: Evenement = new Evenement('', new Date().toISOString(), new Date().toISOString(), false );

  constructor(private navCtrl: NavController,
              private modalCtrl: ModalController) {}

  ngOnInit() {
    let preSelectedDate = moment(this.selectedDay).format();
    this.event.startTime = preSelectedDate;
    this.event.endTime = preSelectedDate;

  }

  save(){
    this.modalCtrl.dismiss(this.event)
  }

}
