import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';
import { personDTO, populationDTO, populationListDTO } from 'src/interface/empleado-dto';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public personList?:personDTO[] = [];

  constructor(
    private empleadosService: EmpleadosService
  ) {}

  ngOnInit(): void {
    this.empleadosService.getPopulation(
      (resp: populationListDTO)=>{
        this.personList = resp.population.person;
        console.warn(this.personList)
    },(err: any)=>{
        console.error('Service error: ',err)
    });
  }


}
