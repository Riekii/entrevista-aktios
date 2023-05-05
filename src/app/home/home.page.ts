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

  public offset = 1;
  public pageItems = 5;
  public maxItems = 0;

  constructor(
    private empleadosService: EmpleadosService
  ) {}

  ngOnInit(): void {
    this.getPopulation();
  }

  getPopulation(){
    this.empleadosService.getPopulation(
      (resp: populationListDTO)=>{
        this.maxItems = resp.population.person.length;
        this.personList = resp.population.person.slice(0, this.offset*this.pageItems);
        console.warn(this.offset, this.pageItems)
    },(err: any)=>{
        console.error('Service error: ',err)
    });
  }

  loadMoreCards(event: any){
    if((this.offset*this.pageItems)<this.maxItems){
      this.offset = this.offset+1;
      this.getPopulation();
    }
    event.target.complete();
  }


}
