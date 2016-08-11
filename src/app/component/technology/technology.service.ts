import { Injectable, ElementRef, Renderer } from '@angular/core';
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

  getGlobalObject(): any {
    return window;
  }

  getOwnerDocument(elmRef?: ElementRef): Document {
    return elmRef ? elmRef.nativeElement.ownerDocument : window.document;
  }
  createScript(src: string, renderer: Renderer, elmRef?: ElementRef, callback?: () => void): HTMLScriptElement {
    let script = elmRef ? renderer.createElement(elmRef.nativeElement, 'script', null) :
        this.getOwnerDocument().createElement('script');

    script.type = 'text/javascript';
    script.src = src;
    script.async = true;
    script.charset = 'UTF-8';
    script.id = `rebirth_script_${Math.random()}`;
    if (callback) {
      script.onreadystatechange = script.onload = () => {
        if ((!script.readyState || /loaded|complete/.test(script.readyState))) {
          callback();
        }
      };
    }
    return script;
  }
}
