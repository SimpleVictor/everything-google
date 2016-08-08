import {Component, OnInit} from "@angular/core";
import { ROUTER_DIRECTIVES } from '@angular/router';
import {MD_CARD_DIRECTIVES} from "@angular2-material/card/card";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";
import {MD_MENU_DIRECTIVES} from "@angular2-material/menu/menu";
import {MD_TOOLBAR_DIRECTIVES} from "@angular2-material/toolbar/toolbar";
import {MD_TABS_DIRECTIVES} from "@angular2-material/tabs/tabs";
import {MD_GRID_LIST_DIRECTIVES} from "@angular2-material/grid-list/grid-list";
import {Http, Response} from "@angular/http";
import {GoogleService} from "../service/google.service";

@Component({
    directives: [ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES, MD_TOOLBAR_DIRECTIVES, MD_TABS_DIRECTIVES, MD_GRID_LIST_DIRECTIVES],
    styleUrls: ['./client/components/app.component.css'],
    selector: "app",
    templateUrl: "./client/components/app.component.html"
})
export class AppComponent implements OnInit{
    loggedIn:boolean;
    username:string;
    token:string;

    constructor(private _http: Http, private _googleService: GoogleService){

    }

    ngOnInit():any{
        this._http.get('/user/authenticate').map((response:Response) => response.json()).subscribe((data) => {
            console.log(data);
            if(data.message === 'User is authenticated'){

                this.loggedIn = true;
                this.username = data.profile.displayName;
                this._googleService.GlobalToken = data.token;
                this._googleService.GlobalProfile = data.profile;
                this.token = data.token;
            }else{
                this.loggedIn = false;
            }
            return console.log(data ? data : data.message);
        }, error => console.log(error));
    }

}
