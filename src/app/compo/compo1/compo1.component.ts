import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-compo1',
  templateUrl: './compo1.component.html',
  styleUrls: ['./compo1.component.scss']
})
export class Compo1Component  {
  name;
  constructor(private design:DesignUtilityService){
    this.design.username.subscribe(res=>{
      this.name = res;
    
      })
  }
  onChange(uname){
this.design.username.next(uname.value)
this.name = uname.value;
  }

}
