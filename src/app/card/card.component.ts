import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@NgModule({
  imports:[
    CommonModule,
    FormsModule,
    IonicModule
  ]
})

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {

  constructor() { }
  
  @Input() tasks: []
  day = moment().locale('pt-br').format('dddd')

  ngOnInit() {}

  checkTask(id){
    this.tasks.map(item => {
      if(item[id] === id){
        //item.status = !item[status]
      }
    })
  }

}
