import { Component, OnInit } from '@angular/core';
class SectionTitleContent {
    title: string;
    paragraphText: string;
}
class FeaturesContent {
    icon: string;
    title: string;
    paragraph: string;
}

@Component({
    selector: 'app-app-features',
    templateUrl: './app-features.component.html',
    styleUrls: ['./app-features.component.scss']
})
export class AppFeaturesComponent implements OnInit {

    sectionTitle: SectionTitleContent[] = [
        {
            title: 'App Features',
            paragraphText: 'ijomails features are packed with paperless solutions.'
        }
    ];
    singleAppFeatures: FeaturesContent[] = [
        {
            icon: 'las la-file-invoice',
            title: 'Invoices',
            paragraph: 'Not just an ordinary invoice,ijomails generate the same on other companies, But it\'s only for your contacts stored in ijomails platform.'
        },
        {
            icon: 'las la-file-invoice-dollar',
            title: 'Billings',
            paragraph: 'Send and Pay bills from our huge number of biller partners with short charges implemented for your convenience.'
        },
        {
            icon: 'las la-money-check',
            title: 'Payments',
            paragraph: 'Request, Sent and Pay directly on your contacts listed on our platform as easy as 1, 2, 3 in very easy steps and fast processing.'
        },
        {
            icon: 'las la-receipt',
            title: 'ePayslips',
            paragraph: 'Payslips are now easy to create with ijomails, All employee can have their payroll right on that day it should as it is now electronically generated.'
        },
        {
            icon: 'las la-envelope-open-text',
            title: 'Mails',
            paragraph: 'Our mailing support with the following types of mail options such letters, basic mail, and even scan your file as mail content.'
        },
        {
            icon: 'las la-expand',
            title: 'Document Scanning',
            paragraph: 'Our advanced mail scanning support can capture any sizes and any type of documents to provide and effortless on creating mail content.'
        }
    ];
    constructor() { }

    ngOnInit(): void {
    }


}
