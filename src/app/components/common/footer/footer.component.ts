import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    copyrightText: Text[] = [
        {
            text: '2020 Nial. All Rights Reserved by HiBootstrap.com'
        }
    ]

}
class Text {
    text : string;
}