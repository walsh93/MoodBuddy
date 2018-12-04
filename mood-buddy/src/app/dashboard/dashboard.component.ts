import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';
//import { AngularFirestore, AngularFirestoreDocument } from  '@angular/fire/firestore'
import * as _ from 'lodash'

declare var Plotly: any;

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
  pic: string;
  userID: string;
  logs = [];
  moodArray = [0, 0, 0, 0, 0, 0, 0, 0, 0,];

  @ViewChild('chart') el: ElementRef;

  constructor(private dataHandlerService: DataHandlerService) { }


  ngOnInit() {

    this.dataHandlerService.getUserData().then((moodBuddySession)=>{
      this.name=moodBuddySession.name;
      this.email=moodBuddySession.email;
      this.buddy=moodBuddySession.buddy;
      this.color=moodBuddySession.color;

      //* Conley's Test code *//
      this.userID = moodBuddySession.userID;

      this.logs = moodBuddySession.logs;
      if(this.logs){
        for(let i = 0; i < this.logs.length; i++){
          this.logs[i].mood;
         // `${this.logs[i].mood}`);
          if(this.logs[i].mood=="excited"){
            this.moodArray[3] = this.moodArray[3] + parseInt(`${this.logs[i].rate}`);

          }
        }
      } else {
          //empty graph here!
      }
      window.alert(`${this.moodArray[3]}`);

      /* GET BUDDY ICON */
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

      var data = [{
        values: this.moodArray,
        //firebase log data needs to be added here ^
        labels: ['Anxious','Appreciated','Excited','Frustrated','Happy','Okay','Mad','Sad','Tired'],
        type: 'pie'
      }];
      
      var layout = {
        height: 375,
        width: 500
      };
      
      Plotly.newPlot(element, data, layout);

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
  
        const element = this.el.nativeElement
       /* 
        var data = [{
          values: this.moodArray,
          //firebase log data needs to be added here ^
          labels: ['Anxious','Appreciated','Excited','Frustrated','Happy','Okay','Mad','Sad','Tired'],
          type: 'pie'
        }];
        
        var layout = {
          height: 375,
          width: 500
        };
        
        Plotly.newPlot(element, data, layout);
        */
    }
    
}
