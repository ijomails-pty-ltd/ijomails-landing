import { Component, OnInit } from '@angular/core';
class Image {
    img: string;
}
class Content {
    title: string;
    paragraph1: string;
    paragraph2: string;
    button1: string;
    button2: string;
}
@Component({
    selector: 'app-app-download',
    templateUrl: './app-download.component.html',
    styleUrls: ['./app-download.component.scss']
})
export class AppDownloadComponent implements OnInit {

    appDownloadImage: Image[] = [
        {
            img: 'assets/img/why-choose.png'
        }
    ];
    appDownloadContent: Content[] = [
        {
            title: 'Download Our Apps Today',
            paragraph1: 'ijomails supports all type of mails, also supports document scanning.',
            paragraph2: 'Feel the convenient way of sending mails, invoices, payslips, send and receive money using our ijomails app.',
            button1: 'assets/img/store/1.png',
            button2: 'assets/img/store/2.png'
        }
    ];
    constructor() { }

    ngOnInit(): void {
    }

}
