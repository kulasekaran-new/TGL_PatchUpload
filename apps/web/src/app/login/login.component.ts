import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SuppportServiceService } from '../suppport-service.service';
@Component({
  selector: 'frescon-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {  
  model:any={};
  isLoading = false;
  constructor(
    private router: Router,private supportservice: SuppportServiceService,public routers: ActivatedRoute
  ){
    this.isLoading = true;
    this.model.UserName = this.routers.snapshot.paramMap.get('username');
    this.model.Password = this.routers.snapshot.paramMap.get('token');
    // console.log(this.model)
    // console.log(this.routers.snapshot.paramMap.get('username'))
    setTimeout(() => {
      this.login(this.routers.snapshot.paramMap.get('username'),this.routers.snapshot.paramMap.get('token'))
     }, 200);
  }


  ngOnint(){
  
     
    const themes = [
      {
          background: "#1A1A2E",
          color: "#FFFFFF",
          primaryColor: "#0F3460"
      },
      {
          background: "#461220",
          color: "#FFFFFF",
          primaryColor: "#E94560"
      },
      {
          background: "#192A51",
          color: "#FFFFFF",
          primaryColor: "#967AA1"
      },
      {
          background: "#F7B267",
          color: "#000000",
          primaryColor: "#F4845F"
      },
      {
          background: "#F25F5C",
          color: "#000000",
          primaryColor: "#642B36"
      },
      {
          background: "#231F20",
          color: "#FFF",
          primaryColor: "#BB4430"
      }
  ];
  

  
  }
  login(username,pwd){
    
    console.log(this.model)
    if(username && pwd){
      this.supportservice.login_detail(username,pwd).subscribe((data: any) => 
      {

        if(data.Message=='SUCCESS'){
          this.isLoading = false;
          console.log(data)
          localStorage.setItem('username', data.name);
          localStorage.setItem('companyname', data.company_code);
          this.router.navigate(['/patch_list']);
        }
        else{
          this.isLoading = false;
          alert('Enter valid username and password')
        }
        
      })
    }else{
      this.isLoading = false;
      alert('Please Enter Username and password')
    }
  }
}
