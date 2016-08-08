/// <reference path="../typings/index.d.ts" />
import { bootstrap } from '@angular/platform-browser-dynamic';
import { Type, enableProdMode } from "@angular/core";
import { HTTP_PROVIDERS } from "@angular/http";
import {Overlay} from "@angular2-material/core/core";

enableProdMode();

import { AppComponent } from "./components/app.component";
import { APP_ROUTER_PROVIDERS } from "./routes";
import {GoogleService} from "./service/google.service";

bootstrap(<Type>AppComponent, [
	APP_ROUTER_PROVIDERS,
	// MATERIAL_BROWSER_PROVIDERS,
	GoogleService,
	Overlay,
	HTTP_PROVIDERS
]);
