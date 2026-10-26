import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()

export class ServicePersonas {
    constructor(private _http: HttpClient) {}

    getPersonas(): Observable <any> {
        let urlApi = "";
        return this._http.get(urlApi);
    }
}