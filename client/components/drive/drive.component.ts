import { Component, OnInit } from '@angular/core';
import {ROUTER_DIRECTIVES} from "@angular/router";
import {MD_BUTTON_DIRECTIVES} from "@angular2-material/button/button";
import {GoogleService} from "../../service/google.service";
import {Http, Response} from "@angular/http";

@Component({
    directives: [ROUTER_DIRECTIVES , MD_BUTTON_DIRECTIVES],
    selector: 'my-drive',
    styleUrls: ['./client/components/drive/drive.component.css'],
    templateUrl: './client/components/drive/drive.component.html'
})
export class DriveComponent implements OnInit {
    myToken;
    myProfile;
    myFolderID;

    constructor(private _http: Http,private _googleService: GoogleService) { }

    ngOnInit() {
        this.myToken = this._googleService.GlobalToken;
        this.myProfile = this._googleService.GlobalProfile;
        if(this.myToken){
            let myResults = this._http.get('https://www.googleapis.com/drive/v2/files/?access_token='+this.myToken).map((response:Response) => response.json()).subscribe((data) => {
                console.log(data);
                this.myFolderID = data.items[0].id;
                console.log(this.myFolderID);
                return data;
            })
        }
    }

}
