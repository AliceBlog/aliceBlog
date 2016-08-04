import { RouterConfig, provideRouter } from "@angular/router";
import { Pages } from "./component/pages.component";
import { Technology } from "./component/technology";
import { Life } from "./component/life";
import { Works } from "./component/works";
import { About } from "./component/about";
import { Log } from "./component/log";
import { Love } from "./component/love";
import { Message } from "./component/message";
import { Sentiment } from "./component/sentiment";

export const routers: RouterConfig = [
    {
        path: 'pages', component: Pages,
    }, {
        path: 'life', component: Life,
    }, {
        path: 'works', component: Works,
    },{
        path: 'about', component: About,
    }, {
        path: 'log', component: Log,
    }, {
        path: 'love', component: Love,
    }, {
        path: 'message', component: Message,
    }, {
        path: 'sentiment', component: Sentiment,
    }, {
        path: 'technology', component: Technology,
    },  { path: '**', redirectTo: '' },
];

export const APP_ROUTER_DIRECTIVES = [
    provideRouter(routers),
];
