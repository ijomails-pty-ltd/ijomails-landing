import { Component, OnInit } from '@angular/core';
class SectionTitleContent {
    title: string;
    paragraphText: string;
}

@Component({
    selector: 'app-app-team',
    templateUrl: './app-team.component.html',
    styleUrls: ['./app-team.component.scss']
})
export class AppTeamComponent implements OnInit {

    sectionTitle: SectionTitleContent[] = [
        {
            title: 'Our Expert Team',
            paragraphText: 'People behind ijomails success.'
        }
    ];
    singleTeamBox = [
        {
            img: 'assets/img/team/team2.jpg',
            title: 'Anyier Akol',
            designation: 'CEO & Founder',
            social: [
                {
                    icon: 'lab la-facebook-f',
                    link: 'https://web.facebook.com/Anyier.Akol'
                },
                {
                    icon: 'las la-envelope',
                    link: 'mailto:nyotadarling@gmail.com'
                },
                {
                    icon: 'lab la-linkedin-in',
                    link: 'https://www.linkedin.com/in/anyier-akol-46aaaa72/'
                },
                {
                    icon: 'lab la-instagram',
                    link: 'https://www.instagram.com/anyier_jok/?hl=en'
                },
                {
                    icon: 'lab la-twitter',
                    link: 'https://twitter.com/atyuera?lang=en'
                },
            ]
        },
        {
            img: 'assets/img/team/team1.jpg',
            title: 'Maker Mayek',
            designation: 'Lawyer/Legal Advisor',
            social: [
                {
                    icon: 'lab la-twitter',
                    link: 'https://twitter.com/MakMayek'
                },
                {
                    icon: 'las la-envelope',
                    link: 'mailto:mmayek@mayeklegal.com.au'
                },
                {
                    icon: 'lab la-linkedin-in',
                    link: 'https://www.linkedin.com/in/maker-mayek-82a14749/'
                },
                {
                    icon: 'las la-globe',
                    link: 'https://mayeklegal.com.au/'
                }
            ]
        },
        {
            img: 'assets/img/team/team3.jpg',
            title: 'Randy Rebucas',
            designation: 'Sr. Software Engineer',
            social: [
                {
                    icon: 'lab la-facebook-f',
                    link: 'https://web.facebook.com/randycrebucas/'
                },
                {
                    icon: 'las la-envelope',
                    link: 'mailto:rebucasrandy1986@gmail.com'
                }
            ]
        }
    ];
    constructor() { }

    ngOnInit(): void {
    }

}
