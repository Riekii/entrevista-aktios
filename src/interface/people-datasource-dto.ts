export interface PeopleDatasource {
    data: Data;
}

export interface Data {
    sex:      Language[];
    language: Language[];
    country:  Country[];
}

export interface Country {
    id:          number;
    description: string;
    prefix:      number;
    language:    string;
}

export interface Language {
    id:          number;
    key:         string;
    description: string;
}
