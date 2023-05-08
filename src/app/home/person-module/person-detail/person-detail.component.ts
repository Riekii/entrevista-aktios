import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { personDTO } from 'src/interface/empleado-dto';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
})
export class PersonDetailComponent {
  public person!: personDTO;

  constructor(
    private modalCtrl: ModalController 
  ) {}

  ngOnInit() {
  }

  dismissModal(){
    this.modalCtrl.dismiss()
  }

  confirm(){

  }
} 