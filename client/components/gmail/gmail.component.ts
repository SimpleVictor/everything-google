import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";

@Component({
    directives: [ROUTER_DIRECTIVES , MD_BUTTON_DIRECTIVES],
    selector: 'my-gmail',
    styleUrls: ['./client/components/gmail/gmail.component.css'],
    templateUrl: './client/components/gmail/gmail.component.html'
})
export class GmailComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
