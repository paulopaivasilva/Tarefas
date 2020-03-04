import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../component/modal/modal.component';
import { Storage } from '@ionic/storage';
import * as moment from 'moment';
import 'moment/locale/pt-br';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})


export class HomePage implements OnInit {

  constructor(public modal: ModalController, private storage: Storage) {}

  tasks = []
  private async callModal(){
    const modal = await this.modal.create({
      component: ModalComponent
    })
    modal.onDidDismiss().then(() => this.getTasks())
    return await modal.present()
  }

  ngOnInit() {
    this.getTasks()
  }

  public getTasks (){
    this.tasks = []
    this.storage.get('tasks').then((item) => {
      if(item){
        item.map((task, i) => {
          task = JSON.parse(task)
          if(task.day == moment().format('dddd')){
            this.tasks.push(task)
          }
        })
      }
    })
  }
}
