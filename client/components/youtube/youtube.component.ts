import { Component, OnInit } from '@angular/core';
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";
import {ROUTER_DIRECTIVES} from "@angular/router";

@Component({
    directives: [ROUTER_DIRECTIVES , MD_BUTTON_DIRECTIVES],
    selector: 'my-youtube',
    styleUrls: ['./client/components/youtube/youtube.component.css'],
    templateUrl: './client/components/youtube/youtube.component.html'
})
export class YoutubeComponent implements OnInit {
    constructor() { }

    ngOnInit() { }

}
