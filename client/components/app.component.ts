import { Component } from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";

@Component({
    directives: [ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES],
    selector: "app",
    templateUrl: "./client/components/app.component.html"
})
export class AppComponent {}
