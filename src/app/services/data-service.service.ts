import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable()
export class DataService {

  constructor(private storage: Storage) { }

  public setTask(task){
    task = JSON.parse(task)
    this.storage.set("task", task)
  }

  public getTasks(){

  }

}
