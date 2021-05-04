import { Component, OnInit } from '@angular/core';
class Image {
    img: string;
}
class Content {
    title: string;
    paragraph: string;
    inputPlaceholder: string;
    buttonText: string;
}

@Component({
    selector: 'app-app-newsletter',
    templateUrl: './app-newsletter.component.html',
    styleUrls: ['./app-newsletter.component.scss']
})
export class AppNewsletterComponent implements OnInit {

    newsletterImage: Image[] = [
        {
            img: 'assets/img/newsletter.png'
        }
    ];
    newsletterContent: Content[] = [
        {
            title: 'Subscribe To Our Newsletter',
            paragraph: 'Subscribe to know more on our latest updates of ijomails app.',
            inputPlaceholder: 'Your Email Address',
            buttonText: 'Subscribe Now'
        }
    ];
    constructor() { }

    ngOnInit(): void {
    }


}
