import { Component, OnInit, Input } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { Storage } from '@ionic/storage';
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

  constructor(private storage: Storage) { }
  
  @Input() tasks =  Array()
  @Input() getTasks: Function

  day = moment().locale('pt-br').format('dddd')

  ngOnInit() {}

  checkTask(id){
    this.tasks.map(item => {
      if(item[id] === id){
        //item.status = !item[status]
      }
    })
  }

  excludeTask(id){
    let jsonArray = Array()
    if(this.tasks.length < 2){
      this.storage.remove('tasks')
    }else if(this.tasks.length > 1) {
      this.tasks.map((item, i) => {
        if(item.id !== id){
          jsonArray.push(JSON.stringify(item))
        }
      })
      this.storage.set('tasks', jsonArray)
    }
    this.getTasks()
  }

}
