import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";

@Component({
    directives: [ROUTER_DIRECTIVES , MD_BUTTON_DIRECTIVES],
    selector: 'my-map',
    styleUrls: ['./client/components/map/map.component.css'],
    templateUrl: './client/components/map/map.component.html'
})
export class MapComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
