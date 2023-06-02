import { Component, OnInit } from '@angular/core';
import { interval, map, take, merge , } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge',
  templateUrl: './merge.component.html',
  styleUrls: ['./merge.component.scss']
})
export class MergeComponent implements  OnInit{
  constructor(private design:DesignUtilityService){}

ngOnInit(): void {
  const sourceAngular =  interval(1000).pipe(map(v=> 'RxJs Video '+(v+1)),take(5));
  const sourceNodejs =  interval(3000).pipe(map(v=> 'NodeJs Video '+(v+1)),take(3));
  const sourceReact =  interval(2000).pipe(map(v=> "Hook's Video "+(v+1)),take(4));
  const finalObserver = merge(sourceAngular,sourceNodejs,sourceReact)
  finalObserver.subscribe(res=>{
    this.design.print(res,'elcontainer')
   // console.log(res);
  })
}
}
