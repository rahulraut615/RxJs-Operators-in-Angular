import { Component, OnInit } from '@angular/core';
import { Subscription, interval } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-replaysubject',
  templateUrl: './replaysubject.component.html',
  styleUrls: ['./replaysubject.component.scss']
})
export class ReplaysubjectComponent implements OnInit {
  constructor(private design:DesignUtilityService){

  }
  toggle : boolean = false;
  intervalSubscription : Subscription;
  user1List = ['Angular','React'];
  user2List = ['Java','Python'];
  user3List = ['Html','Css'];
  //Subscribemode
  subscribeMode2 : boolean = false;
  subscribeMode3 : boolean = false;
  // Subscription
  subscription2 : Subscription
  subscription3 : Subscription

 
ngOnInit(): void {
  this.design.videoEmit.subscribe(res=>{
    console.log(res);
    this.user1List.push(res);
  })
}
// video add method
onVideoAdd(video){
this.design.videoEmit.next(video);
}
user2Subscribe(){
  if(this.subscribeMode2){
this.subscription2.unsubscribe();
  }else{
    this.subscription2 = this.design.videoEmit.subscribe(res=>{
      this.user2List.push(res);
    })
  }
  this.subscribeMode2 = !this.subscribeMode2;
}

user3Subscribe(){ 
  if(this.subscribeMode3){
    this.subscription3.unsubscribe();
      }else{
        this.subscription3 = this.design.videoEmit.subscribe(res=>{
          this.user3List.push(res);
        })
      }
  this.subscribeMode3 = !this.subscribeMode3;
}
//Toggle add Button
doToggle(){
  const brodcastVideo = interval(2000);
  if(!this.toggle){
   this.intervalSubscription = brodcastVideo.subscribe(res=>{
      this.design.videoEmit.next(`Video ${res}`);
    })
  }else{
this.intervalSubscription.unsubscribe();
  }
 
this.toggle = !this.toggle;
}
}
