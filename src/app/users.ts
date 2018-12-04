export class User{
    name: string;
    email: string;
    buddy: string;
    color: string;

    constructor(){
        this.name = "";
        this.email = "";
        this.buddy = "";
        this.color = "";
    }

    setUser(name: string, email: string, buddy: string, color: string){
        this.name = name;
        this.email = email;
        this.buddy = buddy;
        this.color = color;
    }
}