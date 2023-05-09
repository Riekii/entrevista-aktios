import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';
import { personDTO, populationDTO, populationListDTO } from 'src/interface/empleado-dto';
import { UtilsService } from '../utils/utils.service';
import { ModalController } from '@ionic/angular';
import { PersonDetailComponent } from './person-module/person-detail/person-detail.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public personList?:personDTO[] = [];

  public itemsLeft: boolean = true;

  public offset = 1;
  public pageItems = 5;
  public maxItems = 0; 

  public searchTerm!: string;
  public searching:boolean = false;

  constructor(
    private empleadosService: EmpleadosService,
    private utils: UtilsService,
    private modalCtrl: ModalController,
  ) {}

  ngOnInit(): void {
    this.getPopulation();
  }

  // Recoge todos los empleados
  getPopulation(){
    this.empleadosService.getPopulation(
      (resp: populationListDTO)=>{
        let persons = resp.population.person;
        this.maxItems = persons.length;
        // Ordena por fecha de cumpleaños
        persons.sort(this.utils.compareBirthday)
        if(this.searchTerm){
          persons = this.search(this.searchTerm, persons);
          this.searching = true;
          this.maxItems = persons.length;
        }
        else{
          this.searching = false;
        }
        this.maxItems = persons.length;
        this.personList = persons.slice(0, this.offset*this.pageItems);
    },(err: any)=>{
        console.error('Service error: ',err)
    });
  }

  // Función para cargar mas cartas
  loadMoreCards(event?: any){
    if((this.offset*this.pageItems)<this.maxItems){
      this.offset = this.offset+1;
      this.getPopulation();
    }
    else{ this.itemsLeft = false; }
    event.target.complete()
  }

  // Filtro del array (Normalmente se enviaría al servicio y debería devolverlo filtrado)
  search(term: string, persons: Array<personDTO>){
      return persons.filter(person => {
        let nameMatch = person.name.toLowerCase().includes(term.toLowerCase());
        let surnameMatch = person.surname.toLowerCase().includes(term.toLowerCase());
        let surname2Match = person.surname2.toLowerCase().includes(term.toLowerCase());
        let country = person.countryDescription?.toLowerCase().includes(term.toLowerCase());
        let dateMatch = person.datebirthday && (new Date(person.datebirthday).getFullYear().toString() === term || new Date(person.datebirthday).toLocaleDateString('es-ES').includes(term));;          
        return nameMatch || surnameMatch || surname2Match || dateMatch || country;
      });
  }

  async openCard(person: personDTO){
    const modal = await this.modalCtrl.create({
      component: PersonDetailComponent,
      cssClass: 'my-custom-modal-class',
      componentProps: { 
        person: person
      }
    });
    await modal.present()
  }

}
