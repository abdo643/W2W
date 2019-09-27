import { Component, OnInit } from '@angular/core';
import { Student} from '../../classes/student';
import{STUDENTS} from '../../mock-stundents';
  import { from } from 'rxjs';
@Component({
  selector: 'app-matura-class',
  templateUrl: './matura-class.component.html',
  styleUrls: ['./matura-class.component.css']
})
export class MaturaClassComponent implements OnInit {

  students = STUDENTS;

  constructor() { }

  ngOnInit() {
  }

}
