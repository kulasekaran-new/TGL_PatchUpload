import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule, DatePipe } from '@angular/common';
//modules
import { AppMaterialModule } from './app-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PatchListComponent } from './patch-list/patch-list.component';
import { AdminScreenComponent } from './admin-screen/admin-screen.component';
// import { LoginComponent } from './login/login.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
// components
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginpageModule } from './login/login.module';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { ChartsModule } from 'ng2-charts';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import  {LoginComponent} from "./login/login.component"
@NgModule({
  declarations: [	AppComponent,  FileUploadComponent,AdminScreenComponent,PatchListComponent
        ],
  imports: [
    AppMaterialModule,CommonModule,
    FormsModule,
    MatTableModule,
    BrowserModule,
    MatTableModule,
    FlexLayoutModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    LoginpageModule,
    // DsrModule,
    //TatReportModule,
    ChartsModule,
    // AgentupdateModule,
    MatTableModule,
    MatPaginatorModule,    
    //  EblpageModule,
    //  WallethistoryModule
    RouterModule.forRoot([
      {
        path: "login/:username/:token",
        component: LoginComponent,
        //  canActivate:[AuthenticationGuard]
      },
      {
        path: "login",
        component: LoginComponent,
        // canActivate:[AuthenticationGuard]
      },
      {
        path: "",
        redirectTo: "/login",
        pathMatch: "full",
      },
    ],{ useHash: false })
  ],exports:[
    
  ],
  providers: [
   
    DatePipe,
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
