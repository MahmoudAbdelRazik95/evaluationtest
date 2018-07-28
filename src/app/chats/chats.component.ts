import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chats',
  templateUrl: './chats.component.html',
  styleUrls: ['./chats.component.css']
})
export class ChatsComponent implements OnInit {

// Should load the last message of each contact and the contacts to these arrays to display them
  lastMessages = [
  	{user2: 'Mahmoud', lastMessage: 'Hi'},
  	{user2: 'Ahmed', lastMessage: 'Bye'},
  	{user2: 'Mohamed', lastMessage: 'Hello'},
  	{user2: 'Bassel', lastMessage: 'How are you?'},
  	{user2: 'Hussein', lastMessage: 'Fine'}
  ];
  contacts = [
  	{name: 'Mahmoud'},
  	{name: 'Ahmed'},
  	{name: 'Mohamed'}
  ];

  messages = [
  	{user1: 'Mahmoud', user2: 'Ahmed', message: 'Hi', datetime: '2018-07-28 12:05:45', isattachment: false},
  	{user1: 'Ahmed', user2: 'Mahmoud', message: 'Hello', datetime: '2018-07-28 12:15:13', isattachment: false},
  	{user1: 'Mahmoud', user2: 'Ahmed', message: 'How are you?', datetime: '2018-07-28 12:22:30', isattachment: false}
  ];
 //---------------------------------------------------------

  selectedContact = this.lastMessages[0].user2;  


  constructor() { }

  ngOnInit() {
  }

  selectContact(name)
  {
  	this.selectedContact = name;
  	// It should load all the messages between those 2 contacts according to their dates and times
  	// then opens a websocket (using socket.io) between these 2 contacts to send the messages in realtime
  	// and finally every contact updates all its chat histories upon receiving a message from the socket
  }
}
