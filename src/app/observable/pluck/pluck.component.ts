import { Component, OnInit } from '@angular/core';
import { from, map, pluck, toArray } from 'rxjs';

@Component({
  selector: 'app-pluck',
  templateUrl: './pluck.component.html',
  styleUrls: ['./pluck.component.scss']
})
export class PluckComponent implements OnInit{
  tdata;
  tdata2;

  msg2;
  constructor(){}
  users = [
    {
      name:'Rahul',
      skill:'Angular',
      job : {
        title : 'Web Deveoper'
      }
    },
    {
      name:'Mangalsing',
      skill:'Java',
      job : {
        title : 'Software Deveoper'
      }
    },
    {
      name:'Naresh',
      skill:'Data Science',
      job : {
        title : 'Data Scintist'
      }
    },
    {
      name:'Vaibhav',
      skill:'AnFinance',
      job : {
        title : 'Finance Deveoper'
      }
    },
    {
      name:'Shubham',
      skill:'Devoops',
      job : {
        title : 'Devoops Engingeer'
      }
    },
    {
      name:'Akshay',
      skill:'Python',
      job : {
        title : 'Python Engingeer'
      }
    },
  ]
ngOnInit(): void {
//Ex 01
  from(this.users).pipe(
    //map(data=>data.name),
    pluck('name'),
    toArray()
  ).subscribe(res=>{
    this.tdata =res;
  })

  from(this.users).pipe(
    //map(data=>data.name),
    pluck('job','title'),
    toArray()
  ).subscribe(res=>{
    this.tdata2 =res;
  })
  
}
}
