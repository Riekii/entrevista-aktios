import { Component, Input, OnInit} from '@angular/core';
import { personDTO } from 'src/interface/empleado-dto';

@Component({
  selector: 'app-person-card',
  templateUrl: './person-card.component.html',
  styleUrls: ['./person-card.component.scss'],
})

export class PersonCardComponent  implements OnInit {

  @Input('person') person!: personDTO;

  constructor() { }

  ngOnInit() {
    console.warn(this.person)
  }

}
