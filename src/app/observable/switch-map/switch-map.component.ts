import { Component, OnInit } from '@angular/core';
import { concatMap, delay, from, map, mergeMap, of, switchAll, switchMap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-switch-map',
  templateUrl: './switch-map.component.html',
  styleUrls: ['./switch-map.component.scss']
})
export class SwitchMapComponent implements OnInit{

  constructor(private design:DesignUtilityService){}

  getData(data){
return of(data +' Video Uploded').pipe(delay(1000))
  }
ngOnInit(): void {
  const source = from(['Agular','Nodejs','Reactjs'])
  // Ex 01 mergeMap
  source.pipe(
    mergeMap(data=> this.getData(data))
  ).subscribe(res=>{
    this.design.print(res,'elContainer')
  })

   // Ex 02 concatMap
   source.pipe(
    concatMap(data=> this.getData(data))
   ).subscribe(res=>{
    this.design.print(res,'elContainer2')
   })

   // Ex 01 switchMap
   source.pipe(
    switchMap(data=> this.getData(data))
   ).subscribe(res=>{
    this.design.print(res,'elContainer3')
   })
  


}
}
