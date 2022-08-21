import { Component, OnInit } from '@angular/core';
import { Userobj } from '../model/model';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.css']
})
export class DataTableComponent implements OnInit {
  
dataTabe:Userobj [];

  constructor() {
    this.dataTabe=[];
   }


  ngOnInit(): void {
    const records= localStorage.getItem('dataTable');
    if(records !==null){
      this.dataTabe = JSON.parse(records);

    }
  }

}
