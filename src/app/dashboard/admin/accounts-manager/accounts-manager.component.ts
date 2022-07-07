import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accounts-manager',
  templateUrl: './accounts-manager.component.html',
  styleUrls: ['./accounts-manager.component.sass']
})
export class AccountsManagerComponent implements OnInit {
  name: string;
  lastName : string ;
  email : string ;
  phone: number;
  date : string ;
  role : string ;

  requests = [

  {position: 1, name: 'molka', lastName:'louka', email: 'molka@moll', phone: ' 8888888', date :"12/12/2022"},
  {position: 2, name: 'ilyes', lastName:'dali', email: 'ilyes@dali', phone: ' 77777777',date :"11/11/2020"},
  {position: 3, name: 'molka', lastName:'prr', email: 'molka@aissa', phone: ' 50123102',date :"10/10/1000"},
  {position: 4, name: 'ahmed', lastName:'aissa', email: 'ahmed@aissa', phone: ' 50123102',date :"9/9/1010"}
  
];

requestsColumns  = ['position', 'name', 'lastName', 'email','phone','date','Decision'];

requestsSource = this.requests;

users = 
[
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
  usersColumns  = ['position', 'name', 'lastName', 'email','phone','role'];
  usersSource = this.users;



refuseRequest(index:number){
  if (index > -1) {
   this.requests.splice(index, 1);
   this.requestsSource= this.requests ;
  }
 
}

  constructor() { }

  ngOnInit(): void {
  }

}
