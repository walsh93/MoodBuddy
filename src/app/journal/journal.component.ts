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
  buddy: string;
  journal: string;
  activity: string;
  date: string;
  logs = [];
  link: string; 
  name: string;
  color: string;



  constructor(private dataHandlerService: DataHandlerService) { }

  ngOnInit() {
  
    this.dataHandlerService.getUserData().then((moodBuddySession)=>{
      this.userID = moodBuddySession.userId;
      this.logs = moodBuddySession.logs;
      this.buddy=moodBuddySession.buddy;
      this.name=moodBuddySession.name;
      this.color=moodBuddySession.color;


//* GET BUDDY ICON *//
if(this.color == "Blue"){
  if(this.buddy == "Bear"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/BlueBear.png");
  }else if(this.buddy == "Elephant"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/BlueElephant.png");
  }else if(this.buddy == "Giraffe"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/BlueGiraffe.png");
  }else if(this.buddy == "Koala"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/BlueKoala.png");
  }else if(this.buddy == "Lion"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/BlueLion.png");
  }else if(this.buddy == "Panda"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/BluePanda.png");
  }else if(this.buddy == "Rhino"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/BlueRhino.png");
  }else if(this.buddy == "Sheep"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/BlueSheep.png");
  }else if(this.buddy == "Tiger"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/BlueTiger.png");
  }
}else if(this.color == "Green"){
  if(this.buddy == "Bear"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/GreenBear.png");
  }else if(this.buddy == "Elephant"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/GreenElephant.png");
  }else if(this.buddy == "Giraffe"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/GreenGiraffe.png");
  }else if(this.buddy == "Koala"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/GreenKoala.png");
  }else if(this.buddy == "Lion"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/GreenLion.png");
  }else if(this.buddy == "Panda"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/GreenPanda.png");
  }else if(this.buddy == "Rhino"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/GreenRhino.png");
  }else if(this.buddy == "Sheep"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/GreenSheep.png");
  }else if(this.buddy == "Tiger"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/GreenTiger.png");
  }
}else if(this.color == "Orange"){
  if(this.buddy == "Bear"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/OrangeBear.png");
  }else if(this.buddy == "Elephant"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/OrangeElephant.png");
  }else if(this.buddy == "Giraffe"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/OrangeGiraffe.png");
  }else if(this.buddy == "Koala"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/OrangeKoala.png");
  }else if(this.buddy == "Lion"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/OrangeLion.png");
  }else if(this.buddy == "Panda"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/OrangePanda.png");
  }else if(this.buddy == "Rhino"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/OrangeRhino.png");
  }else if(this.buddy == "Sheep"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/OrangeSheep.png");
  }else if(this.buddy == "Tiger"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/OrangeTiger.png");
  }
}else if(this.color == "Pink"){
  if(this.buddy == "Bear"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PinkBear.png");
  }else if(this.buddy == "Elephant"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PinkElephant.png");
  }else if(this.buddy == "Giraffe"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PinkGiraffe.png");
  }else if(this.buddy == "Koala"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PinkKoala.png");
  }else if(this.buddy == "Lion"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PinkLion.png");
  }else if(this.buddy == "Panda"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PinkPanda.png");
  }else if(this.buddy == "Rhino"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PinkRhino.png");
  }else if(this.buddy == "Sheep"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PinkSheep.png");
  }else if(this.buddy == "Tiger"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PinkTiger.png");
  }
}else if(this.color == "Purple"){
  if(this.buddy == "Bear"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PurpleBear.png");
  }else if(this.buddy == "Elephant"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PurpleElephant.png");
  }else if(this.buddy == "Giraffe"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PurpleGiraffe.png");
  }else if(this.buddy == "Koala"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PurpleKoala.png");
  }else if(this.buddy == "Lion"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PurpleLion.png");
  }else if(this.buddy == "Panda"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PurplePanda.png");
  }else if(this.buddy == "Rhino"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PurpleRhino.png");
  }else if(this.buddy == "Sheep"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PurpleSheep.png");
  }else if(this.buddy == "Tiger"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/PurpleTiger.png");
  } 
}else if(this.color == "Red"){
  if(this.buddy == "Bear"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/RedBear.png");
  }else if(this.buddy == "Elephant"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/RedElephant.png");
  }else if(this.buddy == "Giraffe"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/RedGiraffe.png");
  }else if(this.buddy == "Koala"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/RedKoala.png");
  }else if(this.buddy == "Lion"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/RedLion.png");
  }else if(this.buddy == "Panda"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/RedPanda.png");
  }else if(this.buddy == "Rhino"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/RedRhino.png");
  }else if(this.buddy == "Sheep"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/RedSheep.png");
  }else if(this.buddy == "Tiger"){
    document.getElementById("myBuddy").setAttribute("src","../../../Animal_Icons/RedTiger.png");
  }
} 


      if(this.logs){
        for(let i = 0; i < this.logs.length; i++){
          this.mood = this.logs[i].mood;
          this.rate = this.logs[i].rate;
          this.activity = this.logs[i].activity;
          this.date = String(this.logs[i].date);
          this.journal = this.logs[i].journal;
        }
      }
      this.link = "/dashboard/" + this.userID;
  });
}

}
