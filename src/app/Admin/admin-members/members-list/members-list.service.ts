import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MembersListService {
 public BaseUrl = environment.base_url;
  constructor(private httpClient:HttpClient) { }
  getGroups(){
    return this.httpClient.get<any>( this.BaseUrl + 'Admin/Setting/getSupplierGroups').pipe(map(res=>{
      return res;
    }))
  }
  getStates(){
    return this.httpClient.get<any>( this.BaseUrl + 'Supplier/getCommonSupplierStates').pipe(map(res=>{
      return res;
    }))
  }
  getCustomerListing(info:any){
    return this.httpClient.get<any>( this.BaseUrl + 'Customer/getCustomerList/'+info).pipe(map(res=>{
      return res;
    }))
  }
  //http://54.218.66.217/sparezone/Customer/getCustomerList/1
  activeDeactiveSupplier(info:any){
    return this.httpClient.put<any>(this.BaseUrl +'Customer/customerUpdate',info).pipe(map(res=>{
      return res;
    }))
  }
}
