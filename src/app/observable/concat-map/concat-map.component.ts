import { Component, OnInit } from '@angular/core';
import { concatAll, concatMap, delay, from, map, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-concat-map',
  templateUrl: './concat-map.component.html',
  styleUrls: ['./concat-map.component.scss']
})
export class ConcatMapComponent implements OnInit{
constructor(private design:DesignUtilityService){}
  getdata(data){
    return of(data+' Video Uploaded').pipe(delay(2000));
  }
ngOnInit(): void {
  const source = from(['Agular','Nodejs','Reactjs']);
  // Ex 01 | Map
  source.pipe(
    map(res=>this.getdata(res))
  ).subscribe(res=>res.subscribe(res2=>{
    
      this.design.print(res2,'elContainer');
    
  }))

   // Ex 02 | Map + mergeMap()
   source.pipe(
    mergeMap(res=>this.getdata(res)),
    
  ).subscribe(res=>{
    this.design.print(res,'elContainer2');
  })

  // Ex 02 | concatALL()
  source.pipe(
    concatMap(res=>this.getdata(res)),
    
  ).subscribe(res=>{
    this.design.print(res,'elContainer3');
  })
}
}
