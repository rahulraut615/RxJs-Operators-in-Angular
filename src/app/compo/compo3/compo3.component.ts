import { Component } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-compo3',
  templateUrl: './compo3.component.html',
  styleUrls: ['./compo3.component.scss']
})
export class Compo3Component {

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
