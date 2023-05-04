import { HttpErrorResponse, HttpHeaders, HttpParams } from "@angular/common/http";

export type WsSuccesssFunction<T> = (resp: T) => void;

export type WsErrorFunction<T> = (resp: T | null, err: HttpErrorResponse | null) => void;
