import { Component, OnDestroy, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs'
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-custom',
  templateUrl: './custom.component.html',
  styleUrls: ['./custom.component.scss']
})
export class CustomComponent implements OnInit, OnDestroy {
  techstatus:string;
  techstatus2:string;
  names;
  namesstatus;
  subs2 : PushSubscription;
constructor(private design:DesignUtilityService){}
  ngOnInit(): void {
    // Ex - 01 (Manual)
   const cusObs1 =  Observable.create(observer=>{
    //observer.error();
    //observer.completed()
    setTimeout(()=>{
      observer.next('Angular');

    },2000)
    setTimeout(()=>{
      observer.next('Typescript');
     //observer.error(new Error('Limit Exeed'));
    },4000)
    setTimeout(()=>{
      observer.next('Html Css');
     //observer.complete();

    },6000)
    setTimeout(()=>{
      observer.next('Java');
     //observer.complete();
     observer.error(new Error('Limit Exeed'));

    },8000)
    
   })
   cusObs1.subscribe(res=>{
    this.design.print(res,'elcontainer');

   },
   (err)=>{
   this.techstatus = 'error';
   },
   ()=>{
    this.techstatus = 'completed';
   }
   )
   //subscribe(data, error, complete)

   //Ex  -02 Custom Interval
  const cusObs2 = Observable.create(observer=>{
    let count =0;
    let arr =['Angular','Html','Css','React','JavaScript'];
    setInterval(()=>{
      observer.next(arr[count]);
      // if(count >= 3){
      //   observer.error("Error Emited");
      // }  
    if(count >= 3){
      observer.complete();
    }
    count++;
    },1000)
  })
  this.subs2 = cusObs2.subscribe(res=>{
    //console.log(res);
    this.design.print(res,'elcontainer2');
  },
  (err)=>{
    this.techstatus2 = 'error';
    },
    ()=>{
     this.techstatus2 = 'completed';
    }
  )
  
   // Ex 03 Random Names
  const Arr3 = ['Naresh','Mangalsing','Atul','shubham','abhinay','vaibhav'];
  const cusObs3 = Observable.create(observer=>{
    let count =0;
    setInterval(()=>{
      observer.next(Arr3[count])
      // if(count>=2){
      // observer.error('Error Emit');
      // }
      if(count>=5){
        observer.complete()
      }
      count++;
    },1000)
  })
  cusObs3.subscribe(res=>{
    console.log(res);
    this.names = res;
  },
    (err)=>{
    this.namesstatus = 'error';
    },
    ()=>{
     this.namesstatus = 'completed';
    }
    )

  }

 ngOnDestroy(): void {
   this.subs2.unsubscribe();
 }
}
