import { Component, OnInit } from '@angular/core';
import { EmpleadosService } from '../services/empleados.service';
import { personDTO, populationDTO, populationListDTO } from 'src/interface/empleado-dto';
import { UtilsService } from '../utils/utils.service';
import { ModalController } from '@ionic/angular';
import { PersonDetailComponent } from './person-module/person-detail/person-detail.component';
import { TranslateService } from '../services/translate.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public personList?: personDTO[] = [];

  public itemsLeft: boolean = true;

  public offset = 1;
  public pageItems = 5;
  public maxItems = 0;

  public desktop = true;

  public searchTerm!: string;
  public searching: boolean = false;

  public personChoosed!: personDTO;

  constructor(
    private empleadosService: EmpleadosService,
    private utils: UtilsService,
    private modalCtrl: ModalController,
    private translate: TranslateService
  ) {
    let screenWidth = window.innerWidth;
    if(screenWidth < 576){this.desktop = false;} else{this.pageItems = 8}
  }

  ngOnInit(): void {
    this.getPopulation();
  }

  // Recoge todos los empleados
  getPopulation() {
    this.empleadosService.getPopulation(
      (resp: populationListDTO) => {
        let persons = resp.population.person;
        this.maxItems = persons.length;
        // Ordena por fecha de cumpleaños
        persons.sort(this.utils.compareBirthday);
        // Búsqueda de usuario
        if (this.searchTerm) {
          persons = this.search(this.searchTerm, persons);
          this.searching = true;
        }
        else {
          this.searching = false;
        }
        // Si se borran los criterios de busqueda, vuelve a filtrarlo esde 0
        if (!this.searchTerm) {
          this.searching = false;
          this.itemsLeft = true;
        }
        this.maxItems = persons.length;
        this.personList = persons.slice(0, this.offset * this.pageItems);
      }, (err: any) => {
        console.error('Service error: ', err)
      });
  }

  // Función para cargar mas cartas
  loadMoreCards(event?: any) {
    // Timeout de prueba para ver la carga
    if ((this.offset * this.pageItems) < this.maxItems) {
      setTimeout(() => {
        this.offset = this.offset+1;
        this.getPopulation();
    }, 400)

    }
    else { this.itemsLeft = false; };
    setTimeout(() => {
      event.target.complete();
    }, 400);
  }

  // Filtro del array (Normalmente se enviaría al servicio y debería devolverlo filtrado)
  search(term: string, persons: Array<personDTO>) {
    return persons.filter(person => {
      let nameMatch = person.name.toLowerCase().includes(term.toLowerCase());
      let surnameMatch = person.surname.toLowerCase().includes(term.toLowerCase());
      let surname2Match = person.surname2.toLowerCase().includes(term.toLowerCase());
      let country = person.countryDescription?.toLowerCase().includes(term.toLowerCase());
      let dateMatch = person.datebirthday && (new Date(person.datebirthday).getFullYear().toString() === term || new Date(person.datebirthday).toLocaleDateString('es-ES').includes(term));;
      return nameMatch || surnameMatch || surname2Match || dateMatch || country;
    });
  }

  // Abrir el detalle de cada persona
  async openCard(person: personDTO) {
    this.personChoosed = person;
      const modal = await this.modalCtrl.create({
        component: PersonDetailComponent,
        cssClass: 'modalDetail',
        componentProps: {
          person: person,
          desktop: this.desktop
        }
      });
      await modal.present();
  }

}
