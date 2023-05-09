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
    sex:              string;
    sexDescription?:   string;
    "country-id":     number;
    countryDescription?:  string;
    language?: string;
    phone:            string;
    datebirthday:     Date;
    lastModification?: Date;
    photoUrl?: string;
}