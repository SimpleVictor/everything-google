import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";

@Component({
    directives: [ROUTER_DIRECTIVES , MD_BUTTON_DIRECTIVES],
    selector: 'my-drive',
    styleUrls: ['./client/components/drive/drive.component.css'],
    templateUrl: './client/components/drive/drive.component.html'
})
export class DriveComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
