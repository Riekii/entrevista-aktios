import { Injectable } from '@angular/core';
import { personDTO } from 'src/interface/empleado-dto';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  public compareBirthday(a:personDTO, b:personDTO) {
    const dateA = new Date(a.datebirthday);
    const dateB = new Date(b.datebirthday);
    return dateA.getTime() - dateB.getTime();
  };

  // Recupera las fotos de los usuarios. Si no tiene, pone una por fecto
  public getImage(url: string | undefined) {
    const rutaImagen = 'assets/profiles/default.jpeg';
    const imagen = new Image();
    if(url){
      imagen.src = url;
      if (imagen.complete) {
        return url;
      } else {
        return rutaImagen;
      }
    }
    else{
      return rutaImagen;
    }
  }

  public checkAge(fecha: Date): number {
    const hoy: Date = new Date();
    fecha = new Date(fecha);
    let edad: number = hoy.getFullYear() - fecha.getFullYear();
    if (
      hoy.getMonth() < fecha.getMonth() ||
      (hoy.getMonth() === fecha.getMonth() &&
        hoy.getDate() < fecha.getDate())
    ) {
      edad--;
    }
    return edad;
  }

}
