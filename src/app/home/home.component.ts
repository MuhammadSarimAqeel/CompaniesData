import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Object } from '../classes/object';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

obj:Object = new Object();
data!:any
companyName!:string
searched:boolean = false;
showMessage:boolean = false;
name!:string;
address!:string
country!:string
token!:string
  constructor(private service:ApiService) { }

  ngOnInit(): void {
    this.getAuth()
    this.searched = false
  }

  getAuth(){
this.service.getAuthenticationToken().subscribe(data=>{
console.log(data);
console.log(data.access_token);
this.token = data.access_token


}, error=>{
  console.log(error);
  
})
  }

  onsubmit(){
    this.searched = true
    this.showMessage = false
    console.log(this.obj.name);
    
    this.getCompany()
  }
  getCompany(){

    this.service.getCompanyDetails(this.obj, this.token).subscribe(data=>{
      console.log(data);
  
      this.data = data;
      console.log(this.data.companies[0].name)

      if(this.data.companies[0].address.street+ " " +this.data.companies[0].address.town+ " " + this.data.companies[0].address.postalCode != this.address){
        this.showMessage = true;
      }



    }, error=>{
      console.log(error);
      
    })
  }
}
