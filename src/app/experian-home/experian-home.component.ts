import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Object } from '../classes/object';
import { ExperianPayload } from '../classes/experian-payload';
import { ObjectExperian } from '../classes/obj-experian';

@Component({
  selector: 'app-experian-home',
  templateUrl: './experian-home.component.html',
  styleUrls: ['./experian-home.component.css']
})
export class ExperianHomeComponent implements OnInit {

  obj:ObjectExperian = new ObjectExperian();
  data!:any
  companyName!:string
  searched:boolean = false;
  showMessage:boolean = false;
  showAddressError:boolean = false;
  showPhoneError:boolean = false;
  name!:string;
  address!:string
  country!:string
  token!:string
  body:ExperianPayload = new ExperianPayload();
    constructor(private service:ApiService) { }
  
    ngOnInit(): void {
      this.getAuth()
      this.searched = false
    }
  
    getAuth(){
      this.body.client_id = 'kFWwcJbTVg8n7RFN7E0m9xc0EP2gOvnj';
      this.body.client_secret = 'aCG4xp5MmkPrhboU';
      this.body.username = 'sarim.aqeel@royalcyber.com';
      this.body.password = '@Passw0rd16';
  this.service.getAuthenticationTokenExperian(this.body).subscribe(data=>{
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
      this.showAddressError = false
      this.showPhoneError = false
      console.log(this.obj.name);
      
      this.getCompany()
    }
    getCompany(){
  this.obj.subcode = '0563736';
  
      this.service.getCompanyDetailsExperian(this.obj, this.token).subscribe(data=>{
        console.log(data);
    
        this.data = data;
        console.log(this.data.results[0].businessName)
  
        if(this.data.results[0].address.street != this.obj.street){
          this.showAddressError = true;
        }
        if(this.data.results[0].phone != this.obj.phone){
          this.showPhoneError = true;
        }
        if(this.searched == true){
          this.showMessage = false;
        }
  
      }, error=>{
        console.log(error);
        this.searched = false
        this.showMessage = true;
      })
    }

}
