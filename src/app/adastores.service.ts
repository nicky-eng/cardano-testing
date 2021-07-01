import { HttpClient, HttpHeaders } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';

@Injectable()
export class AdastoresService {
    constructor(
        private http: HttpClient,
        private adastoresService: AdastoresService) {

    }
    getAdastoresData() {
        return this._http.get(
            "https://cardano-directory-back.herokuapp.com/stores/")
            .map(res => res.json())
    }
}