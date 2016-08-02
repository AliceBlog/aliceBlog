import { RouterConfig, provideRouter } from "@angular/router";
import { Pages } from "./component/pages.component";


export const routers:RouterConfig = [
    {path: '**', redirectTo: '/pages'},
    {
        path: 'pages', component: Pages,
    }
];

export const APP_ROUTER_DIRECTIVES = [
    provideRouter(routers),
];