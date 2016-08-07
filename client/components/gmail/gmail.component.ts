import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";
import {OVERLAY_PROVIDERS, OverlayState} from "@angular2-material/core/core";
import {MD_CHECKBOX_DIRECTIVES} from "@angular2-material/checkbox/checkbox";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Component({
    directives: [ROUTER_DIRECTIVES , MD_BUTTON_DIRECTIVES],
    selector: 'my-gmail',
    styleUrls: ['./client/components/gmail/gmail.component.css'],
    templateUrl: './client/components/gmail/gmail.component.html',
    providers: [OVERLAY_PROVIDERS, OverlayState]
})
export class GmailComponent implements OnInit {

    constructor(private _http: Http) { }


    ngOnInit() { }

    googleLogin(){
        this._http.get("/auth/google").subscribe(function(){
            console.log("All done");
        });
    }

    testHttp(){
        this._http.get("/testme").subscribe(function(){
           console.log("Finished with test");
        });
    }

}
