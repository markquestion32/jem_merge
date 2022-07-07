import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.sass']
})
export class UsersListComponent implements OnInit {
  name: string;
  lastName : string ;
  email : string ;
  phone: number;
  role : string;
 data = [
  {position: 1, name: 'molka', lastName:'louka', email: 'molka@moll', phone: ' 8888888', role : "RH"},
  {position: 2, name: 'ilyes', lastName:'dali', email: 'ilyes@dali', phone: ' 77777777', role : "VP "},
  {position: 3, name: 'molka', lastName:'prr', email: 'molka@aissa', phone: ' 50123102', role : "P "},
  {position: 4, name: 'ahmed', lastName:'aissa', email: 'ahmed@aissa', phone: ' 50123102', role : "membre senior "},
  {position: 5, name: 'ahmed', lastName:'chhata', email: 'ahmed@chhata', phone: ' 99999999', role : "membre senior "},
  {position: 6, name: 'ahmed', lastName:'hamouda', email: 'ahmed@aissa', phone: ' 85858', role : "membre junior "},
  {position: 7, name: 'dali', lastName:'daloula', email: 'ahmed@aissa', phone: ' 58585858', role : "membre junior "},
  {position: 8, name: 'ghazi', lastName:'hamouda', email: 'ahmed@aissa', phone: ' 858585', role : "membre junior "},
  {position: 9, name: 'aziz', lastName:'front', email: 'ahmed@aissa', phone: ' 858585', role : "membre junior "},

];
displayedColumns  = ['position', 'name', 'lastName', 'email','phone','role'];

dataSource = this.data;


  constructor() { }

  ngOnInit(): void {

  }

}
