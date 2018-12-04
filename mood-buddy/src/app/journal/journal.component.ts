import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';
import { User } from '../users';
@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {
  user: User = new User();
  userID: string;
  mood: string;
  rate: number;
  journal: string;
  activity: string;
  date: string;
  logs = [];
  link: string; 


  constructor(private dataHandlerService: DataHandlerService) { }

  ngOnInit() {
  
    this.dataHandlerService.getUserData().then((moodBuddySession)=>{
      this.userID = moodBuddySession.userId;
      this.logs = moodBuddySession.logs;
      if(this.logs){
        for(let i = this.logs.length-1; i >=0 ; i++){
          this.mood = this.logs[i].mood;
          this.rate = this.logs[i].rate;
          this.activity = this.logs[i].activity;
          this.date = this.logs[i].date;
          this.journal = this.logs[i].journal;
        }
      }
      this.link = "/dashboard/" + this.userID;
  });
}

}
