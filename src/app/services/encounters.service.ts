import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Encounter, NewEncounter } from '../models';


@Injectable()
export default class EncountersService {

  ENCOUNTERS_JSON = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

  constructor(private http: Http) { }

  getEncounters(): Observable<Encounter[]> {
    return this.http
                .get(this.ENCOUNTERS_JSON)
                .map((res: Response) => res.json().encounters);
  }

submitEncounter(encounter: NewEncounter): Observable<Encounter> {
  const headers = new Headers();
  headers.append('Content-Type','application/json');

  return this.http.post(this.ENCOUNTERS_JSON, {encounter}, {headers})
                  .map((res: Response) => res.json().encounter);

}

}
