import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { debounceTime, distinctUntilChanged, fromEvent, map } from 'rxjs';
@Component({
  selector: 'app-debounce',
  templateUrl: './debounce.component.html',
  styleUrls: ['./debounce.component.scss']
})
export class DebounceComponent implements OnInit, AfterViewInit{
  constructor(){}
  @ViewChild('myinput') myinput : ElementRef;
  @ViewChild('myinput2') myinput2 : ElementRef;

  reqData = null;
  reqData2 = null;


ngOnInit(): void {}
ngAfterViewInit(): void {
  // Ex 01 Debounce Time
 const searchTerm = fromEvent<any>(this.myinput.nativeElement,'keyup').pipe(
  map(event => event.target.value),
  debounceTime(1000)
 )
 searchTerm.subscribe(res=>{
  console.log(res);
  this.reqData = res
  setTimeout(()=>{
this.reqData =null;
  },2000)
 })

 // Ex 02 DistinctUntillChanged

 const searchTerm2 = fromEvent<any>(this.myinput2.nativeElement,'keyup').pipe(
  map(event => event.target.value),
  debounceTime(500),
  distinctUntilChanged()
 )
 searchTerm2.subscribe(res=>{
  console.log(res);
  this.reqData2 = res
  setTimeout(()=>{
this.reqData2 =null;
  },1000)
 })
}
}
