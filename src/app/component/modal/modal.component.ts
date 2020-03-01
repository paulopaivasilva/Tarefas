import { Component, OnInit, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { DataService } from '../../services/data-service.service'
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

  constructor(private modal: ModalController, private data: DataService ) { }

  task = {title: "", description: null, hour: "", day: ""}
  daysOfWeek = ["Segunda-feira", "Terça-feira", "Quarta-feira", "Quinta-feira", "Sexta-feira", "Sábado", "Domingo"]
  errors = null

  ngOnInit() {}

  addTask(){
    this.task.hour = moment(this.task.hour).format('HH:mm')
    if(this.task.title == "" || this.task.hour == "" || this.task.hour == "Invalid date" || this.task.day == ""){
      this.errors = "Os campos obrigatórios não podem ficar em branco"
    }else{
      this.data.setTask(this.task)
    }
  }

  dismiss(){
    this.modal.dismiss(console.log("Fechou"))
  }

}
