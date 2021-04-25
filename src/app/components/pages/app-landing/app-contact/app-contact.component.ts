import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-app-contact',
    templateUrl: './app-contact.component.html',
    styleUrls: ['./app-contact.component.scss']
})
export class AppContactComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    sectionTitle: sectionTitleContent[] = [
        {
            title: 'Get In Touch With Us',
            paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ]
    contactImage: Image[] = [
        {
            img: 'assets/img/app-contact.png'
        }
    ]

}
class sectionTitleContent {
    title : string;
    paragraphText : string;
}
class Image {
    img : string;
}