import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map';

import { NewColonist, Colonist } from '../models';

@Injectable()
export default class ColonistsService {

  COLONISTS_JSON = 'https://red-wdp-api.herokuapp.com/api/mars/colonists'

 constructor(private http: Http) { }


submitColonist(colonist:NewColonist): Observable<Colonist> {
 
 const headers = new Headers();
 headers.append('Content-type', 'application/json');

 return this.http.post(this.COLONISTS_JSON, { colonist }, { headers })
                 .map((res: Response) => res.json().colonist);
}
}
