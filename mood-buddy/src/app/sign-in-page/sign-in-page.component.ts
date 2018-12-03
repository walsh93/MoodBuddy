import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sign-in-page',
  templateUrl: './sign-in-page.component.html',
  styleUrls: ['./sign-in-page.component.css']
})
export class SignInPageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onSubmit(){
    const email = (<HTMLInputElement>document.getElementById("userEmail")).value;
    const password = (<HTMLInputElement>document.getElementById("userPassword")).value;

    const body = `email=${email}&password=${password}`;
    let request = new XMLHttpRequest();
    request.open("POST", "/signin", true);

    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");

    request.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (request.status == 200 || request.status == 403) {
          window.location.href = request.responseText;
        } else if (request.status == 401 || request.status == 500) {
          alert(request.responseText);
        } else {
          alert(`${request.responseText}Your POST request received an unhandled response code.`);
        }
      }
    }
    // Send the request
    request.send(body);
  }

}
