import {Component, OnInit} from '@angular/core';
import {AlertController, ModalController, NavController} from "@ionic/angular";
import {Calendar} from "../models/calendar";
import {Mode} from "../models/enums/mode.enum";
import {EventModalPage} from "../event-modal/event-modal.page";
import * as moment from 'moment';
import {Evenement} from "../models/event";
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  /**
   * ATTRIBUTS
   */

  eventSource = [];
  viewTitle: String;
  selectedDay = new Date();
  calendar: Calendar = new Calendar(Mode.MONTH, this.selectedDay);

  /**
   * CONSTRUCTEUR
   *
   */
  constructor(private navCtrl: NavController,
              private modalCtrl: ModalController,
              private alertCtrl: AlertController){
  }

  /**
   * METHODES
   */

  ngOnInit(): void {
  }

  addEvent(){
    this.modal();
  }

  onEventSelected(event){
    let start = moment(event.startTime).format('LLLL');
    let end = moment(event.endTime).format('LLLL');

    this.alert(event.title, 'From: ' + start + '</br> To :' + end , '');
  }

  onViewTitleChanged(title){
    this.viewTitle = title;
  }

  onTimeSelected(event){
    this.selectedDay = event.selectedTime;
  }

  async modal(){
    let modal = await this.modalCtrl.create({
        component: EventModalPage,
        componentProps: {
          selectedDay: this.selectedDay
        }
    });
     modal.present()

    modal.onDidDismiss().then(loadData => {
      if(loadData){
        let eventData = loadData.data;
        eventData.startTime = new Date(loadData.data.startTime);
        eventData.endTime = new Date(loadData.data.endTime);

        let events = this.eventSource;
        events.push(eventData);
        this.eventSource = [];
        setTimeout(() => {
          this.eventSource = events;
        })
      }
    })
  }

  async alert(title: string, subTitle: string, message: string){
    let alert = await this.alertCtrl.create(
      {
        header: title,
        subHeader: subTitle,
        message: message,
        animated: true,
        buttons: [
          {
           text: 'OK',
            handler: value => {alert.dismiss()}
          }
        ]
      }
    );

    alert.present();
  }

}
