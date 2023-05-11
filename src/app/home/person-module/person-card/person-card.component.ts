import { Component, Input, OnInit} from '@angular/core';
import { UtilsService } from 'src/app/utils/utils.service';
import { personDTO } from 'src/interface/empleado-dto';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})

export class PersonCardComponent  implements OnInit {

  @Input('person') person!: personDTO;
  
  constructor(
    public readonly utils: UtilsService
  ) { }

  ngOnInit() {
  }



}
