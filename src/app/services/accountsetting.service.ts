import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AccountSetting } from '../model/account-setting';

@Injectable({
  providedIn: 'root'
})
export class AccountsettingService {

  constructor(private _http: HttpClient) { }

  auth_token =  JSON.parse(localStorage.getItem('Token') || '{}').value
 
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  });

 link="https://rxsplitterapis.azurewebsites.net/api/v1/"
//link="https://localhost:7228/api/v1/" 

UpdateUserDetail(accountsetting : AccountSetting)
{
  
  return this._http.put(this.link+"UserDetail/UpdateUser",accountsetting,
  { headers: this.headers}
  )
 }

 GetUserDetail()
{
  
  return this._http.get(this.link+"UserDetail/GetUserDetailById",
  { headers: this.headers }
  )
 }

}
