import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";
import {OVERLAY_PROVIDERS, OverlayState} from "@angular2-material/core/core";
import {MD_CHECKBOX_DIRECTIVES} from "@angular2-material/checkbox/checkbox";
import {Http, Response} from "@angular/http";
import 'rxjs/Rx';
import {GoogleService} from "../../service/google.service";
import {MD_LIST_DIRECTIVES} from "@angular2-material/list/list";

@Component({
    directives: [ROUTER_DIRECTIVES , MD_BUTTON_DIRECTIVES, MD_LIST_DIRECTIVES],
    selector: 'my-gmail',
    styleUrls: ['./client/components/gmail/gmail.component.css'],
    templateUrl: './client/components/gmail/gmail.component.html',
})
export class GmailComponent implements OnInit {
    myToken;
    myProfile;
    myEmail;

    constructor(private _http: Http, public _googleService: GoogleService) { }


    ngOnInit() {
        this.myProfile = this._googleService.GlobalProfile.id;
        this.myToken = this._googleService.GlobalToken;
        let receivedEmailList = this._http.get('https://www.googleapis.com/gmail/v1/users/'+ this.myProfile+'/threads?access_token='+this.myToken+'&maxResults=6').map((response: Response) => response.json()).subscribe(data => {
            this.myEmail = data.threads;
            return console.log(data);
        });

    }







}
