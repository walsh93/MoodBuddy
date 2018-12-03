/**
 * Sources used
 * https://stackoverflow.com/questions/51669379/get-json-data-from-nodejs-to-angular-6
 */
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
 @Injectable({
  providedIn: 'root'
})

export class DataHandlerService {
   dataHandlerUrl = "/data-handler/:uid";
   constructor(private http: HttpClient) { }
   // response from a get request to /data-handler/:uid is the moodBuddySession as a json from app.get(path.join(dataHandlerUrl, ":uid"))
   getUserData(): Promise<any> {
     console.log("We out here");
      return this.http.get(this.dataHandlerUrl).toPromise().then((response) => {
      return response;
    }).catch((error) => {
      console.log(error);
    });
  }
}