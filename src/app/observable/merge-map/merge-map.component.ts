import { Component, OnInit } from '@angular/core';
import { from, map, mergeAll, mergeMap, of } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-merge-map',
  templateUrl: './merge-map.component.html',
  styleUrls: ['./merge-map.component.scss']
})
export class MergeMapComponent implements OnInit {
  constructor(private design:DesignUtilityService){}

  getData(data){
  return of(data + ' Video Uploaded')
  }
ngOnInit(): void {
  // Ex  01 - merge
  const source = from(['Agular','Nodejs','Reactjs']);
  source.pipe(
    map(res=>this.getData(res))
  ).subscribe(res=>{
    this.design.print(res,'elContainer')
  })

   // Ex  02 - mergeAll
  
   source.pipe(
     map(res=>this.getData(res)),
     mergeAll()
   ).subscribe(res=>{
     this.design.print(res,'elContainer2')
   })

    // Ex  02 - mergeAll
  
    source.pipe(
      mergeMap(res=>this.getData(res)),
      
    ).subscribe(res=>{
      this.design.print(res,'elContainer3')
    })
}
}
