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

  ngOnInit(): void { }

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

    const navLinks = document.querySelectorAll('#navbar ul li a.nav-link');
    document.addEventListener('scroll', () => {
      const currentSection = this.getCurrentSection();
      navLinks.forEach((link) => {
        const sectionId = link?.getAttribute('href')?.slice(1);
        if (sectionId === currentSection) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
      });
    });
  }

  getCurrentSection(): string {
    // Helper function to get the current section based on the scrolling position
    const sections = document.querySelectorAll('section');
    let currentSection: any = '';
    const scrollPosition = window.pageYOffset;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      if (scrollPosition >= sectionTop - sectionHeight / 2) {
        currentSection = section.getAttribute('id');
      }
    });
    if (this.isScrollAtBottom()) {
      //id of last element
      return "contact";
    } else {
      return currentSection;
    }

  }

  isScrollAtBottom(): boolean {
    // Helper function to check if the scroll position is at the bottom of the page
    const scrollPosition = window.pageYOffset;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;

    // Calculate the scrollable distance based on the zoom level
    const scrollableDistance = documentHeight - windowHeight;

    // Check if the scroll position is within a tolerance range of the scrollable distance
    return scrollPosition >= scrollableDistance - 1;
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

  getAge() {
    const day = 17;
    const month = 10;
    const year = 1995;
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    const dayDiff = today.getDate() - birthDate.getDate();
  
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      age--;
    }
  
    return age;
  }




}
