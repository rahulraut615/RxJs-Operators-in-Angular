import { Component, OnInit } from '@angular/core';
import { Subscription, interval, timer } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-interval',
  templateUrl: './interval.component.html',
  styleUrls: ['./interval.component.scss']
})
export class IntervalComponent implements OnInit {
constructor(private design:DesignUtilityService){}
obsMsg;
videoSubscription : Subscription;
  ngOnInit():void {

    // const brocastVideos = interval(1000);
    // timer(delay,interval)
    const brocastVideos = timer(3000,1000);

    this.videoSubscription = brocastVideos.subscribe(res=>{
      console.log(res);
      this.obsMsg = 'video'+res;
      this.design.print(this.obsMsg,'elContainer');
      this.design.print(this.obsMsg,'elContainer2');
      this.design.print(this.obsMsg,'elContainer3');


      if(res>=5){
        this.videoSubscription.unsubscribe();

      }
    })
}
}
