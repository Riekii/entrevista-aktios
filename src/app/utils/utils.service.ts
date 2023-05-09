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

}
