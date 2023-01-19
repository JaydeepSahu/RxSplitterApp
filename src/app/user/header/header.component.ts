import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/services/auth-service.service';
import jwt_decode from 'jwt-decode';
import { AccountsettingService } from 'src/app/services/accountsetting.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  loggedUserVal="";
  decoded:any=[]
  auth_token : any
  imageSrc: string;

  constructor(private _auth : AuthServiceService, public router : Router, public accountSetting : AccountsettingService)
  {
    this.auth_token =  JSON.parse(localStorage.getItem('Token') || '{}').value
    this.decoded = jwt_decode(this.auth_token);
    console.log('decodejwt',this.decoded.Name)
    this.loggedUserVal=this.decoded.Name
  }
  ngOnInit(): void {
    this.accountSetting.GetUserDetail().subscribe((res: any) => 
    {
      this.imageSrc = res.response[0].profileImage 
    });
  }
  logout()
  {
   this._auth.removeToken();
   this.router.navigateByUrl("/");
  }
}
