import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
 /*
  name: string;
  email: string;
  buddy: string;
  color: string;
  userID: string;

  constructor(private dataHandlerService: DataHandlerService) { }
*/
  ngOnInit() {
  /*
    this.dataHandlerService.getUserData().then((moodBuddySession)=>{
    this.name=moodBuddySession.name;
    this.email=moodBuddySession.email;
      this.buddy=moodBuddySession.buddy;
      this.color=moodBuddySession.color;
      this.userID= moodBuddySession.userID;
    });
    */
  }

}
