import { Component, OnInit } from '@angular/core';
import { Subscription, from, interval, of, take, toArray } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';


@Component({
  selector: 'app-to-array',
  templateUrl: './to-array.component.html',
  styleUrls: ['./to-array.component.scss']
})
export class ToArrayComponent implements OnInit{
sourcesubscription : Subscription;
show;
users = [
  {name:"Rahul", skill:"Angular"},
  {name:"Mangalsing", skill:"Java"},
  {name:"Shubham", skill:"Testing"},
  {name:"Narubhau", skill:"Data Scintist"},

]
  constructor(private design:DesignUtilityService){}

  ngOnInit(): void {
// Ex-01
   const source = interval(1000)
    this.sourcesubscription = source.pipe(
      take(5),
      toArray()).
    subscribe(res=>{
      //console.log(res);
      this.design.print(res,'elcontainer');
      
    // if(res>=8){
    //  this.sourcesubscription.unsubscribe();
    // }
  })
// Ex-02
const source2 = from(this.users);
source2.pipe(toArray()).subscribe(res=>{
 // console.log(res);
  const re =JSON.stringify(res);
 this.design.print(re,'elcontainer2');

})

//Ex-03
const source3 = of('vaibhav','Abhinay','Gopal','shat');
source3.pipe(toArray()).subscribe(res=>{
  //console.log(res);
this.show = res;
})
}
}
