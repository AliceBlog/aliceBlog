import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { ROUTES } from "./app.router";
import { App } from "./app.component";
import { ENV_PROVIDERS } from "../platform/environment";
import { Clock } from "./component/theme/clock/clock.component";
import { BigEye } from "./component/theme/bigEye/bigEye.component";
import { Rain } from "./component/theme/rain/rain.component";
import { PinkTheme } from "./component/theme/pinkTheme/pinkTheme.component";
import { AppState } from "./app.state";
import { Technology } from "./component/technology/technology.component";
import { Sentiment } from "./component/sentiment/sentiment.component";
import { Message } from "./component/message/message.component";
import { Love } from "./component/love/love.component";
import { Log } from "./component/log/log.component";
import { About } from "./component/about/about.component";
import { Works } from "./component/works/works.component";
import { Life } from "./component/life/life.component";

/*
 * Platform and Environment providers/directives/pipes
 */

// App is our top level component

// Application wide providers
const APP_PROVIDERS = [
    AppState
];


@NgModule({
    bootstrap: [App],
    declarations: [
        App,
        Clock,
        BigEye,
        Rain,
        PinkTheme,
        Life,
        Works,
        About,
        Log,
        Love,
        Message,
        Sentiment,
        Technology

    ],
    imports: [ // import Angular's modules
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot(ROUTES, {useHash: true})
    ],
    providers: [ // expose our Services and Providers into Angular's dependency injection
        ENV_PROVIDERS,
        APP_PROVIDERS
    ]
})
export class AppModule {
}
