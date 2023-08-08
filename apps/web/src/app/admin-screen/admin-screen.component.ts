import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Input, TemplateRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as XLSX from 'xlsx';  
import { SuppportServiceService } from '../suppport-service.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
// import { FileUploader, FileLikeObject } from 'ng2-file-upload';
 

@Component({
  selector: 'app-admin-screen',
  templateUrl: './admin-screen.component.html',
  styleUrls: ['./admin-screen.component.scss']
})
export class AdminScreenComponent {
    /** Name used in form which will be sent in HTTP request. */
    @Input() param = "file";
    /** Target URL for file uploading. */
    @Input() target = "https://file.io";
    @ViewChild('delpop')delpop:TemplateRef<any>
    companyList:any={}
    company_name:any={}
    product_name:any={}
    show:any
    notes:any=[]
    constructor(
      private http: HttpClient,private router: Router,public routers: ActivatedRoute,private supportservice: SuppportServiceService,public dialog: MatDialog
      ) { 
        this.loaddata()
      }
      
  click(files: any){
    var formData = new FormData();
    Array.from(files).forEach(f => formData.append('file', files))
    this.http.post('https://file.io', formData)
      .subscribe(event => {  
        console.log('done')
      })
      console.log(formData)
  }

  title = 'read-excel-in-angular8';  
  storeData: any;  
  csvData: any;  
  jsonData: any;  
  textData: any;  
  htmlData: any;  
  fileUploaded: File | any;  
  worksheet: any;  
  ebooking: any = {};
  uploadedFile(event:any) {  
    this.fileUploaded = event.target.files[0];  
   
  }
  toBase64(file:any){
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    });
  }
  uploadedfiles : any[]=[];
  async selectedFiles(make:any) {
    this.ebooking.image_upload = [];
    for ( let file of make )  {
      //alert(file.name);
      if(file.name != undefined)
      {
      this.ebooking.image_upload.push({
        file_name: file.name,
        file_content: await this.toBase64(file),
        file_type:'MSG',

      });
      // this.show = this.toBase64(file)
      console.log(this.ebooking.image_upload.file_content)
      this.uploadedfiles.push(this.ebooking.image_upload);
      }
      else
      {
          if(file == 'PCO' || file == 'CNV' || file == 'PKL' || file == 'MSDS' || file != '')
          {
            for ( let files of this.uploadedfiles )
            {
              //for ( let files1 of files )
              {
                this.ebooking.image_upload.push({
                  file_name: files[0].file_name,
                  file_content: files[0].file_content,
                  file_type:file
                });
              }
             
            }
            
          }
          
      }
  
  }

  }
  back(){
    this.router.navigate(['/patch_list']);
  }
  company_change(e){
    console.log(e)
    this.company_name = e.CODE
  }
  product_change(e){
    this.product_name = e
    console.log(e)
  }

  loaddata(){
    console.log(this.routers.snapshot.paramMap.get('username'))
   let username = this.routers.snapshot.paramMap.get('username');
    this.supportservice.getcompanyList(username).subscribe((data: any) => {
      console.log(data)
      this.companyList=data.company_master
    })
  }
  submit(){
    let username = this.routers.snapshot.paramMap.get('username');
    console.log(this.ebooking)
    this.show = this.ebooking.image_upload[0].file_content
      // console.log(this.ebooking.image_upload[0].file_content)
    let filename = this.ebooking.image_upload[0].file_name
    let files1 = this.ebooking.image_upload[0].file_content.split(',')
    let notes = this.notes
    let files = files1[1]
    let len = files.split('').length/4
    let len1 =files.split(len,4)
    console.log(files)
    console.log(files.split('').length/4)
    console.log(filename)
    this.show = files
    // console.log(files.split(','))
    // let type = this.ebooking.image_upload[0].file_type
    let type ='EFS' 

    return false
    this.supportservice.upload_patch(username,this.company_name,type,files,filename,this.product_name,notes).subscribe((data: any) => {
        console.log(data)
    })
  }

}
