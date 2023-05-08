import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonCardComponent } from './person-card/person-card.component';
import { PersonDetailComponent } from './person-detail/person-detail.component';



@NgModule({
  declarations: [
    PersonCardComponent,
    PersonDetailComponent  
  ],
  imports: [
    CommonModule
  ]
})
export class PersonModule { }
