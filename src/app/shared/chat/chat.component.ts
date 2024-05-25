import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { faPhone, faVideo, faTimes, faPaperclip, faSmile, faMicrophone, faX, faMinus, faAngleLeft, faPaperPlane, faSignOut, faTriangleExclamation } from '@fortawesome/free-solid-svg-icons';
import { Message } from '../../models/Messages'

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  faPhone = faPhone;
  faVideo = faVideo;
  faTimes = faTimes;
  faPaperclip = faPaperclip;
  faSmile = faSmile;
  faMicrophone = faMicrophone;
  faX = faX;
  faMinus = faMinus;
  faAngleLeft = faAngleLeft;
  faPaperPlane = faPaperPlane;
  faSignOut = faSignOut;
  faTriangleExclamation = faTriangleExclamation;

  public textInput!: string;
  public loading?: boolean;
  public isAuthenticated?: boolean;
  public title?: string;

  public isBypass?: boolean;
  public mobile?: boolean;
  public isMenuInitOpen?: boolean;
  public dateNow: Date = new Date();
  public isShowChat = false;

  messages = new Array<Message>();
  message = new Message();



  constructor() { }

  ngOnInit(): void {
  }

  onKeydownMessages(event: any) {
    if (event.key === "Enter") {
      this.sendMessage(event.target.value);
    }
  }

  sendMessage(value: any, isPressEvent: boolean = false): void {
    this.message = new Message();
    this.message.type = "sent";
    this.message.message = value;
    this.message.time_stamp = this.dateNow;
    debugger

    let checkDate = this.messages[this.messages.length - 1]
    var date = new Date(checkDate?.time_stamp?.toString() ?? "")
    if (date.getDate() == this.dateNow.getDate() &&
      date.getMinutes() == this.dateNow.getMinutes()) {
      this.messages[this.messages.length - 1].time_stamp = null;
    }

    this.messages.push(this.message);
    this.textInput = "";
    this.scrollToBottom();
  }

  switchChat() {
    this.isShowChat = !this.isShowChat;
    if (this.isShowChat) {
      this.scrollToBottom()
    }
  }

  scrollToBottom(): void {
    try {
      setTimeout(() => {
        if (this.myScrollContainer?.nativeElement?.scrollHeight) {
          this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer?.nativeElement?.scrollHeight;
        }
      }, 10)
    } catch (err) { }
  }

}
