// Interfaz del tipo de dato de cada empleado
export interface populationListDTO {
    population: populationDTO;
}

export interface populationDTO {
    person: personDTO[];
}

export interface personDTO {
    id:               number;
    name:             string;
    surname:          string;
    surname2:         string;
    sex:              personSexDTO;
    "country-id":     number;
    phone:            string;
    datebirthday:     Date;
    lastModification: Date;
}

export enum personSexDTO {
    H = "H",
    M = "M",
}
