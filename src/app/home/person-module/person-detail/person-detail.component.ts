import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { UtilsService } from 'src/app/utils/utils.service';
import { personDTO } from 'src/interface/empleado-dto';

@Component({
  selector: 'app-person-detail',
  templateUrl: './person-detail.component.html',
  styleUrls: ['./person-detail.component.scss'],
})
export class PersonDetailComponent {
  public person!: personDTO;

  constructor(
    private modalCtrl: ModalController,
    public readonly utils: UtilsService
  ) {}

  ngOnInit() {
  }

  dismissModal(){
    this.modalCtrl.dismiss()
  }
} 