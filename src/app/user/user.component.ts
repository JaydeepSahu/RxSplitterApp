import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from '../services/auth-service.service';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'user-root',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  loggedUserVal="";
  decoded:any=[]
  auth_token : any
  year:number = new Date().getFullYear();

  constructor(private _auth : AuthServiceService, public router : Router,)
  {
    this.auth_token =  JSON.parse(localStorage.getItem('Token') || '{}').value
    this.decoded = jwt_decode(this.auth_token);
    console.log('decodejwt',this.decoded.Name)
    this.loggedUserVal=this.decoded.Name
  }

    ngOnInit():void
    {
        document.getElementById("myBtn")?.click();
        //this.myAccFunc();
       // this.loggedUserVal=this._auth.loggedUser;
        //console.log(this.loggedUserVal);
    }
     

  logout()
  {
   this._auth.removeToken();
   this.router.navigateByUrl("/");
  }

  // Accordion 
  myAccFunc() 
  {
    var x = document.getElementById("demoAcc")!;
    if (x?.className.indexOf("w3-show") == -1) {
      x.className += " w3-show";
    } else {
      x.className = x?.className.replace(" w3-show", "");
    }
  }
  
  // Click on the "Jeans" link on page load to open the accordion for demo purposes
  // document.getElementById("myBtn").click();

  // Open and close sidebar
  w3_open() 
  {
    document.getElementById("mySidebar")!.style.display = "block";
    document.getElementById("myOverlay")!.style.display = "block";
  }
   
  w3_close() {
    
    document.getElementById("mySidebar")!.style.display = "none";
    document.getElementById("myOverlay")!.style.display = "none";
  }


//-------------------------------------------other



  
}
