import { Injectable } from '@angular/core';
import { Http } from "@angular/http";
import { technologyListUrl,menuUrl } from './../../../api.config';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TechnologyService {
constructor(private http:Http){}
private handleError(error: any) {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

public getTechnologyItems():Promise<any> {
  return this.http.get(technologyListUrl).toPromise().then(response=>{
      return response.json();
    })
    .catch(this.handleError);
  };
}
