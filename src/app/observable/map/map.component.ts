import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, } from 'rxjs';
import { map } from 'rxjs/operators'
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  //Subscription
  sub1 : Subscription
  sub2 : Subscription
  sub3 : Subscription


  //Messages
  msg1;
  msg2;
  msg3;

  constructor(private design:DesignUtilityService){}
 ngOnInit(): void {
  // Ex 01 -
   const brodcastVideeos = interval(1000)
   this.sub1 = brodcastVideeos.pipe(
    map(data=>'video' +data)
   )
   
   .subscribe(res=>{
   // console.log(`${res}`);
    this.msg1 = res;
   })
   setTimeout(()=>{
    this.sub1.unsubscribe();
   },10000)

   //ex 02 

   const brodcastVideeos2 = interval(1000)
   this.sub2 = brodcastVideeos2.pipe(
    map(data=> data+10)
   )
   
   .subscribe(res=>{
   // console.log(`${res}`);
    this.msg2 = res;
   })
   setTimeout(()=>{
    this.sub2.unsubscribe();
   },10000)
// EX 03
const members = from([
  { id:1, name:'Rahul' },
  { id:2, name:'Mangalsing' },
  { id:3, name:'Naresh' },
  { id:4, name:'Puroshottam' },
  { id:5, name:'Atul' },
  { id:6, name:'Shubham' },
  { id:7, name:'Abhinay' },
  { id:8, name:'Vaibhav' },
  { id:9, name:'Shankar' },
])
//let memObs = from(members)
members.pipe(
map(data=> data.name)
).subscribe(res=>{
  this.design.print(res,'elcontainer')
})
 }
}
