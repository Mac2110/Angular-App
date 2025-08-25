import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator} from '@angular/material/paginator';
import { StaticDataService } from 'src/app/services/static-data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})



export class HomeComponent implements OnInit {

  constructor(private staticDataSrv:StaticDataService){}

  public countryNameList: any[] = [];
  public userNameList: any[] = [];
  checked= true;


  ngOnInit():void{
    this.initializeDropdownData();
  }


  initializeDropdownData(){
     const data = this.staticDataSrv.getCountryData().subscribe((res:any)=>{
      let response = res.result.local_filters;
      this.countryNameList = response.country;
      console.log(this.countryNameList)
      this.userNameList = response.user;
      console.log(this.userNameList)
    })
    
  }

  selectedValue!: string;
  displayedColumns: string[] = ['position', 'name', 'department', 'casestudy','status'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
 
  
}

  const ELEMENT_DATA: PeriodicElement[] = [
    {position: 1, name: 'John Doe', department: 'Development', casestudy: 7,status:''},
    {position: 2, name: 'Suzie Bates', department: 'Testing', casestudy: 2, status:''},
    {position: 3, name: 'Marie Doe', department: 'Admin', casestudy: 1,status:''},
    {position: 4, name: 'Mac Peterson', department: 'Human Resource', casestudy: 2,status:''},
    {position: 5, name: 'Jennifer Wright', department: 'Logistics', casestudy: 1,status:''},
    {position: 6, name: 'Adam Croft', department: 'Research & Analysis', casestudy: 5,status:''},
    {position: 7, name: 'Bob Chapek', department: 'Business Analyst', casestudy: 3,status:''},
    {position: 8, name: 'Jeff Hardy', department: 'Manager', casestudy: 4,status:''},
    {position: 9, name: 'Lana Del Rio', department: 'Admin', casestudy: 4,status:''},
    {position: 10, name: 'Jack Holmes', department: 'Logistics', casestudy: 2,status:''},
    {position: 11, name: 'Sam Murray', department: 'Testing', casestudy: 2,status:''},
    {position: 12, name: 'Katie Levis', department: 'Development', casestudy: 3,status:''},
  ];


export interface PeriodicElement {
  name: string;
  position: number;
  department: string;
  casestudy: number;
  status:string
}




