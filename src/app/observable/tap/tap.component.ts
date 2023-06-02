import { Component, OnInit } from '@angular/core';
import {Subscription, interval ,map, tap} from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';


@Component({
  selector: 'app-tap',
  templateUrl: './tap.component.html',
  styleUrls: ['./tap.component.scss']
})
export class TapComponent implements OnInit {
  constructor(private design:DesignUtilityService){}
  backcolor;
ngOnInit(): void {
  const source = interval(1000);
  
  // Ex - 01
  const arr = ['Rahul','Mangalsing','Shubham','Vaibhav','Jhon'];
  let obsSubscription : Subscription;
 obsSubscription = source.pipe(
  tap(res=>{
console.log(res);
if(res==5){
  obsSubscription.unsubscribe();
}
  }),
    map(res=>arr[res])
  ).subscribe(res=>{
    console.log(res)
    this.design.print(res,'elcontainer')
  })
  //Ex 02

  const colors = ['red','green','yellow','Violet','purple','blue','orange'];
  let obsSubscription2 : Subscription;
 obsSubscription2 = source.pipe(
  tap(res=>{
console.log(res);
if(res==5){
  obsSubscription2.unsubscribe();
}
  }),
    map(res=>colors[res])
  ).subscribe(res=>{
    console.log(res)
    this.backcolor =res;
    this.design.print(res,'elcontainer2')
  })
}
}
