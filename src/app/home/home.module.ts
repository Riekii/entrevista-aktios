import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { PersonCardComponent } from './person-module/person-card/person-card.component';
import { PersonDetailComponent } from './person-module/person-detail/person-detail.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
  ], 
  declarations: [
    HomePage,
    PersonCardComponent,
    PersonDetailComponent
  ]
})
export class HomePageModule {}
