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
  intensity: string;
  journal: string;
  activity: string;
  date: string;


  constructor(private dataHandlerService: DataHandlerService) { }

  ngOnInit() {

    this.dataHandlerService.getUserData().then((moodBuddySession)=>{
      this.userID = moodBuddySession.userId;
      const logs = moodBuddySession.logs;
      let i = 0;
      for(i = 0; i < logs.length; i++){
       this.mood = logs[i].mood;
       this.intensity = logs[i].intensity;
       this.date = logs[i].date;
       this.activity = logs[i].activity;
       this.journal = logs[i].journal;
      }
    });
  }

}
