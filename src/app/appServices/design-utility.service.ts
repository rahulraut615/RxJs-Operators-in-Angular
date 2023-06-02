import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject, ReplaySubject, AsyncSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DesignUtilityService {
  exclusive = new Subject<boolean>();
  username = new BehaviorSubject<string>('Rahul');
  videoEmit = new ReplaySubject<string>(3,3000) // First Arguments defines last 3 value subscribed
                                               // And Second Arguents defies its time for subscribe   
  asyncVideoEmit = new AsyncSubject(); 
  constructor() { }
  print(val :any,containerId:any){
    let el = document.createElement('li');
    el.innerText = val;
    document.getElementById(containerId).appendChild(el);
  }

  print2(val :any,containerId:any){
    let el = document.createElement('div');
    el.innerText = val;
    el.setAttribute('class','item');
    document.getElementById(containerId).prepend(el);
  }

  

}
