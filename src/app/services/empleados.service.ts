import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WsErrorFunction, WsSuccesssFunction } from '../classes/web-service-utils';
import { populationListDTO } from 'src/interface/empleado-dto';
import { PeopleDatasource } from 'src/interface/people-datasource-dto';
import { UtilsService } from '../utils/utils.service';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(
    private http: HttpClient,
    private utils: UtilsService
  ) { }

  // Llamada para recoger a todos los empleados
  public getPopulation(onSuccess: WsSuccesssFunction<populationListDTO>, onError: WsErrorFunction<populationListDTO>) {
    return this.http.get<populationListDTO>("https://storage.googleapis.com/web-aktios/entrevista-tecnica/info-population.json").subscribe(
      resp => {
        if (resp.population) {
          let persons = resp.population.person;
          this.getPopulationDataSource(respData => {
            let sex = respData.data.sex;
            let country = respData.data.country;
            let language = respData.data.language;
            // Mapeado de las personas para añadir las descripciones que vienen desde el datasource
            persons.map(person => {
              let sexIndex = sex.findIndex(sexList => sexList.key === person.sex);
              person.sexDescription = sex[sexIndex].description;
              let countryIndex = country.findIndex(countryList => countryList.id === person['country-id']);
              person.countryDescription = country[countryIndex].description;
              person.phone = '+'+country[countryIndex].prefix.toString() + person.phone;
              let languageIndex = language.findIndex(languageList => languageList.key === country[countryIndex].language);
              person.language = language[languageIndex].description;
              person.photoUrl = '../assets/profiles/'+person.id+'.jpeg';
            });
            onSuccess(resp)
            }, (errData => {
              // En caso de error (Al ser un json y no tener casuística, está vacío)
            })
          );
        }
        else { onError(resp, null) }
      }
    )
  }

  // Llamada para recoger datasource
  public getPopulationDataSource(onSuccess: WsSuccesssFunction<PeopleDatasource>, onError: WsErrorFunction<PeopleDatasource>) {
    return this.http.get<PeopleDatasource>("https://storage.googleapis.com/web-aktios/entrevista-tecnica/datasource.json").subscribe(
      resp => {
        if (resp.data) { onSuccess(resp) }
        else { onError(resp, null) }
      }
    )
  }
}
