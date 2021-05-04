import { Component, OnInit } from '@angular/core';
class Content {
    title: string;
    paragraph: string;
    button1: string;
    button2: string;
}
class Image {
    img: string;
}

@Component({
  selector: 'app-app-banner',
  templateUrl: './app-banner.component.html',
  styleUrls: ['./app-banner.component.scss']
})
export class AppBannerComponent implements OnInit {

    mainBannerContent: Content[] = [
        {
            title: 'Best Mobile App For Your Business',
            paragraph: 'ijomails vision aims to oust the paper set up of mailing and go digital. We are out to develop into the best electronic mailing process, and most reliable online payment provider among other services. We envisioned us towards developing into a fast-growing global mail processing provider in the world.',
            button1: 'assets/img/store/1.png',
            button2: 'assets/img/store/2.png'
        }
    ];
    bannerImage: Image[] = [
        {
            img: 'assets/img/app-banner.png'
        }
    ];
    constructor() { }

    ngOnInit(): void {
    }


}
