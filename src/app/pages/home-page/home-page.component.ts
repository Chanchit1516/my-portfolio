import {
  AfterViewInit,
  Component,
  ElementRef,
  OnDestroy,
  OnInit,
  ViewChild
} from '@angular/core';

import Typewriter from '../../type-writer/type-writer';

export interface QuickFact {
  label: string;
  value: string;
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  subtitle: string;
  iconClass: string;
  items: SkillItem[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  duration: string;
  overview: string;
  tags: string[];
}

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('typewriterTarget') typewriterTarget?: ElementRef<HTMLElement>;

  private typewriterInstance?: Typewriter;

  private readonly socialUrls: Record<string, string> = {
    facebook: 'https://web.facebook.com/profile.php?id=100007469436147',
    instagram: 'https://www.instagram.com/chanchit_ler/',
    line: 'https://line.me/ti/p/G8a8V6Jx01',
    linkedin: 'https://www.linkedin.com/in/chanchit-lerdwongsuwan-a9a4511ab/',
    github: 'https://github.com/Chanchit1516'
  };

  readonly quickFacts: ReadonlyArray<QuickFact> = [
    { label: 'Nickname', value: 'Oat' },
    { label: 'Location', value: 'Bangkok, Thailand' },
    { label: 'Core Stack', value: '.NET Core & Angular' },
    { label: 'Degree', value: 'B.Sc. Computer Science' }
  ];

  readonly skillCategories: ReadonlyArray<SkillCategory> = [
    {
      title: 'Frontend & UI Engineering',
      subtitle: 'Component architecture, reactive state, and responsive design',
      iconClass: 'fa-solid fa-code',
      items: [
        { name: 'Angular', icon: 'assets/images/icons8-angularjs.svg' },
        { name: 'TypeScript', icon: 'assets/images/icons8-typescript.svg' },
        { name: 'JavaScript', icon: 'assets/images/icons8-javascript.svg' },
        { name: 'HTML5', icon: 'assets/images/icons8-html-5.svg' },
        { name: 'CSS3', icon: 'assets/images/icons8-css3.svg' },
        { name: 'Sass / SCSS', icon: 'assets/images/icons8-sass.svg' },
        { name: 'Redux', icon: 'assets/images/icons8-redux.svg' },
        { name: 'Bootstrap', icon: 'assets/images/icons8-bootstrap.svg' },
        { name: 'Material UI', icon: 'assets/images/icons8-material-ui.svg' }
      ]
    },
    {
      title: 'Backend & Enterprise Platforms',
      subtitle: 'Scalable APIs, business logic, and enterprise applications',
      iconClass: 'fa-solid fa-server',
      items: [
        { name: '.NET Core / C#', icon: 'assets/images/net-core-seeklogo.com.svg' },
        { name: 'Node.js', icon: 'assets/images/icons8-nodejs.svg' },
        { name: 'OutSystems', icon: 'assets/images/outsystems-logo.png' }
      ]
    },
    {
      title: 'Databases & Search Engines',
      subtitle: 'Relational modeling, query tuning, and full-text search',
      iconClass: 'fa-solid fa-database',
      items: [
        { name: 'SQL Server', icon: 'assets/images/icons8-microsoft-sql-server.svg' },
        { name: 'PostgreSQL', icon: 'assets/images/icons8-postgresql.svg' },
        { name: 'Elasticsearch', icon: 'assets/images/elasticsearch-seeklogo.svg' }
      ]
    },
    {
      title: 'Cloud, DevOps & Developer Tools',
      subtitle: 'Cloud services, version control, and daily engineering workflow',
      iconClass: 'fa-solid fa-cloud',
      items: [
        { name: 'Microsoft Azure', icon: 'assets/images/icons8-azure.svg' },
        { name: 'Google Cloud', icon: 'assets/images/icons8-google-cloud.svg' },
        { name: 'Git', icon: 'assets/images/icons8-git.svg' },
        { name: 'GitHub', icon: 'assets/images/icons8-github.svg' },
        { name: 'GitLab', icon: 'assets/images/icons8-gitlab.svg' },
        { name: 'VS Code', icon: 'assets/images/icons8-visual-studio-code-2019.svg' },
        { name: 'Visual Studio', icon: 'assets/images/icons8-visual-studio.svg' },
        { name: 'Figma', icon: 'assets/images/icons8-figma.svg' }
      ]
    }
  ];

  readonly experiences: ReadonlyArray<ExperienceItem> = [
    {
      company: 'IT One',
      role: 'Custom Software Engineering Specialist',
      period: 'Oct 2021 – Present',
      duration: 'Current',
      overview:
        'Focused on delivering enterprise software projects on time through accurate timeline estimation, scope management, and full SDLC ownership—from architecture and development to maintenance and optimization. Actively lead task assignments, peer feedback, requirement gathering, project kick-offs, and daily stand-ups aligned with business goals.',
      tags: ['Full SDLC', 'Scope & Estimation', 'System Design', 'Team Leadership', '.NET & Angular']
    },
    {
      company: 'Buzzebees',
      role: 'Back End Developer',
      period: 'Jul 2021 – Sep 2021',
      duration: '3 mos',
      overview:
        'Built reliable backend services and core application components. Analyzed technical requirements, designed relational database schemas, and delivered high-quality, performant backend APIs while collaborating closely in daily agile engineering syncs.',
      tags: ['Backend Development', 'Database Design', 'Requirement Analysis', 'API Optimization']
    },
    {
      company: 'Celestica',
      role: 'Full Stack Developer',
      period: 'Jul 2019 – Jul 2021',
      duration: '2 yrs 1 mo',
      overview:
        'Designed and implemented full-stack internal and enterprise applications tailored to user requirements. Participated in technical analysis, project structure design, and cross-functional status reviews across development, functional, and project management teams.',
      tags: ['Full-Stack Development', 'System Architecture', 'Requirement Analysis', 'Agile Collaboration']
    },
    {
      company: '2Fellows',
      role: 'Full Stack Developer',
      period: 'Jun 2018 – Jul 2019',
      duration: '1 yr 2 mos',
      overview:
        'Developed end-to-end frontend and backend features, diagnosed and resolved security threats and production bugs, and partnered directly with clients and software teams to translate business needs into shipped functionalities.',
      tags: ['Frontend & Backend', 'Client Consulting', 'Bug Resolution', 'Feature Delivery']
    }
  ];

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    const target =
      this.typewriterTarget?.nativeElement ??
      (document.querySelector('.whitespace') as HTMLElement | null);

    if (!target) {
      return;
    }

    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      target.textContent = 'Full Stack Developer';
      return;
    }

    const textElement = document.createElement('span');
    this.typewriterInstance = new Typewriter(target, {
      element: textElement,
      loop: true,
      typingSpeed: 60,
      deletingSpeed: 45
    });

    this.typewriterInstance
      .typeString('Software Engineer')
      .pauseFor(1200)
      .deleteAll(35)
      .typeString('Backend Developer')
      .pauseFor(1200)
      .deleteAll(35)
      .typeString('Frontend Developer')
      .pauseFor(1200)
      .deleteAll(35)
      .typeString('Full Stack Developer')
      .pauseFor(1200)
      .deleteAll(35)
      .start();
  }

  ngOnDestroy(): void {
    this.typewriterInstance?.stop();
  }

  linkToSocial(social: string): void {
    const url = this.socialUrls[social];
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  }

  downloadMyResume(): void {
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
    link.setAttribute('href', 'assets/files/Chanchit-Lerdwongsuwan.pdf');
    link.setAttribute('download', 'Chanchit-Lerdwongsuwan.pdf');
    document.body.appendChild(link);
    link.click();
    link.remove();
  }

  getAge(): number {
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
