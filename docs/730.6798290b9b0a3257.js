"use strict";(self.webpackChunkmy_portfolio=self.webpackChunkmy_portfolio||[]).push([[730],{730:(A,x,_)=>{_.r(x),_.d(x,{HomePageModule:()=>T});var P=_(895),Z=_(736);function w(a,i,t,n,r,c,g){try{var d=a[c](g),l=d.value}catch(b){return void t(b)}d.done?i(l):Promise.resolve(l).then(n,r)}var p,h,s,v,f,m,u,o=_(655);class O{constructor(i,{loop:t=!1,typingSpeed:n=50,deletingSpeed:r=50,element:c=new HTMLElement}={}){p.add(this),h.set(this,[]),s.set(this,void 0),v.set(this,void 0),f.set(this,void 0),m.set(this,void 0),(0,o.YH)(this,s,c,"f"),(0,o.Q_)(this,s,"f").style.cssText="color:#FCBD3A; display: inline; font-weight:800",i.append((0,o.Q_)(this,s,"f")),(0,o.YH)(this,v,t,"f"),(0,o.YH)(this,f,n,"f"),(0,o.YH)(this,m,r,"f")}typeString(i){return(0,o.Q_)(this,p,"m",u).call(this,t=>{let n=0;const r=setInterval(()=>{(0,o.Q_)(this,s,"f").append(i[n]),n++,n>=i.length&&(clearInterval(r),t())},(0,o.Q_)(this,f,"f"))}),this}deleteChars(i){return(0,o.Q_)(this,p,"m",u).call(this,t=>{let n=0;const r=setInterval(()=>{(0,o.Q_)(this,s,"f").innerText=(0,o.Q_)(this,s,"f").innerText.substring(0,(0,o.Q_)(this,s,"f").innerText.length-1),n++,n>=i&&(clearInterval(r),t())},(0,o.Q_)(this,m,"f"))}),this}deleteAll(i=(0,o.Q_)(this,m,"f")){return(0,o.Q_)(this,p,"m",u).call(this,t=>{const n=setInterval(()=>{(0,o.Q_)(this,s,"f").innerText=(0,o.Q_)(this,s,"f").innerText.substring(0,(0,o.Q_)(this,s,"f").innerText.length-1),0===(0,o.Q_)(this,s,"f").innerText.length&&(clearInterval(n),t())},i)}),this}pauseFor(i){return(0,o.Q_)(this,p,"m",u).call(this,t=>{setTimeout(t,i)}),this}start(){var i=this;return function M(a){return function(){var i=this,t=arguments;return new Promise(function(n,r){var c=a.apply(i,t);function g(l){w(c,n,r,g,d,"next",l)}function d(l){w(c,n,r,g,d,"throw",l)}g(void 0)})}}(function*(){let t=(0,o.Q_)(i,h,"f").shift();for(;null!=t;)yield t(),(0,o.Q_)(i,v,"f")&&(0,o.Q_)(i,h,"f").push(t),t=(0,o.Q_)(i,h,"f").shift();return i})()}}h=new WeakMap,s=new WeakMap,v=new WeakMap,f=new WeakMap,m=new WeakMap,p=new WeakSet,u=function(i){(0,o.Q_)(this,h,"f").push(()=>new Promise(i))};var e=_(256);let C=(()=>{class a{constructor(){this.fbUrl="https://web.facebook.com/profile.php?id=100007469436147",this.igUrl="https://www.instagram.com/chanchit_ler/",this.lineUrl="https://line.me/ti/p/G8a8V6Jx01",this.linkedInUrl="https://www.linkedin.com/in/chanchit-lerdwongsuwan-a9a4511ab/",this.githubUrl="https://github.com/Chanchit1516"}ngOnInit(){}ngAfterViewInit(){document.querySelector(".whitespace"),new O(document.querySelector(".whitespace"),{element:document.createElement("h5"),loop:!0,typingSpeed:60,deletingSpeed:80}).typeString("Software Engineer").pauseFor(1200).deleteAll(10).typeString("Backend Developer").pauseFor(1200).deleteAll(10).typeString("Frontend Developer").pauseFor(1200).deleteAll(10).typeString("Full Stack Developer").pauseFor(1200).deleteAll(10).start();const n=document.querySelectorAll("#navbar ul li a.nav-link");document.addEventListener("scroll",()=>{const r=this.getCurrentSection();n.forEach(c=>{c?.getAttribute("href")?.slice(1)===r?c.classList.add("active"):c.classList.remove("active")})})}getCurrentSection(){const t=document.querySelectorAll("section");let n="";const r=window.pageYOffset;return t.forEach(c=>{r>=c.offsetTop-c.clientHeight/2&&(n=c.getAttribute("id"))}),this.isScrollAtBottom()?"contact":n}isScrollAtBottom(){const t=window.pageYOffset,n=window.innerHeight;return t>=document.documentElement.scrollHeight-n-1}linkToSocial(t){switch(t){case"linkedin":window.open(this.linkedInUrl);break;case"github":window.open(this.githubUrl);break;case"facebook":window.open(this.fbUrl);break;case"instagram":window.open(this.igUrl);break;case"line":window.open(this.lineUrl)}}downloadMyResume(){const t=document.createElement("a");t.setAttribute("target","_blank"),t.setAttribute("href","../../../assets/files/Chanchit-Lerdwongsuwan.pdf"),t.setAttribute("download","Chanchit-Lerdwongsuwan.pdf"),document.body.appendChild(t),t.click(),t.remove()}getAge(){const c=new Date,g=new Date(1995,9,17);let d=c.getFullYear()-g.getFullYear();const l=c.getMonth()-g.getMonth(),b=c.getDate()-g.getDate();return(l<0||0===l&&b<0)&&d--,d}}return a.\u0275fac=function(t){return new(t||a)},a.\u0275cmp=e.Xpm({type:a,selectors:[["app-home-page"]],decls:293,vars:1,consts:[["id","header",1,"bg-home","color-overlay","d-flex"],[1,"container","page-header"],[1,"row","align-items-center","justify-content-center"],[1,"col-md-6"],[1,"row"],[1,"whitespace"],[2,"color","#333333","display","inline"],["type","button",1,"btn","btn-grad","mt-3"],["href","#about",1,"nav-link"],["src","assets/images/My-FIrst-Logo.svg",1,"img-header","mx-auto","d-block","img-fluid"],["id","about"],[1,"container"],[1,"row","pt-3","section-about"],[1,"col-md-12"],[1,"header-center"],[1,"row","pt-5"],["src","assets/images/My-Picture-1.jpg",1,"rounded-circle","img-about","mx-auto","d-block","img-fluid",2,"object-fit","cover"],[1,"pt-2","pb-2"],[1,"col-md-12","mb-3"],["type","button",1,"btn","btn-grad","mt-3",3,"click"],[1,"nav-link"],["id","skills"],[1,"row","pt-3","section-skills"],[1,"col-md-12","text-center"],[1,"col-md-2","col-sm-4","col-6","text-center"],["src","assets/images/net-core-seeklogo.com.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-angularjs.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-html-5.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-css3.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-javascript.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-typescript.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-nodejs.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-redux.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-material-ui.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-bootstrap.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-microsoft-sql-server.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-postgresql.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-github.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-gitlab.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-azure.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-google-cloud.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-visual-studio-code-2019.svg",2,"width","80px","height","80px"],["src","assets/images/icons8-visual-studio.svg",2,"width","80px","height","80px"],["src","assets/images/outsystems-logo.png",2,"width","80px","height","80px"],["src","assets/images/elasticsearch-seeklogo.svg",2,"width","80px","height","80px"],["id","education",1,"mb-4"],[1,"row","pt-3","section-education"],[1,"card",2,"box-shadow","rgba(0, 0, 0, 0.35) 0px 5px 15px"],[1,"col-md-4"],["src","assets/images/building-12.webp",1,"img-fluid","img-education",2,"object-fit","cover"],[1,"col-md-8"],[1,"container","pt-2"],[1,"card-title"],[1,"text-success"],["id","experience",2,"margin-bottom","100px"],[1,"row","pt-3","section-experience"],[1,"timeline"],[1,"timeline__event","animated","fadeInUp","delay-3s","timeline__event--type1"],[1,"timeline__event__icon"],[1,"fa-solid","fa-briefcase"],[1,"timeline__event__date",2,"color","white"],[1,"timeline__event__content"],[1,"timeline__event__title"],[1,"timeline__event__description"],[1,"mt-1"],[2,"font-weight","bold"],[1,"timeline__event","animated","fadeInUp","delay-2s","timeline__event--type2"],[1,"timeline__event","animated","fadeInUp","delay-1s","timeline__event--type3"],[1,"timeline__event","animated","fadeInUp","timeline__event--type4"],["id","contact"],[1,"container",2,"color","white"],[1,"row","pt-3","section-contact"],[1,"border-top","border-secondary"],[1,"col-md-4","mb-3"],[1,"col-md-6","quick-link-hover"],["href","#header",1,"quick-link-hover","pointer"],[1,"fa-solid","fa-circle-arrow-up"],[1,"ps-3","pointer"],["href","#education",1,"quick-link-hover","pointer"],[1,"fa-solid","fa-circle-arrow-up","pointer"],["href","#about",1,"quick-link-hover","pointer"],["href","#experience",1,"quick-link-hover","pointer"],["href","#skills",1,"quick-link-hover","pointer"],[1,"fa-solid","fa-phone","text-warning"],[1,"ps-3",2,"user-select","all"],[1,"fa-solid","fa-envelope","text-warning"],[1,"mt-4"],["type","button",1,"btn","btn-light","btn-circle","me-3","pointer",3,"click"],[1,"fa-brands","fa-linkedin","text-primary","fa-xl"],[1,"fa-brands","fa-github","fa-xl"],[1,"fa-brands","fa-instagram","fa-xl",2,"color","red"],[1,"fa-brands","fa-line","text-success","fa-xl"]],template:function(t,n){1&t&&(e.TgZ(0,"div")(1,"section",0)(2,"div",1)(3,"div",2)(4,"div",3)(5,"h1"),e._uU(6,"Hi,"),e.qZA(),e.TgZ(7,"h1"),e._uU(8,"I'm Chanchit Lerdwongsuwan"),e.qZA(),e.TgZ(9,"div",4)(10,"div",5)(11,"h5",6),e._uU(12,"I Am Into "),e.qZA()()(),e.TgZ(13,"button",7)(14,"a",8),e._uU(15,"About Me"),e.qZA()()(),e.TgZ(16,"div",3),e._UZ(17,"img",9),e.qZA()()()(),e.TgZ(18,"section",10)(19,"div",11)(20,"div",12)(21,"div",13)(22,"div",14)(23,"h3"),e._uU(24,"About Me"),e.qZA()()()(),e.TgZ(25,"div",15)(26,"div",3),e._UZ(27,"img",16),e.qZA(),e.TgZ(28,"div",3)(29,"div",4)(30,"div",13)(31,"h3"),e._uU(32,"Who I am?"),e.qZA()()(),e.TgZ(33,"div",4),e._UZ(34,"div",13),e.qZA(),e.TgZ(35,"div",4)(36,"div",13)(37,"h6",17),e._uU(38),e.qZA()()(),e.TgZ(39,"div",4)(40,"div",18)(41,"button",19),e.NdJ("click",function(){return n.downloadMyResume()}),e.TgZ(42,"a",20),e._uU(43,"My Resume"),e.qZA()()()()()()()(),e.TgZ(44,"section",21)(45,"div",11)(46,"div",22)(47,"div",13)(48,"div",14)(49,"h3"),e._uU(50,"Skills"),e.qZA()()()(),e.TgZ(51,"div",15)(52,"div",23)(53,"h5"),e._uU(54,"Technology I've been working with recently."),e.qZA()()(),e.TgZ(55,"div",15)(56,"div",24),e._UZ(57,"img",25),e.qZA(),e.TgZ(58,"div",24),e._UZ(59,"img",26),e.qZA(),e.TgZ(60,"div",24),e._UZ(61,"img",27),e.qZA(),e.TgZ(62,"div",24),e._UZ(63,"img",28),e.qZA(),e.TgZ(64,"div",24),e._UZ(65,"img",29),e.qZA(),e.TgZ(66,"div",24),e._UZ(67,"img",30),e.qZA()(),e.TgZ(68,"div",15)(69,"div",24),e._UZ(70,"img",31),e.qZA(),e.TgZ(71,"div",24),e._UZ(72,"img",32),e.qZA(),e.TgZ(73,"div",24),e._UZ(74,"img",33),e.qZA(),e.TgZ(75,"div",24),e._UZ(76,"img",34),e.qZA(),e.TgZ(77,"div",24),e._UZ(78,"img",35),e.qZA(),e.TgZ(79,"div",24),e._UZ(80,"img",36),e.qZA()(),e.TgZ(81,"div",15)(82,"div",24),e._UZ(83,"img",37),e.qZA(),e.TgZ(84,"div",24),e._UZ(85,"img",38),e.qZA(),e.TgZ(86,"div",24),e._UZ(87,"img",39),e.qZA(),e.TgZ(88,"div",24),e._UZ(89,"img",40),e.qZA(),e.TgZ(90,"div",24),e._UZ(91,"img",41),e.qZA(),e.TgZ(92,"div",24),e._UZ(93,"img",42),e.qZA()(),e.TgZ(94,"div",15)(95,"div",24),e._UZ(96,"img",43),e.qZA(),e.TgZ(97,"div",24),e._UZ(98,"img",44),e.qZA()()()(),e.TgZ(99,"section",45)(100,"div",11)(101,"div",46)(102,"div",13)(103,"div",14)(104,"h3"),e._uU(105,"Education"),e.qZA()()()(),e.TgZ(106,"div",15)(107,"div",13)(108,"div",47)(109,"div",4)(110,"div",48),e._UZ(111,"img",49),e.qZA(),e.TgZ(112,"div",50)(113,"div",51)(114,"h3",52),e._uU(115,"Siam University"),e.qZA(),e.TgZ(116,"h5")(117,"strong"),e._uU(118,"Faculty of Science:"),e.qZA(),e._uU(119," Computer Sciences"),e.qZA(),e.TgZ(120,"h5")(121,"strong"),e._uU(122,"Degree:"),e.qZA(),e._uU(123," Bachelor's degree"),e.qZA(),e.TgZ(124,"h5")(125,"strong"),e._uU(126,"Grade:"),e.qZA(),e._uU(127," 2.8"),e.qZA(),e.TgZ(128,"h5",53)(129,"strong"),e._uU(130,"2014-2018 | Completed"),e.qZA()()()()()()()()()(),e.TgZ(131,"section",54)(132,"div",11)(133,"div",55)(134,"div",13)(135,"div",14)(136,"h3"),e._uU(137,"Experience"),e.qZA()()()(),e.TgZ(138,"div",4)(139,"div",13)(140,"div",56)(141,"div",57)(142,"div",58),e._UZ(143,"i",59),e.qZA(),e.TgZ(144,"div",60),e._uU(145," Oct 2021 - Present"),e._UZ(146,"br"),e._uU(147," 1 yr "),e.qZA(),e.TgZ(148,"div",61)(149,"div",62),e._uU(150," IT One "),e.qZA(),e.TgZ(151,"div",63)(152,"div",64)(153,"span",65),e._uU(154,"Role: "),e.qZA(),e.TgZ(155,"span"),e._uU(156,"Custom Software Engineering Specialist"),e.qZA()(),e.TgZ(157,"div",64)(158,"span",65),e._uU(159,"Overview: "),e.qZA(),e.TgZ(160,"span"),e._uU(161,"As a Custom Software Engineering Specialist, I focus on delivering projects on time by accurately estimating timelines and managing project scope. I am involved in the entire development lifecycle, from designing and developing software solutions to maintaining and optimizing them. I take responsibility for managing task assignments, offering feedback to team members, and ensuring effective collaboration. Additionally, I actively participate in key meetings, such as requirement gathering, project kick-offs, and daily stand-ups, to ensure smooth project progression and alignment with business goals."),e.qZA(),e._UZ(162,"br"),e.qZA()()()(),e.TgZ(163,"div",66)(164,"div",58),e._UZ(165,"i",59),e.qZA(),e.TgZ(166,"div",60),e._uU(167," Jul 2021 - Sep 2021"),e._UZ(168,"br"),e._uU(169," 3 mos "),e.qZA(),e.TgZ(170,"div",61)(171,"div",62),e._uU(172," Buzzebees "),e.qZA(),e.TgZ(173,"div",63)(174,"div",64)(175,"span",65),e._uU(176,"Role: "),e.qZA(),e.TgZ(177,"span"),e._uU(178,"Back End Developer"),e.qZA()(),e.TgZ(179,"div",64)(180,"span",65),e._uU(181,"Overview: "),e.qZA(),e.TgZ(182,"span"),e._uU(183,"As a Back End Developer, I focus on developing the backend components of projects. I analyze requirements, design databases, and am responsible for developing tasks as assigned. I actively participate in development and attend daily meetings as needed. ensuring the quality and performance of the code."),e.qZA()()()()(),e.TgZ(184,"div",67)(185,"div",58),e._UZ(186,"i",59),e.qZA(),e.TgZ(187,"div",60),e._uU(188," Jul 2019 - Jul 2021"),e._UZ(189,"br"),e._uU(190," 2 yrs 1 mos "),e.qZA(),e.TgZ(191,"div",61)(192,"div",62),e._uU(193," Celestica "),e.qZA(),e.TgZ(194,"div",63)(195,"div",64)(196,"span",65),e._uU(197,"Role: "),e.qZA(),e.TgZ(198,"span"),e._uU(199,"Full Stack Developer"),e.qZA()(),e.TgZ(200,"div",64)(201,"span",65),e._uU(202,"Overview:"),e.qZA(),e.TgZ(203,"span"),e._uU(204,"As a Full Stack Developer, I focus on develope, design tasks as assigned Attended meetings or discussion sessions of software team to Performed analysis, design structure project and development of the application according to the user requirements and Attends monthly status meetings with the development, functional and project management teams to discuss status."),e.qZA()()()()(),e.TgZ(205,"div",68)(206,"div",58),e._UZ(207,"i",59),e.qZA(),e.TgZ(208,"div",60),e._uU(209," Jun 2018 - Jul 2019 "),e._UZ(210,"br"),e._uU(211," 1 yr 2 mos "),e.qZA(),e.TgZ(212,"div",61)(213,"div",62),e._uU(214," 2Fellows "),e.qZA(),e.TgZ(215,"div",63)(216,"div",64)(217,"span",65),e._uU(218,"Role: "),e.qZA(),e.TgZ(219,"span"),e._uU(220,"Full Stack Developer"),e.qZA()(),e.TgZ(221,"div",64)(222,"span",65),e._uU(223,"Overview:"),e.qZA(),e.TgZ(224,"span"),e._uU(225,"As a Full Stack Developer, I focus on developing assigned tasks for both front-end and back-end. I resolve any threats and bugs, communicate with clients to provide knowledge, expertise, and support, and ensure their requirements are met. I also attend client meetings and software team discussions to understand and implement requested new functionalities."),e.qZA()()()()()()()()()(),e.TgZ(226,"section",69)(227,"div",70)(228,"div",71)(229,"div",23)(230,"h3"),e._uU(231,"GET IN TOUCH"),e.qZA()()(),e._UZ(232,"hr",72),e.TgZ(233,"div",4)(234,"div",73)(235,"h3"),e._uU(236,"Chanchit Portfolio"),e.qZA(),e.TgZ(237,"label"),e._uU(238,"Thank you for visiting my personal portfolio website. Connect with me over socials."),e.qZA()(),e.TgZ(239,"div",73)(240,"h3"),e._uU(241,"Quick Links"),e.qZA(),e.TgZ(242,"div",4)(243,"div",74)(244,"a",75),e._UZ(245,"i",76),e.TgZ(246,"label",77),e._uU(247,"Home"),e.qZA(),e._UZ(248,"br"),e.qZA()(),e.TgZ(249,"div",74)(250,"a",78),e._UZ(251,"i",79),e.TgZ(252,"label",77),e._uU(253,"Education"),e.qZA()()()(),e.TgZ(254,"div",4)(255,"div",3)(256,"a",80),e._UZ(257,"i",79),e.TgZ(258,"label",77),e._uU(259,"About"),e.qZA(),e._UZ(260,"br"),e.qZA()(),e.TgZ(261,"div",74)(262,"a",81),e._UZ(263,"i",79),e.TgZ(264,"label",77),e._uU(265,"Experience"),e.qZA()()()(),e.TgZ(266,"div",4)(267,"div",74)(268,"a",82),e._UZ(269,"i",79),e.TgZ(270,"label",77),e._uU(271,"Skills"),e.qZA()()(),e._UZ(272,"div",3),e.qZA()(),e.TgZ(273,"div",73)(274,"h3"),e._uU(275,"Find me on:"),e.qZA(),e._UZ(276,"i",83),e.TgZ(277,"label",84),e._uU(278,"063-313-7551"),e.qZA(),e._UZ(279,"br")(280,"i",85),e.TgZ(281,"label",84),e._uU(282,"chanchit.ler01@gmail.com"),e.qZA(),e._UZ(283,"br"),e.TgZ(284,"div",86)(285,"button",87),e.NdJ("click",function(){return n.linkToSocial("linkedin")}),e._UZ(286,"i",88),e.qZA(),e.TgZ(287,"button",87),e.NdJ("click",function(){return n.linkToSocial("github")}),e._UZ(288,"i",89),e.qZA(),e.TgZ(289,"button",87),e.NdJ("click",function(){return n.linkToSocial("instagram")}),e._UZ(290,"i",90),e.qZA(),e.TgZ(291,"button",87),e.NdJ("click",function(){return n.linkToSocial("line")}),e._UZ(292,"i",91),e.qZA()()()()()()()),2&t&&(e.xp6(38),e.hij("Hi, My name is Chanchit Lerdwongsuwan. You can call me Oat. I am ",n.getAge()," years old. I am a Full-Stack developer based in Bangkok, Thailand. I have experience of building Web Applications with Dotnet / Angular and some cool other libraries and frameworks. I am very passionate about improving my coding skills and developing applications and websites. And I hope we can work together on a project. Thank you."))},styles:['.bg-home[_ngcontent-%COMP%]{background-color:#f1f1f1;background-size:cover;min-height:100vh;position:relative}.page-header[_ngcontent-%COMP%]{margin-top:10rem}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .page-header[_ngcontent-%COMP%]   h5[_ngcontent-%COMP%]{color:#333;font-weight:800!important}.page-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{font-size:2.6rem}.whitespace[_ngcontent-%COMP%]{white-space:pre-wrap}.btn-style[_ngcontent-%COMP%]{color:#fff;background:rgb(255,160,39);background:linear-gradient(0deg,rgb(255,160,39) 9%,rgb(255,194,20) 91%);box-shadow:#00000040 0 5px 15px}.btn-grad[_ngcontent-%COMP%]{background-image:linear-gradient(to right,rgb(255,171,61) 9%,rgb(251,192,31) 51%,rgb(252,169,61) 100%);text-align:center;text-transform:uppercase;transition:.5s;background-size:200% auto;color:#fff;box-shadow:#00000040 0 5px 15px;border-radius:10px;display:block}.btn-grad[_ngcontent-%COMP%]:hover{background-position:right center;border-color:#ffb14b;color:#fff;text-decoration:none}#about[_ngcontent-%COMP%]{background-color:#fff;background-size:cover;min-height:70vh;position:relative;padding-top:100px}#about[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#333;font-weight:800!important}.header-center[_ngcontent-%COMP%]{height:1px;background:#d6d6d6;border-bottom:#d6d6d6 solid 1px;margin-bottom:3.2rem;position:relative}.header-center[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{background:white;position:absolute;top:-.8rem;left:50%;margin-left:-140px;width:280px;text-align:center;display:block;color:#757575;text-transform:uppercase;font-size:25px!important;font-size:1.4rem;font-weight:400;letter-spacing:.2rem;padding:0!important}#skills[_ngcontent-%COMP%]{background-color:#fff;background-size:cover;min-height:70vh;position:relative;padding-top:100px}#skills[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#333;font-weight:800!important}#education[_ngcontent-%COMP%]{background-color:#fff;background-size:cover;min-height:65vh;position:relative;padding-top:100px}#education[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#333;font-weight:800!important}.img-education[_ngcontent-%COMP%]{width:400px;height:260px;border-radius:5px 0 0 5px}#work[_ngcontent-%COMP%], #experience[_ngcontent-%COMP%]{background-color:#fff;background-size:cover;position:relative;padding-top:100px}#experience[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{color:#333;font-weight:800!important}*[_ngcontent-%COMP%]{box-sizing:border-box}html[_ngcontent-%COMP%]{font-size:14px}body[_ngcontent-%COMP%]{background:#f6f9fc;font-family:Open Sans,sans-serif;color:#525f7f}h2[_ngcontent-%COMP%]{margin:5%;text-align:center;font-size:2rem;font-weight:100}.timeline[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin:20px auto;position:relative}.timeline__event[_ngcontent-%COMP%]{position:relative;display:flex;margin:20px 0;border-radius:6px;align-self:center;width:65vw}.timeline__event[_ngcontent-%COMP%]:nth-child(2n+1){flex-direction:row-reverse}.timeline__event[_ngcontent-%COMP%]:nth-child(2n+1)   .timeline__event__date[_ngcontent-%COMP%]{border-radius:0 6px 6px 0}.timeline__event[_ngcontent-%COMP%]:nth-child(2n+1)   .timeline__event__content[_ngcontent-%COMP%]{border-radius:6px 0 0 6px}.timeline__event[_ngcontent-%COMP%]:nth-child(2n+1)   .timeline__event__icon[_ngcontent-%COMP%]:before{content:"";width:2px;height:100%;background:#eb94e1;position:absolute;top:0%;left:50%;right:auto;z-index:-1;transform:translate(-50%);animation:fillTop 1.5s forwards 1.5s ease-in-out}.timeline__event[_ngcontent-%COMP%]:nth-child(2n+1)   .timeline__event__icon[_ngcontent-%COMP%]:after{content:"";width:100%;height:2px;background:#eb94e1;position:absolute;right:0;z-index:-1;top:50%;left:auto;transform:translateY(-50%);animation:fillLeft 1.5s forwards 1.5s ease-in-out}.timeline__event__title[_ngcontent-%COMP%]{font-size:1.2rem;line-height:1.4;text-transform:uppercase;font-weight:600;letter-spacing:1.5px}.timeline__event__content[_ngcontent-%COMP%]{padding:20px;box-shadow:0 7px 30px -12px #32325d40,0 18px 36px -18px #0000004d,0 -12px 36px -8px #00000008;background:#fff;width:calc(50vw - 84px);border-radius:0 6px 6px 0}.timeline__event__date[_ngcontent-%COMP%]{color:#eb94e1;font-size:1.5rem;font-weight:600;display:flex;align-items:center;justify-content:center;white-space:nowrap;box-shadow:#00000059 0 5px 15px;padding:0 20px;border-radius:6px 0 0 6px}.timeline__event__icon[_ngcontent-%COMP%]{display:flex;align-items:center;justify-content:center;align-self:center;margin:0 20px;background:#eb94e1;border-radius:100%;width:40px;box-shadow:0 30px 60px -12px #32325d40,0 18px 36px -18px #0000004d,0 -12px 36px -8px #00000006;padding:40px;height:40px;position:relative}.timeline__event__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:32px}.timeline__event__icon[_ngcontent-%COMP%]:before{content:"";width:2px;height:100%;background:#eb94e1;position:absolute;top:0%;z-index:-1;left:50%;transform:translate(-50%);animation:fillTop 1.5s forwards 1.5s ease-in-out}.timeline__event__icon[_ngcontent-%COMP%]:after{content:"";width:100%;height:1px;background:#eb94e1;position:absolute;left:0%;z-index:-1;top:50%;transform:translateY(-50%);animation:fillLeftOdd 1.5s forwards 1.5s ease-in-out}.timeline__event__description[_ngcontent-%COMP%]{flex-basis:60%}.timeline__event--type1[_ngcontent-%COMP%]:after{background:#c93360}.timeline__event--type1[_ngcontent-%COMP%]   .timeline__event__date[_ngcontent-%COMP%]{color:#c9486f;background:#c93360}.timeline__event--type1[_ngcontent-%COMP%]:nth-child(2n+1)   .timeline__event__icon[_ngcontent-%COMP%]:before, .timeline__event--type1[_ngcontent-%COMP%]:nth-child(2n+1)   .timeline__event__icon[_ngcontent-%COMP%]:after{background:#c93360}.timeline__event--type1[_ngcontent-%COMP%]   .timeline__event__icon[_ngcontent-%COMP%]{background:#c9486f;color:#fff}.timeline__event--type1[_ngcontent-%COMP%]   .timeline__event__icon[_ngcontent-%COMP%]:before, .timeline__event--type1[_ngcontent-%COMP%]   .timeline__event__icon[_ngcontent-%COMP%]:after{background:#c9486f}.timeline__event--type1[_ngcontent-%COMP%]   .timeline__event__title[_ngcontent-%COMP%]{color:#c93360}.timeline__event--type2[_ngcontent-%COMP%]:after{background:#f5b431}.timeline__event--type2[_ngcontent-%COMP%]   .timeline__event__date[_ngcontent-%COMP%]{color:#f3be54;background:#f5b431}.timeline__event--type2[_ngcontent-%COMP%]:nth-child(2n+1)   .timeline__event__icon[_ngcontent-%COMP%]:before, .timeline__event--type2[_ngcontent-%COMP%]:nth-child(2n+1)   .timeline__event__icon[_ngcontent-%COMP%]:after{background:#f3be54}.timeline__event--type2[_ngcontent-%COMP%]   .timeline__event__icon[_ngcontent-%COMP%]{background:#f3be54;color:#fff}.timeline__event--type2[_ngcontent-%COMP%]   .timeline__event__icon[_ngcontent-%COMP%]:before, .timeline__event--type2[_ngcontent-%COMP%]   .timeline__event__icon[_ngcontent-%COMP%]:after{background:#f3be54}.timeline__event--type2[_ngcontent-%COMP%]   .timeline__event__title[_ngcontent-%COMP%]{color:#f5b431}.timeline__event--type3[_ngcontent-%COMP%]:after{background:#ce4061}.timeline__event--type3[_ngcontent-%COMP%]   .timeline__event__date[_ngcontent-%COMP%]{color:#cc5f78;background-color:#ce4061}.timeline__event--type3[_ngcontent-%COMP%]:nth-child(2n+1)   .timeline__event__icon[_ngcontent-%COMP%]:before, .timeline__event--type3[_ngcontent-%COMP%]:nth-child(2n+1)   .timeline__event__icon[_ngcontent-%COMP%]:after{background:#cc5f78}.timeline__event--type3[_ngcontent-%COMP%]   .timeline__event__icon[_ngcontent-%COMP%]{background:#cc5f78;color:#fff}.timeline__event--type3[_ngcontent-%COMP%]   .timeline__event__icon[_ngcontent-%COMP%]:before, .timeline__event--type3[_ngcontent-%COMP%]   .timeline__event__icon[_ngcontent-%COMP%]:after{background:#cc5f78}.timeline__event--type3[_ngcontent-%COMP%]   .timeline__event__title[_ngcontent-%COMP%]{color:#ce4061}.timeline__event--type4[_ngcontent-%COMP%]:after{background:#da5da6}.timeline__event--type4[_ngcontent-%COMP%]   .timeline__event__date[_ngcontent-%COMP%]{color:#eb94e1;background:#da5da6}.timeline__event--type4[_ngcontent-%COMP%]:nth-child(2n+1)   .timeline__event__icon[_ngcontent-%COMP%]:before, .timeline__event--type4[_ngcontent-%COMP%]:nth-child(2n+1)   .timeline__event__icon[_ngcontent-%COMP%]:after{background:#da5da6}.timeline__event--type4[_ngcontent-%COMP%]   .timeline__event__icon[_ngcontent-%COMP%]{background:#eb94e1;color:#fff}.timeline__event--type4[_ngcontent-%COMP%]   .timeline__event__icon[_ngcontent-%COMP%]:before, .timeline__event--type4[_ngcontent-%COMP%]   .timeline__event__icon[_ngcontent-%COMP%]:after{background:#eb94e1}.timeline__event--type4[_ngcontent-%COMP%]   .timeline__event__title[_ngcontent-%COMP%]{color:#da5da6}.timeline__event[_ngcontent-%COMP%]:last-child   .timeline__event__icon[_ngcontent-%COMP%]:before{content:none}@media (max-width: 886px){.timeline__event[_ngcontent-%COMP%]{flex-direction:column;align-self:center}.timeline__event__content[_ngcontent-%COMP%]{width:100%}.timeline__event__icon[_ngcontent-%COMP%]{border-radius:6px 6px 0 0;width:100%;margin:0;box-shadow:none}.timeline__event__icon[_ngcontent-%COMP%]:before, .timeline__event__icon[_ngcontent-%COMP%]:after{display:none}.timeline__event__date[_ngcontent-%COMP%]{border-radius:0;padding:20px}.timeline__event[_ngcontent-%COMP%]:nth-child(2n+1){flex-direction:column;align-self:center}.timeline__event[_ngcontent-%COMP%]:nth-child(2n+1)   .timeline__event__date[_ngcontent-%COMP%]{border-radius:0;padding:20px}.timeline__event[_ngcontent-%COMP%]:nth-child(2n+1)   .timeline__event__icon[_ngcontent-%COMP%]{border-radius:6px 6px 0 0;margin:0}}@keyframes fillLeft{to{right:100%}}@keyframes fillTop{to{top:100%}}@keyframes fillLeftOdd{to{left:100%}}#contact[_ngcontent-%COMP%]{background-color:#27282d;min-height:30vh}#contact[_ngcontent-%COMP%]   .btn-circle[_ngcontent-%COMP%]{width:30px;height:30px;text-align:center;padding:6px 0;font-size:12px;line-height:1.428571429;border-radius:15px}@media (min-width: 300px){#header[_ngcontent-%COMP%]   .img-header[_ngcontent-%COMP%]{width:400px;height:400px}#education[_ngcontent-%COMP%]   .img-education[_ngcontent-%COMP%]{width:550px!important;height:300px;border-radius:5px 5px 0 0}#about[_ngcontent-%COMP%]   .img-about[_ngcontent-%COMP%]{width:350px!important;height:350px!important;box-shadow:#00000059 0 5px 15px}}@media (min-width: 576px){#education[_ngcontent-%COMP%]   .img-education[_ngcontent-%COMP%]{width:550px!important;height:350px;border-radius:5px 5px 0 0}#about[_ngcontent-%COMP%]   .img-about[_ngcontent-%COMP%]{width:380px!important;height:380px!important;box-shadow:#00000059 0 5px 15px}}@media (min-width: 768px){#header[_ngcontent-%COMP%]   .img-header[_ngcontent-%COMP%]{width:450px;height:450px}#education[_ngcontent-%COMP%]   .img-education[_ngcontent-%COMP%]{height:200px;border-radius:5px 0 0 5px}#about[_ngcontent-%COMP%]   .img-about[_ngcontent-%COMP%]{width:350px!important;height:350px!important;box-shadow:#00000059 0 5px 15px}}@media (min-width: 992px){#header[_ngcontent-%COMP%]   .img-header[_ngcontent-%COMP%]{width:450px;height:450px}#education[_ngcontent-%COMP%]   .img-education[_ngcontent-%COMP%]{height:300px;border-radius:5px 0 0 5px}#about[_ngcontent-%COMP%]   .img-about[_ngcontent-%COMP%]{width:400px!important;height:400px!important;box-shadow:#00000059 0 5px 15px}}@media (min-width: 1200px){#header[_ngcontent-%COMP%]   .img-header[_ngcontent-%COMP%]{width:500px;height:500px}#about[_ngcontent-%COMP%]   .img-about[_ngcontent-%COMP%]{width:400px!important;height:400px!important;box-shadow:#00000059 0 5px 15px}}@media (min-width: 1400px){#header[_ngcontent-%COMP%]   .img-header[_ngcontent-%COMP%]{width:600px;height:600px}#about[_ngcontent-%COMP%]   .img-about[_ngcontent-%COMP%]{width:400px!important;height:400px!important;box-shadow:#00000059 0 5px 15px}}.pointer[_ngcontent-%COMP%]{cursor:pointer}.quick-link-hover[_ngcontent-%COMP%]{color:#fff!important}.quick-link-hover[_ngcontent-%COMP%]:hover{color:#ffc007!important}']}),a})();const k=[{path:"",component:C,children:[{path:"",component:C}]}];let y=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[Z.Bz.forChild(k),Z.Bz]}),a})(),T=(()=>{class a{}return a.\u0275fac=function(t){return new(t||a)},a.\u0275mod=e.oAB({type:a}),a.\u0275inj=e.cJS({imports:[P.ez,y]}),a})()}}]);