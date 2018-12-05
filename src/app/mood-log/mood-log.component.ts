import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from '../data-handler.service';

@Component({
  selector: 'app-mood-log',
  templateUrl: './mood-log.component.html',
  styleUrls: ['./mood-log.component.css']
})
export class MoodLogComponent implements OnInit {
  name: string;
  email: string;
  buddy: string;
  color: string;
  pic: string;
  userID: string;
  date: string;
  link: string; 

  constructor(private dataHandlerService: DataHandlerService) { }


  ngOnInit() {
    var d = new Date();
    var n = d.toDateString();
    this.date = String(n);
    
    this.dataHandlerService.getUserData().then((moodBuddySession)=>{
      this.name=moodBuddySession.name;
      this.email=moodBuddySession.email;
      this.buddy=moodBuddySession.buddy;
      this.color=moodBuddySession.color;
      this.userID=moodBuddySession.userID;
      this.link = "/dashboard/" + this.userID;

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
    });

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
    
  }//Ngoninit

  onLog(){
    const d = this.date;
    const mood=(<HTMLInputElement>document.getElementById("mood")).value;
    const rate = (<HTMLInputElement>document.getElementById("rate")).value;
    const activity = (<HTMLInputElement>document.getElementById("activity")).value;
    const journal = (<HTMLInputElement>document.getElementById("journal")).value;

    const body = `date=${d}&` +
    `mood=${mood}&` +
    `rate=${rate}&` +
    `activity=${activity}&` +
    `journal=${journal}&` +
    `userID=${this.userID}&`;

    
    let request = new XMLHttpRequest();
    request.open("POST","/mood-log",true);

    request.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
    
    request.onreadystatechange = function () {
      if (this.readyState === XMLHttpRequest.DONE) {
        if (request.status == 202 || request.status == 403) {
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
