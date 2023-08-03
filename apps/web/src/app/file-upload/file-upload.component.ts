import { animate, state, style, transition, trigger } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { UploadFilePreviewComponent } from '../uploadfilepreview/uploadfilepreview.component';
interface image_doc {
  value: string;
  viewValue: string;
}
interface iimage {
  file_name: string;
  file_content: string;
  document_code:string;
}
@Component({
  selector: "app-file-upload",
  templateUrl: "./file-upload.component.html",
  styleUrls: ["./file-upload.component.scss"],
  animations: [
    trigger("fadeInOut", [
      state("in", style({ opacity: 100 })),
      transition("* => void", [animate(300, style({ opacity: 0 }))])
    ])
  ]
})
export class FileUploadComponent implements OnInit {
  myFiles:any[] | any;
  file_details: iimage[] = [];
  filedet: iimage | any;
  sMsg:string = '';
  imgdoc: image_doc[] = [
    {value: '', viewValue: 'Please Select Document'},
    {value: 'CNV', viewValue: 'Commercial Invoice'},
    {value: 'PKL', viewValue: 'Packing List'},
    {value: 'PCO', viewValue: 'Purchase Order Copy'},      
    {value: 'MSDS', viewValue: 'Material Safety Data Sheet'},
  ];
  @Output() selectedFiles = new EventEmitter<object>();
  
  constructor(
    private router: Router,
    private activateRoute : ActivatedRoute,
    public dialog: MatDialog,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    
  }

  files: any = [];
  formData: any;

  getFile(e:any) {
       
      for (var i = 0; i < e.target.files.length; i++) { 
        
        this.files.push(e.target.files[i]);        
        // this.filedet.file_name=e.target.files[i].name;
        // this.filedet.file_content=e.target.files.file_content;
        // this.filedet.document_code='MSG';
        // this.file_details.push(this.filedet);
      }
    //console.log(this.files, 'files')
    this.selectedFiles.emit(this.files);
  }

  uploadFile():void {
    this.formData = new FormData();
    this.formData.set("file", this.files);
    // let reader = new FileReader();
    this.formData.readAsDataURL(this.files); 
    this.formData.onloadend = () => {
      let base64data: any = this.formData.result; 
      
    }
  }

  files1: any = [];
  doc_code: any = [];
  document_code(e:any,x:string): void {
    
    for (var i = 0; i < this.files.length; i++) { 
      this.files1.push(this.files[i]);
      if(e.name == this.files[i].name)
      {
          this.doc_code[i]=x;       
      }
    }
  //console.log(this.files, 'files')
  this.selectedFiles.emit(this.doc_code);
}
  clearFile(file:any): void {
     this.files = this.files.filter( (item:any) => {
        if(file.name != item.name){
            return item;
        }
      })
  }
 
  uploadFilePreviewPopup(file: any){
    console.log('a')
    const dialogRef = this.dialog.open(UploadFilePreviewComponent, {
      width: '717px',
      height: '497px',
      panelClass: 'app-full-bleed-dialog',
      data: {file: file}
    });
  }
 

}
