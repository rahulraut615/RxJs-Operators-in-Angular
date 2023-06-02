import { Component, OnInit } from '@angular/core';
import { concat, interval, map, take } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat-merge',
  templateUrl: './concat-merge.component.html',
  styleUrls: ['./concat-merge.component.scss']
})
export class ConcatMergeComponent implements  OnInit{
  constructor(private design:DesignUtilityService){}

ngOnInit(): void {
  const sourceAngular =  interval(2000).pipe(map(v=> 'RxJs Video '+(v+1)),take(5));
  const sourceNodejs =  interval(2000).pipe(map(v=> 'NodeJs Video '+(v+1)),take(3));
  const sourceReact =  interval(2000).pipe(map(v=> "Hook's Video "+(v+1)),take(4));
  const finalObserver = concat(sourceAngular,sourceNodejs,sourceReact)
  finalObserver.subscribe(res=>{
    this.design.print(res,'elcontainer')
    console.log(res);
  })
}
}
