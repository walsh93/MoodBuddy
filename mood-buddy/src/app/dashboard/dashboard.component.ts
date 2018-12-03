import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  name: string;
  email: string;
  buddy: string;
  color: string;
  //userID: string;

  constructor(private dataHandlerService: DataHandlerService) { }


  ngOnInit() {
    
    this.dataHandlerService.getUserData().then((moodBuddySession)=>{
      this.name=moodBuddySession.name;
      this.email=moodBuddySession.email;
      this.buddy=moodBuddySession.buddy;
      this.color=moodBuddySession.color;
      //this.userID= moodBuddySession.userID;
    });
    

        var d = new Date();
        var weekday = new Array(7);
        weekday[0] =  "I hope you're having a great Sunday!";
        weekday[1] = "I hope you're having a great Monday!";
        weekday[2] = "I hope you're having a great Tuesday!";
        weekday[3] = "I hope you're having a great Wednesday!";
        weekday[4] = "I hope you're having a great Thursday!";
        weekday[5] = "I hope you're having a great Friday!";
        weekday[6] = "I hope you're having a great Saturday!";
        var n = weekday[d.getDay()];
        document.getElementById("week").innerHTML = n;

        var myDate = new Date();
        var hrs = myDate.getHours();
    
        var greet;
    
        if (hrs < 12)
            greet = 'Good Morning, ';
        else if (hrs >= 12 && hrs <= 17)
            greet = 'Good Afternoon, ';
        else if (hrs >= 17 && hrs <= 24)
            greet = 'Good Evening, ';
    
        document.getElementById("greeting").innerHTML = greet;
  }

  
}
