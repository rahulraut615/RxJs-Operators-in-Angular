import { Component } from '@angular/core';
import { of, from} from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-of-from',
  templateUrl: './of-from.component.html',
  styleUrls: ['./of-from.component.scss']
})
export class OfFromComponent {
  constructor(private design:DesignUtilityService){}
  Obsmsg;
ngOnInit():void
{
  
  const obs1 = of('Rahul','Atul','Mangalsing');
obs1.subscribe(res=>{
  //console.log(res);
  this.design.print(res,'elcontainer');
})
const obs2 = of({a:'Rahul',b:'Atul',c:'Mangalsing'});
obs2.subscribe(res=>{
  this.Obsmsg = res;
})
//From to Obsevable
const obs3 = from(['shubham','Abhinay','Naresh']); 
obs3.subscribe(res=>{
  //console.log(res);
  this.design.print(res,'elcontainer3');

})
//Promice to Obsevable
const promice = new Promise(resolve=>{
  setTimeout(()=>{
resolve("promice Resolved");
  },3000)
})

const obs4 = from(promice); 
obs4.subscribe(res=>{
  //console.log(res);
  this.design.print(res,'elcontainer4');

})
//From - String to Observable
const obs5 = from("Welcome to Home"); 
obs5.subscribe(res=>{
 // console.log(res);
  this.design.print(res,'elcontainer5');

})
}
}
