import { Injectable } from '@angular/core';
import { MenusModel } from './menus.model';
import { Http } from "@angular/http";
import { menuUrl } from './../../api.config';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class MenusService {
constructor(private http:Http){}
private handleError(error: any) {
  console.error('An error occurred', error);
  return Promise.reject(error.message || error);
}

public getMenuItems():Promise<MenusModel[]> {
  return this.http.get(menuUrl).toPromise().then(response=>{
      return response.json();
    })
    .catch(this.handleError);
  };
}
