import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  exhaustMap, fromEvent, tap } from 'rxjs';
import { DesignUtilityService } from 'src/app/appServices/design-utility.service';

@Component({
  selector: 'app-exhaust-map',
  templateUrl: './exhaust-map.component.html',
  styleUrls: ['./exhaust-map.component.scss']
})
export class ExhaustMapComponent implements OnInit , AfterViewInit {
  url = "http://localhost:3000/data";
  num=0;
  saveRequest;
  fetching:boolean = false;
  @ViewChild('btn') btn :ElementRef
constructor(private http:HttpClient,private design: DesignUtilityService){

}
ngOnInit(): void {
  
}
onSave(changes){
  return this.http.put(this.url,{data:changes})
}
ngAfterViewInit(): void {
  fromEvent(this.btn.nativeElement,'click').pipe(
    tap(()=> this.fetching=true),
    exhaustMap(()=>this.onSave(this.num++))
  ).subscribe(res=>{
    //console.log(res);
    this.onFetch();  
    this.fetching=false;
  })
}

onFetch(){
this.http.get<any>(this.url).subscribe(res=>{
  //console.log(res.data);
  this.saveRequest = res.data;
})
}

}
