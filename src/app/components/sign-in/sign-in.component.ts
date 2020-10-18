import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  registerUserData = {
    name : '',
    country: '',
    skills : '',
    password : '',
    repeat_password : '',
    termes_condition : '',
    typeUser : 'simple'
  };

  registerEntrepriseData = {
    name : '',
    country: '',
    password : '',
    repeat_password : '',
    termes_condition : '',
    typeUser : 'special'
  };

  loginUserData = {
    username : '',
    password : '',
    stay_connected : ''
  };

  constructor() { }

  ngOnInit(): void {
  }

  registerUser() {
    console.log(this.registerUserData);
  }

  registerEntreprise() {
    console.log(this.registerEntrepriseData);
  }

  loginUser() {
    console.log(this.loginUserData);

  }
}
