import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

import { Encounter } from '../models';

@Injectable()
export default class EncountersService {

  ENCOUNTERS_JSON = 'https://red-wdp-api.herokuapp.com/api/mars/encounters';

  constructor(private http: Http) { }

  getEncounters(): Observable<Encounter[]> {
    return this.http
                .get(this.ENCOUNTERS_JSON)
                .map((res: Response) => res.json().encounters);
  }
22
}
