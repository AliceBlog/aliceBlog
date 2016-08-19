import { Injectable } from "@angular/core";
@Injectable()
export class AppService {

    constructor() {
    }

    fullScreen(isFullWindow) {
        isFullWindow = !isFullWindow;
        return isFullWindow;
    }

}
