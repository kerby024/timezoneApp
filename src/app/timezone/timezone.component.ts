import { Component, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common/src/pipes';
import { getLocaleDateFormat } from '@angular/common/src/i18n/locale_data_api';

@Component({
  selector: 'app-timezone',
  templateUrl: './timezone.component.html',
  styleUrls: ['./timezone.component.css']
})

export class TimezoneComponent implements OnInit {
  today;
  x: boolean;
  y: boolean;
  z: boolean;
  w: boolean;
  onButtonClickEST(){
    this.today = Date.now()+10800000;
    this.x = true;
    this.y = false;
    this.z = false;
    this.w = false;
  }
  onButtonClickCST(){
    this.today = Date.now()+7200000;
    this.y = true;
    this.x = false;
    this.z = false;
    this.w = false;
  }
  onButtonClickMST(){
    this.today = Date.now()+3600000;
    this.z = true;
    this.x = false;
    this.y = false;
    this.w = false;
  }
  onButtonClickPST(){
    this.today = Date.now();
    this.w = true;
    this.x = false;
    this.y = false;
    this.z = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
