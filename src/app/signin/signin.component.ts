import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

	email: string;
	pass: string;

  constructor() { }

  ngOnInit() {
  }

  submit(){
    // navigate to the chats if the email and password are correct
  	console.log(this.email);
  	console.log(this.pass);
  }

}
