import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
	email: string;
	pass: string;
	name: string;

  constructor() { }

  ngOnInit() {
  	
  }

  submit(){
    // Send these data to the database and save the user if the email is not used before
  	console.log(this.name);
  	console.log(this.email);
  	console.log(this.pass);
  }
}
