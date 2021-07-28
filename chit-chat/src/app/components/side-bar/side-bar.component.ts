import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'chit-chat-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Output()
  conversationClicked: EventEmitter<any> = new EventEmitter<any>();

  conversations = [
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: false },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: false },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: false },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: false },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: false },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true },
    { name: 'Israt', message: 'Hey', time: '8:00 AM', messageRead: true }




  ];

  constructor() { }

  ngOnInit(): void {

  }

}
