import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-async-subject',
  templateUrl: './async-subject.component.html',
  styleUrls: ['./async-subject.component.scss']
})
export class AsyncSubjectComponent implements OnInit {
  constructor(private design: DesignUtilityService) { }

  asyncVideoEmit;

  ngOnInit(): void {
    this.design.asyncVideoEmit.subscribe(res => {
      console.log(res)
      this.asyncVideoEmit = res;
    })
  }

  // video add method
  onVideoAdd(video) {
    console.log(video)
    this.design.asyncVideoEmit.next(video);
  }
// In Async Subject subscription will not complete untill we apply complete();
// and its shows only last value
  onComplete() {
    this.design.asyncVideoEmit.complete();
  }

}