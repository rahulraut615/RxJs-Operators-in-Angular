import { Component, OnInit } from '@angular/core';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  constructor(private sub : DesignUtilityService){}
  ngOnInit(): void {
    this.sub.exclusive.subscribe(res=>{
      this.exclusive = res;
    })
  }
exclusive : boolean = false;
}
