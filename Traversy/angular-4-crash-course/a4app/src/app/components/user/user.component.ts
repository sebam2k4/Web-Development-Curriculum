import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string;
  age:number;
  email:string;
  // define object - set to use the interface we defined
  address:Address;
  hobbies:string[]; // can use string, number, or any for mixed
  hello:any;
  posts:Post[];
  isEdit:boolean = false;


  constructor(private dataService:DataService) { 
    console.log('constructor ran...');
  }
  ngOnInit() {
    console.log('ngOnInit ran...');
    this.name = 'Sebastian Kulig';
    this.age = 32;
    this.email = "sebam2k4@gmail.com"
    this.address = {
      street: "8 Mall Mews",
      city: "Castlebar",
      county: "Mayo"
    };
    this.hobbies = ["Write code", "watch movies", "photography"];
    this.hello = 69;
    // getPosts returns an observable that needs to be subscribed to
    this.dataService.getPosts().subscribe((posts) => {
      //console.log(posts)
      // assign posts to posts property defined above
      this.posts = posts;
    });
  }

  addHobby(hobby){
    console.log(hobby);
    this.hobbies.unshift(hobby); //add as first item in array
    return false;
  }

  deleteHobby(hobby){
    console.log("delete")
    for(let i = 0; i < this.hobbies.length; i++){
      if(this.hobbies[i] == hobby){
        this.hobbies.splice(i,1);
      }
    }
  }

  toggleEdit(){
    this.isEdit = !this.isEdit;
  }
}


interface Address {
  street:string,
  city:string,
  county:string
}

interface Post {
  id:number,
  title:string,
  body:string,
  userId:number
}