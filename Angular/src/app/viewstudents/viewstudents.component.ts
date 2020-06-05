import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-viewstudents',
  templateUrl: './viewstudents.component.html',
  styleUrls: ['./viewstudents.component.css']
})
export class ViewstudentsComponent implements OnInit {
  public students;
  ename:string;
  constructor(private  _data:DataService, private router:Router  ) { }

  ngOnInit() {
    this.getstudents();
  }

getstudents(){
  this._data.viewstudents().subscribe(
          data => { this.students = data},
          err => console.error(err),
          () => console.log('List of students recieved')
      );
    
}

delval(id:any)
{
var ret;
  this._data.deleteStudent(id).subscribe(
    data => { ret = data},
    err => console.error(err),
    () => console.log('done loading Students')
      );
    alert("Students Deleted Successfully");
    this.getstudents();
     
  }
n(event){
  this.router.navigate(['/editstudents',event])
}  
}

