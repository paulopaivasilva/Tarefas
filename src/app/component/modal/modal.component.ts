import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
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
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

  constructor(private modal: ModalController, private storage: Storage) { }

  task = { id: "", title: "", description: null, hour: "", day: "", status: false }
  daysOfWeek = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"]
  errors = null

  ngOnInit() {}

  dismiss(){
    this.modal.dismiss()
  }

  addTask(){
    this.task.hour = moment(this.task.hour).format('HH:mm')
    this.task.id = this.makeID()
    if(this.task.title == "" || this.task.hour == "" || this.task.hour == "Invalid date" || this.task.day == ""){
      this.errors = "Os campos obrigatórios não podem ficar em branco"
    }else{
      let json = JSON.stringify(this.task)
      this.storage.get('tasks').then(item => {
        if(item){
          item.push(json)
          this.storage.set('tasks', item)
        }else{
          this.storage.set('tasks', [json])
        }
      })
      this.dismiss()
    }
  }

  makeID() {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
  
    for (var i = 0; i < 12; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  
    return text;
  }

}
