import { Component, OnChanges, OnInit, ViewChild } from '@angular/core';
import * as XLSX from 'xlsx';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table'
import { Observable } from 'rxjs';



type AOA = any[][];

@Component({
  selector: 'frescon-comstar-upload',
  templateUrl: './comstar-upload.component.html',
  styleUrls: ['./comstar-upload.component.scss']
})
export class ComstarUploadComponent implements OnInit,OnChanges {
  data: AOA = [[1, 2], [3, 4]];
  length = 100;
  pageEvent: PageEvent;
  pageSize = 5;
  pageSizeOptions: number[] = [5, 10, 25, 100];
  wopts: XLSX.WritingOptions = { bookType: 'xlsx', type: 'array' };
  fileName: string = 'SheetJS.xlsx';
  dataSource: MatTableDataSource<any>;
  //displayedColumns :any = ['Name', 'DOB', 'City'];
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  displayedColumns: any[] = [];
  columnsToDisplay: string[] = []; 
  show:boolean = false;

ngAfterViewInit() {
    this.dataSource = new MatTableDataSource(this.data);
    this.dataSource.paginator = this.paginator;
    console.log("paginator",this.dataSource.paginator);
    this.dataSource.sort = this.sort;
}


onPagenateChange($event){
  console.log($event)
}
  onFileChange(evt: any) {
    this.show=true;
    /* wire up file reader */
    const target: DataTransfer = <DataTransfer>(evt.target);
    if (target.files.length !== 1) throw new Error('Cannot use multiple files');
    const reader: FileReader = new FileReader();
    reader.onload = (e: any) => {
      /* read workbook */
      const bstr: string = e.target.result;
      const wb: XLSX.WorkBook = XLSX.read(bstr, { type: 'binary' });

      /* grab first sheet */
      var wsname = wb.SheetNames;
    //  const ws: XLSX.WorkSheet = wb.Sheets[wsname];

      /* save data */
      this.data = XLSX.utils.sheet_to_json(wb.Sheets[wsname[0]]);
      console.log("data:", this.data);
      this.dataSource = new MatTableDataSource<any>(this.data);
      // this.data.map(res => {
      //   console.log(res)
      //   if (res[0] === "no") {
      //     console.log(res[0]);
      //   } else {
      //     console.log(res[0]);
      //   }
      // })
      console.log("paginator-",this.paginator)

      this.length = this.data.length;
      this.pageSize =this.pageSize;
      this.dataSource.paginator = this.paginator;
      // for(let i=0;i < this.data.length; i++){
      //   console.log(this.data[i])
      // }
       this.displayedColumns = Object.keys(this.data[0]).slice();
      console.log("columnsToDisplay",this.columnsToDisplay);
    };
    reader.readAsBinaryString(target.files[0]);

    console.log(this.data)
    this.length=this.data.length
   
    this.dataSource.paginator = this.paginator;
    console.log(this.dataSource)
    console.log('ddf')
  }

  export(): void {
    this.show=true;
    /* generate worksheet */
    const ws: XLSX.WorkSheet = XLSX.utils.aoa_to_sheet(this.data);

    /* generate workbook and add the worksheet */
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

    /* save to file */
    XLSX.writeFile(wb, this.fileName);
  }

  constructor() { }

  ngOnInit(): void {
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    console.log(this.dataSource.filter);
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnChanges() {
    setTimeout(() => {
      console.log(this.sort) //not undefined
      this.dataSource.sort = this.sort; 
    })
  }

}
