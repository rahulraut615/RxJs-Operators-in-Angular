import { Component, OnInit } from '@angular/core';
import { filter, from, toArray } from 'rxjs';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  
  constructor(){}
  data;
  data2;
  data3;

  members = from([
    { id:1, name:'Rahul', gender:'Male' },
    { id:2, name:'Mangalsing', gender:'Male' },
    { id:3, name:'Champa', gender:'feMale' },
    { id:4, name:'Pappa Chi Pari', gender:'feMale' },
    { id:5, name:'Atul', gender:'Male' },
    { id:6, name:'Shubhangi', gender:'feMale' },
    { id:7, name:'Indumati',gender:'feMale' },
    { id:8, name:'Vaibhavi', gender:'feMale' },
    { id:9, name:'Shankar', gender:'Male' },
    { id:10, name:'Rohan', gender:'Male' },

  ])
ngOnInit(): void {
  this.members.pipe(
    filter(data=>data.name.length <= 6),
    toArray()
  ).subscribe(res=>{
    //console.log(res);
    this.data = res;
  })

  this.members.pipe(
    filter(data=>data.gender==='feMale'),
    toArray()
  ).subscribe(res=>{
    //console.log(res);
    this.data2 = res;
  })

  this.members.pipe(
    filter(data=>data.id <6 ),
    toArray()
  ).subscribe(res=>{
    //console.log(res);
    this.data3 = res;
  })
}
}
