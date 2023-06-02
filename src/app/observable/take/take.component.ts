import { Component, OnInit } from '@angular/core';
import { from, fromEvent, interval, map, take, takeLast, takeUntil, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-take',
  templateUrl: './take.component.html',
  styleUrls: ['./take.component.scss']
})
export class TakeComponent implements OnInit{
  constructor(private design:DesignUtilityService){}
  names = ['Rahul','MangalSing','Atul','Naresh','Shubham','Abhinay']
ngOnInit(): void {
  // Ex 01 Take 5
  const namesource = from(this.names)
   namesource.pipe(
take(5)
   ).subscribe(res=>{
    //console.log(res);
    this.design.print(res,'elcontainer')
   })

   // Take Last  3
   namesource.pipe(
    takeLast(3)
       ).subscribe(res=>{
        //console.log(res);
        this.design.print(res,'elcontainer2')
       })

   // Take Untill 
   const source = interval(1000);
   const condition1 = timer(4000);
   const condition2 = fromEvent(document, 'click')
   source.pipe(
    map(res=>'Number '+res),
    takeUntil(condition2)
       ).subscribe(res=>{
        //console.log(res);
        this.design.print(res,'elcontainer3')
       })
}
}
