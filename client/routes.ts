import { provideRouter, RouterConfig } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from "@angular/common";
import { Type } from '@angular/core';

import { HomeComponent } from './components/home/home.component';
import {YoutubeComponent} from "./components/youtube/youtube.component";
import {MapComponent} from "./components/map/map.component";
import {GmailComponent} from "./components/gmail/gmail.component";
import {DriveComponent} from "./components/drive/drive.component";

const routes: RouterConfig = [
    { path: 'maps-api', component: MapComponent},
    { path: 'gmail-api', component: GmailComponent },
    { path: 'drive-api', component: DriveComponent },
    { path: 'youtube-api', component: YoutubeComponent },
    { path: '', component: <Type> HomeComponent },
    { path: '**', redirectTo: ''}
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    { provide: LocationStrategy, useClass: HashLocationStrategy }
];
