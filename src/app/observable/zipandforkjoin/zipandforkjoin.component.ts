import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { fromEvent, map, pluck, zip, forkJoin, take } from 'rxjs';

@Component({
  selector: 'app-zipandforkjoin',
  templateUrl: './zipandforkjoin.component.html',
  styleUrls: ['./zipandforkjoin.component.scss']
})
export class ZipandforkjoinComponent implements AfterViewInit{
  
  nameSource= ['Rahul','Mangalsing','Gopal','Naresh','Atul'];
  colorSource= ['red','yellow','indigo','orange','green'];

  @ViewChild('name') name : ElementRef;
  @ViewChild('color') color : ElementRef;

  ngAfterViewInit(): void {
//Obsevable
   const nameObs = fromEvent<any>(this.name.nativeElement,'change').pipe(
      map(event => event.target.value),
      take(4)
      )

   const colorObs = fromEvent<any>(this.color.nativeElement,'change').pipe(
      pluck('target','value'),  // line no 19 & 22 used as same purpose
      take(3)  
      )  
   
      //Ex-01 Zip
    zip(nameObs,colorObs).subscribe(([name,color])=>{
      console.log(name,color);
      this.createBox(name,color,'elContainer')
    })

    // Ex-02 forkJoin
    forkJoin(nameObs,colorObs).subscribe(([name,color])=>{
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
