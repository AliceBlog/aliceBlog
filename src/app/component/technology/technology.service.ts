import { Injectable } from '@angular/core';
import { Http ,Jsonp} from "@angular/http";
import { technologyListUrl } from './../../../api.config';
import 'rxjs/add/operator/toPromise';
@Injectable()
export class TechnologyService {
constructor(private http:Http,private jsonp: Jsonp){}
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

//   public getTechnologyItems () {
//
//  return this.jsonp
//             .get(technologyListJsonpUrl)
//             .map(request => <string[]> request.json()[0]);
// }
}
