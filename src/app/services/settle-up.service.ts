import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettleUpService {

  constructor(private _http: HttpClient) { }
   
  grpList: any
  
  auth_token =  JSON.parse(localStorage.getItem('Token') || '{}').value
 
  
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${this.auth_token}`
  });

link="https://rxsplitterapis.azurewebsites.net/api/v1/"


getPaymentAmount(id){
  let link=this.link+"Transaction/GetSettleUpPaymentData/"+id
  return this._http.post(link,"",
  { headers: this.headers}
  )
}
SaveTransaction(grpId,jsonElement){
  debugger
  //
  let link=this.link+"Transaction/AddTransactionbyCsharp/"+grpId
  return this._http.post(link,jsonElement,
  { headers: this.headers}
  )
}

getTransaction(grpId){
  let link=this.link+"Transaction/GetTransactionAccGroupId/"+grpId
  return this._http.get(link,{
    headers:this.headers
  })

 
}
acceptTransaction(transactionId){
  let link=this.link+"Transaction/AcceptTransaction/"+transactionId
  return this._http.put(link,"",{
    headers:this.headers
  })
}

}
