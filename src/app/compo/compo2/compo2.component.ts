import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-compo2',
  templateUrl: './compo2.component.html',
  styleUrls: ['./compo2.component.scss']
})
export class Compo2Component {
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
