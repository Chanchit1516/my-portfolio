import {
  Component,
  OnInit
} from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private fbUrl = "https://web.facebook.com/profile.php?id=100007469436147";
  private lineUrl = "https://line.me/ti/p/G8a8V6Jx01";
  private linkedInUrl = "https://www.linkedin.com/in/chanchit-lerdwongsuwan-a9a4511ab/";
  private githubUrl = "https://github.com/Chanchit1516";
  constructor() {}

  ngOnInit(): void {}

  linkToSocial(social: string) {
    switch (social) {
      case "linkedin": {
        window.open(this.linkedInUrl);
        break;
      }
      case "github": {
        window.open(this.githubUrl);
        break;
      }
      case "facebook": {
        window.open(this.fbUrl);
        break;
      }
      case "line": {
        window.open(this.lineUrl)
        break;
      }
      default: {
        break;
      }
    }

  }

  downloadMyResume(){
    // window.open("")
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '../../../assets/files/Chanchit-Lerdwongsuwan.pdf');
    link.setAttribute('download', `Chanchit-Lerdwongsuwan.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

}
