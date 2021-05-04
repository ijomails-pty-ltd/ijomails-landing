import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { from } from 'rxjs';
import { SubSink } from 'subsink';

import { NewsletterService } from './../../../../shared/services/newsletter.service';
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
    public submited: boolean;
    public showAlert: boolean;
    public form: FormGroup;
    private subs = new SubSink();
    constructor(
        private newsletterService: NewsletterService
    ) {
        this.submited = false;
        this.showAlert = false;
    }

    ngOnInit(): void {

        this.form = new FormGroup({
            email: new FormControl(null, {
              updateOn: 'blur',
              validators: [
                Validators.required,
                Validators.email,
                Validators.maxLength(50)
              ]
            })
        });
    }

    get formCtrls() {
        return this.form.controls;
      }

    onSubmit() {
        if (this.form.invalid) {
            return;
        }
        this.submited = true;
        // tslint:disable-next-line: deprecation
        this.subs.sink = from(this.newsletterService.insert({email: this.form.value.email})).subscribe((e) => {
            this.showAlert = true;
            this.submited = false;
        }, (error: any) => {
            console.log(error);
        });
    }
}
