import {
  Component,
  OnInit
} from '@angular/core';

import Typewriter from '../../type-writer/type-writer'

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  private fbUrl = "https://web.facebook.com/profile.php?id=100007469436147";
  private igUrl = "https://www.instagram.com/chanchit_ler/";
  private lineUrl = "https://line.me/ti/p/G8a8V6Jx01";
  private linkedInUrl = "https://www.linkedin.com/in/chanchit-lerdwongsuwan-a9a4511ab/";
  private githubUrl = "https://github.com/Chanchit1516";

  constructor() {

  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    document.querySelector(".whitespace") as HTMLDivElement;
    var typewriter = new Typewriter(
      document.querySelector(".whitespace") as HTMLDivElement, {
        element: document.createElement("h5"),
        loop: true,
        typingSpeed: 60,
        deletingSpeed: 80,
      }
    )

    typewriter
      .typeString("Software Engineer")
      .pauseFor(1200)
      .deleteAll(10)
      .typeString("Backend Developer")
      .pauseFor(1200)
      .deleteAll(10)
      .typeString("Frontend Developer")
      .pauseFor(1200)
      .deleteAll(10)
      .typeString("Full Stack Developer")
      .pauseFor(1200)
      .deleteAll(10)
      .start()
  }

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
      case "instagram": {
        window.open(this.igUrl);
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

  downloadMyResume() {
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
