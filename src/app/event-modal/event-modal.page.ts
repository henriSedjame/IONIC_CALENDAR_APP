import {Component, Input, OnInit} from '@angular/core';
import {Evenement} from "../models/event";
import {ModalController, NavController, NavParams} from "@ionic/angular";
import * as moment from "moment";

@Component({
  selector: 'app-event-modal',
  templateUrl: './event-modal.page.html',
  styleUrls: ['./event-modal.page.scss']
})
export class EventModalPage implements OnInit {

  event: Evenement = new Evenement('', new Date().toISOString(), new Date().toISOString(), false );

  constructor(private navCtrl: NavController,
              private modalCtrl: ModalController,
              private navParams: NavParams) {}

  ngOnInit() {
    let preSelectedDate = moment(this.navParams.get('selectedDay')).format();
    this.event.startTime = preSelectedDate;
    this.event.endTime = preSelectedDate;
  }

  save(){
    this.modalCtrl.dismiss(this.event)
  }

}
