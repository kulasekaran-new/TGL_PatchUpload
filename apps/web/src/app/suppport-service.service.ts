import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { first, map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class SuppportServiceService {

  constructor(private http: HttpClient) { }
  login_detail(username,pwd){
  // console.log(data)
    let url = `${environment.apiUrl}/verifyaccount?susername=${username}&spassword=${pwd}`;
    return this.http.get<any>(url).pipe(
      map((response: Response) => {
        return response;
      })
    );
  }
  patchlist(username,companycode,searchvalue){
    // console.log(data)
    console.log(searchvalue)
    // username ='SACHIN'
    // companycode='TGL'
    let url = `${environment.apiUrl}/getpatch_details?username=${username}&company_code=${companycode}&type=EFS&search_type=${searchvalue}`;
    return this.http.post<any>(url,'').pipe(
      map((response: Response) => {
        return response;
      })
    );
  }
  download_patch(a,username,companycode,val){
    let url = `${environment.apiUrl}/Document_Download?username=${username}&company_code=${companycode}&type=${val}&efs_web=EFS&patch_no=${a.PATCH_NO}`;
    
    window.open(url,'blank')

    return this.http.get<any>(url).pipe(
      map((response: Response) => {
        return response;
      })
    );
  }
  getcompanyList(username){
    username='SACHIN'
    let url = `${environment.apiUrl}/getcompany_master?susername=${username}`;
    return this.http.get<any>(url).pipe(
      map((response: Response) => {
        return response;
      })
    );
  }
  upload_patch(username,company_name,type,files,filename,product_name,notes){
    const obj ={
      username:username,
      company_code:company_name,
      type:type,
      files:files,
      patch_no:filename,
      file_name:filename,
      product:product_name,
      note_content:notes
    }
    console.log(obj)
    let url = `${environment.apiUrl}/upload_patch`;
    return this.http.post<any>(url,obj).pipe(
      map((response: Response) => {
        return response;
      })
    );
  }
}
