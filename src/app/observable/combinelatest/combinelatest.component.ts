import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { combineLatest, fromEvent, map, pluck, withLatestFrom } from 'rxjs';

@Component({
  selector: 'app-combinelatest',
  templateUrl: './combinelatest.component.html',
  styleUrls: ['./combinelatest.component.scss']
})
export class CombinelatestComponent implements AfterViewInit{
  
  nameSource= ['Rahul','Mangalsing','Gopal','Naresh','Atul'];
  colorSource= ['red','yellow','indigo','orange','green'];

  @ViewChild('name') name : ElementRef;
  @ViewChild('color') color : ElementRef;

  ngAfterViewInit(): void {
//Obsevable
   const nameObs = fromEvent<any>(this.name.nativeElement,'change').pipe(
      map(event => event.target.value))

   const colorObs = fromEvent<any>(this.color.nativeElement,'change').pipe(
      pluck('target','value'))  // line no 19 & 22 used as same purpose
    //Ex-01 Combinelatest
    combineLatest(nameObs,colorObs).subscribe(([name,color])=>{
      console.log(name,color);
      this.createBox(name,color,'elContainer')
    })

    // Ex-02 WithLatestForm
    //Master nameObs
    //Slave colorObs
    nameObs.pipe(withLatestFrom(colorObs)).subscribe(([name,color])=>{
      console.log(name,color);
      this.createBox(name,color,'elContainer2')
    })
  }
  createBox(name,color,containeId){
    let el = document.createElement('div');
    el.innerText = name;
    el.setAttribute("style", "background-color:"+color );
    document.getElementById(containeId).appendChild(el);
  }
}
