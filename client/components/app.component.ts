import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";
import {MD_MENU_DIRECTIVES} from "@angular2-material/menu/menu";
import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar/toolbar";
import {MD_TABS_DIRECTIVES} from "@angular2-material/tabs/tabs";
import {MD_GRID_LIST_DIRECTIVES} from "@angular2-material/grid-list/grid-list";

@Component({
    directives: [ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_TABS_DIRECTIVES, MD_GRID_LIST_DIRECTIVES],
    styleUrls: ['./client/components/app.component.css'],
    selector: "app",
    templateUrl: "./client/components/app.component.html"
})
export class AppComponent {
    constructor(){

    }


}
