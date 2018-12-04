export class MoodLog{
    mood: string;
    rate: string;
    journal: string;
    activity: string;
    date: string;

    constructor(){
        this.mood = "";
        this.rate = "";
        this.journal = "";
        this.activity = "";
        this.date = "";
    }

    setLog(mood: string, rate: string, journal: string, activity: string, date:string){
        this.mood = mood;
        this.rate = rate;
        this.journal = journal;
        this.activity = activity;
        this.date = date;
    }
}