import { HttpClient } from '@angular/common/http';
import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-uploadfilepreview',
  templateUrl: './uploadfilepreview.component.html',
  styleUrls: ['./uploadfilepreview.component.scss'],
})
export class UploadFilePreviewComponent implements OnInit {

    file: File;
    type: any;
    src: any;
    others:boolean=false
    imgfile:boolean=false
    text:boolean = false
  constructor( 
    private router: Router,
    private activateRoute : ActivatedRoute,
    public dialog: MatDialog,
    private http: HttpClient,
    @Inject(MAT_DIALOG_DATA) public data: any,
    public _sanitizer: DomSanitizer,

  ) {}

  ngOnInit(): void {
      this.file = this.data.file;
      console.log(this.file)
      if(this.file.type.includes('image/')){
        this.type = 'image';
        this.src = this._sanitizer.bypassSecurityTrustResourceUrl( URL.createObjectURL(this.file) ) 
        console.log(this.src)
        this.imgfile = true
        this.text= false
        this.others = false
      }
      else if(this.file.type.includes('text/')){
        this.type = 'text';
        let fr = new FileReader();
        fr.onload = () => {
          this.src = fr.result;
        }
        fr.readAsText(this.file);
        console.log(this.src)
        this.text = true
        this.imgfile= false
        this.others= false
      }
      else if(this.file.type.includes('application/')){
        this.type = 'application';
        this.src = this._sanitizer.bypassSecurityTrustResourceUrl( URL.createObjectURL(this.file) );
        this.others = true
        this.text= false
        this.imgfile=false
      }
      else{
        this.type = 'others';

      }
  }

}




