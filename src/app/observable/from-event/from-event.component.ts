import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';
//import { fromEvent } from 'rxjs'

@Component({
  selector: 'app-from-event',
  templateUrl: './from-event.component.html',
  styleUrls: ['./from-event.component.scss']
})
export class FromEventComponent implements OnInit, AfterViewInit {
  constructor(private service:DesignUtilityService) { }
  @ViewChild('addBtn') addBtn: ElementRef;
  ngOnInit(): void {
    //this.print();
  }
  ngAfterViewInit(): void { 
    let count =1;
    fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
      let counter = 'Video'+count++;
      console.log(counter);
      this.service.print(counter,'elid');
      this.service.print(counter,'elid2');

    })
    
  }

  
}
