import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['../../styles.css','./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const name=(<HTMLInputElement>document.getElementById("name")).value;
    const email=(<HTMLInputElement>document.getElementById("email")).value;
    const password=(<HTMLInputElement>document.getElementById("password")).value;
    const confirm=(<HTMLInputElement>document.getElementById("confirm_password")).value;
    const buddy=(<HTMLInputElement>document.getElementById("buddy")).value;
    const color=(<HTMLInputElement>document.getElementById("color")).value;

    const body = `name=${name}&` +
    `email=${email}&` +
    `password=${password}&` +
    `confirm=${confirm}&` +
    `buddy=${buddy}` +
    `color=${color}`;

    /*
    let request = new XMLHttpRequest();
    request.open("POST",`signup-page`,true);

    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    */

  }

}
