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

}
