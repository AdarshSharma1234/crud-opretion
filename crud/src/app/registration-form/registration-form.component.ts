import { Component, OnInit } from '@angular/core';
import { Userobj } from '../model/model';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
user:Userobj=new Userobj();
  constructor() { }

  ngOnInit(): void {


  }

  getNewUserId(){
    const oldRecords=localStorage.getItem('dataTable');  
    if(oldRecords!=null){
      const dataTabel=JSON.parse(oldRecords);
      return dataTabel.length + 1;
    }else{
      return 1;
    }

  }

  saveUser()
{
const latestId = this.getNewUserId();
const oldRecords = localStorage.getItem('dataTable');
if(oldRecords! == null){
  const dataTabel = JSON.parse(latestId);
  dataTabel.push(this.user);
  localStorage.setItem('dataTable', JSON.stringify (dataTabel));
}
}
  onsubmit(ngForm:any){
    console.log(ngForm)

}
}
