import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { WsErrorFunction, WsSuccesssFunction } from '../classes/web-service-utils';
import { populationListDTO } from 'src/interface/empleado-dto';

@Injectable({
  providedIn: 'root'
})
export class EmpleadosService {

  constructor(
    private http: HttpClient
  ) { }

  // Llamada para recoger a todos los empleados
  public getPopulation(onSuccess: WsSuccesssFunction<populationListDTO>, onError: WsErrorFunction<populationListDTO>){
    return this.http.get<populationListDTO>("../assets/json/info-population.json").subscribe(
      resp => {
        if(resp.population){onSuccess(resp)}
        else{onError(resp, null)}
      }
    )
  }
}
