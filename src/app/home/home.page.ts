import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalComponent } from '../component/modal/modal.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public modal: ModalController) {}

  tasks = []
  private async callModal(){
    const modal = await this.modal.create({
      component: ModalComponent
    })
    return await modal.present()
  }

  ngOnInit() {
    this.getTasks()
  }

  private getTasks (){
    this.tasks.push(
      {id: '1', title: "Limpar a casa", description: null, hour: "09:00", day: "Segunda-feira", status: false},
      {id: '2', title: "Trocar a areia do gato", description: null, hour: "12:00", day: "Sábado", status: false}
    )
  }
}
