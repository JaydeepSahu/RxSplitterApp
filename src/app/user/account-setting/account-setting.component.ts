import { Component, OnInit } from '@angular/core';
import jwt_decode from 'jwt-decode';
import { Router } from '@angular/router';
import { AccountsettingService } from 'src/app/services/accountsetting.service';
import { AccountSetting } from 'src/app/model/account-setting';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-account-setting',
  templateUrl: './account-setting.component.html',
  styleUrls: ['./account-setting.component.css']
})
export class AccountSettingComponent implements OnInit {
  loggedUserVal : string ="";
  loggedUserValEmail="";
  phonenumber ="";
  profileimage = ""
  //dob =""; 
  decoded:any=[]
  auth_token : any
  useraccountsetting:AccountSetting = {name:'', email:'', phonenumber:'' , profileimage :''};

  imageSrc: string;

  constructor(public router : Router , private accountSetting : AccountsettingService) { 
   
  }

  ngOnInit() {
    this.auth_token =  JSON.parse(localStorage.getItem('Token') || '{}').value
    this.decoded = jwt_decode(this.auth_token);
   
    this.accountSetting.GetUserDetail().subscribe((res: any) => {
      
      this.useraccountsetting.name = res.response[0].name
      this.useraccountsetting.email = res.response[0].email
      this.useraccountsetting.phonenumber = res.response[0].phoneNumber
      this.imageSrc = res.response[0].profileImage 
       
      });
  }
  CancelAccountSetting()
  {
      this.router.navigateByUrl('/Dashboard')
  }

  SaveUserDetail()
  {
   
    this.useraccountsetting.profileimage=this.imageSrc
    return this.accountSetting.UpdateUserDetail(this.useraccountsetting).subscribe((res: any) => {
    
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'User updated successfully !',
        showConfirmButton: false,
        timer: 2000
       
      })
      setTimeout(() => {
        window.location.reload();
      }, 1000); 
    })
  }

  onFileChange(event) {
debugger
    const reader = new FileReader();
    const [file] = event.target.files;
    if(event.target.files && event.target.files.length) {
      if(file.type == "image/jpeg" || file.type == "image/png" || file.type == "image/jpg")
      {
        reader.readAsDataURL(file);

      reader.onload = () => {
        this.imageSrc = reader.result as string;
      };
    }
      else
      {
        //file.name = "";
         this.imageSrc = "";
        Swal.fire({
          position: 'center',
          icon: 'error',
          title: 'Please select a valid file format (.png , .jpg , .jpeg)!',
          showConfirmButton: false,
          timer: 2000
        })
        setTimeout(() => {
          window.location.reload();
        }, 1000); 
      }

    }

  }

}
