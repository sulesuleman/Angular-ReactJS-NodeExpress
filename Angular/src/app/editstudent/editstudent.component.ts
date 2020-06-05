import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';
@Component({
  selector: 'app-editstudent',
  templateUrl: './editstudent.component.html',
  styleUrls: ['./editstudent.component.css']
})
export class EditstudentsComponent implements OnInit {
  public student;
  name:string;
  sname:string;
  srollno:string;
    
  constructor(private _data:DataService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
      this.getstudents();
    
  }

getstudents(){
  this.activatedRoute.params.subscribe(paramsId => {
    this.name = paramsId.id;
});
   this._data.viewstudentbyid(this.name).subscribe(
          data => { this.student = data},
          err => console.error(err),
          () => console.log("students retrieved successfully",this.student)
      );
    
}

editval()
{
  event.preventDefault();
  // this.sname=stdname
  // this.srollno=num
let ret;
// let body={
//   id:this.name,
//   name:this.sname,
//   rollno:this.srollno
// };
this._data.updateStudent(this.name,this.sname,this.srollno).subscribe(
data => { ret = data},
err => console.error(err),
() => console.log('done loading Employees')
  );
alert("Student Updated Successfully");
   this.getstudents();
}
}

