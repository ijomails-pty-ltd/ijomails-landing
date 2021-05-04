import { Component, OnInit } from '@angular/core';
class Image {
    img: string;
}
@Component({
    selector: 'app-app-about',
    templateUrl: './app-about.component.html',
    styleUrls: ['./app-about.component.scss']
})
export class AppAboutComponent implements OnInit {

    aboutImage: Image[] = [
        {
            img: 'assets/img/app-about.png'
        }
    ];
    aboutContent = [
        {
            title: 'ijomails mission',
            paragraphList: [
                {
                    paragraph: 'We streamline the process of mailing and money transfer for everyone and make the process less complicated and secured. Our designed platforms will serve the needs of our clients and provide them with the best service experience to suit their needs, whether they need to make some payments, create invoice, create reminder, request payment, among other transactions.',
                },
                {
                    paragraph: 'It is our dream to become the most sought mailing platform that is widely used all over the world. We leverage our extensive mobile billing and payment experience to create innovative new payment solutions for a global market of telecommunications, financial, and payment entrepreneurs. We collaborate with a network of local channel partners, joint-ventures, and innovative businesses to deliver our solutions.',
                }
            ],
            featuresList: [
                {
                    itemIcon: 'las la-check',
                    item: 'Creative Design'
                },
                {
                    itemIcon: 'las la-check',
                    item: 'Retina Ready'
                },
                {
                    itemIcon: 'las la-check',
                    item: 'Modern Design'
                },
                {
                    itemIcon: 'las la-check',
                    item: 'Direct Payments'
                },
                {
                    itemIcon: 'las la-check',
                    item: 'Document Scanning'
                },
                {
                    itemIcon: 'las la-check',
                    item: 'Add Favourite Contact'
                },
                {
                    itemIcon: 'las la-check',
                    item: 'Camera Filter'
                }
            ]
        }
    ];
    constructor() { }

    ngOnInit(): void {
    }


}
