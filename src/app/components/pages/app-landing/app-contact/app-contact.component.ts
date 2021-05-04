import { Component, OnInit } from '@angular/core';
class SectionTitleContent {
    title: string;
    paragraphText: string;
}
class Image {
    img: string;
}

@Component({
    selector: 'app-app-contact',
    templateUrl: './app-contact.component.html',
    styleUrls: ['./app-contact.component.scss']
})
export class AppContactComponent implements OnInit {


    sectionTitle: SectionTitleContent[] = [
        {
            title: 'Get In Touch With Us',
            paragraphText: 'For more informations, questions or any related quiries.'
        }
    ];
    contactImage: Image[] = [
        {
            img: 'assets/img/app-contact.png'
        }
    ];
    constructor() { }

    ngOnInit(): void {
    }

}
