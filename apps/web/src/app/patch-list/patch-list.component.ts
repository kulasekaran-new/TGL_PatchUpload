import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SuppportServiceService } from '../suppport-service.service';
@Component({
  selector: 'app-patch-list',
  templateUrl: './patch-list.component.html',
  styleUrls: ['./patch-list.component.scss']
})
export class PatchListComponent {
  constructor(
    private router: Router,private supportservice: SuppportServiceService
  ){} 
  companylist:any=[]
  temp:any={}
  temp_companylist:any={}
  companylist1:any={}
  ngOnInit(): void {
    const username = localStorage.getItem('username');
    const companycode = localStorage.getItem('companyname')
    this.supportservice.patchlist(username,companycode,'').subscribe((data: any) => {
     console.log(data)
     this.companylist = data.company_detail
     this.temp_companylist = data.company_detail
     this.companylist1 = data.company_detail
    });  
  }
  navigate(){
    this.router.navigate(['/admin_screen']);
  } 
  download_patch(a,val){
    console.log(a)
    const username = localStorage.getItem('username');
    const companycode = localStorage.getItem('companyname')
    this.supportservice.download_patch(a,username,companycode,val).subscribe((data: any) => {
      console.log(data)
      this.companylist = data.company_detail
    
     });
  }
  keyup_func1(event){
    let val =event.target.value
    // console.log(this.temp_companylist)
    var results_filter = this.temp_companylist.filter( (e:any) => {
      if (val) {
        return e.FILE_NAME.toUpperCase().includes(val.toUpperCase()) 
      } else {
        console.log(val)
        console.log(this.temp_companylist)
        results_filter = this.temp_companylist
        return  results_filter
      }
    });
    console.log(results_filter)
    this.companylist1 = results_filter
    this.companylist = results_filter
    console.log(this.companylist1)
  }
  someMethod1(e,opt1){
   
    this.temp.val = opt1.FILE_NAME
    let opt =opt1.FILE_NAME
    var results_filter = this.temp_companylist.filter(function (e) {
      if (opt) {
        return e.FILE_NAME.includes(opt);
      } else {
        return  this.temp_companylist
      }
    });
    this.companylist = results_filter
  }
  loguot(){
    localStorage.clear();
    window.open('https://efreightsuite.com/support/patch_rel_main.aspx','_self')
    //this.router.navigateByUrl('https://efreightsuite.com/support/patch_rel_main.aspx');
  }
  someMethod2(value){
    console.log(value)
    if(value=='ALL'){
      value ='ALL'
    }else{
      value =''
    }
    const username = localStorage.getItem('username');
    const companycode = localStorage.getItem('companyname')
    this.supportservice.patchlist(username,companycode,value).subscribe((data: any) => {
      console.log(data)
      this.companylist = data.company_detail
      this.temp_companylist = data.company_detail
      this.companylist1 = data.company_detail
     }); 
  }
}
