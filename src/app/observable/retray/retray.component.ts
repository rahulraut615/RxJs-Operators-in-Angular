import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { delay, retry, retryWhen, scan ,pipe} from 'rxjs';

@Component({
  selector: 'app-retray',
  templateUrl: './retray.component.html',
  styleUrls: ['./retray.component.scss']
})
export class RetrayComponent implements OnInit{
  constructor(private http:HttpClient){}
  person;
  fetching : boolean = false;
  status = 'No Data'

ngOnInit(): void {
  
}
fetchdata(){
  this.fetching = true;
  this.status = 'Fetching Data..'
  this.http.get('http://localhost:3000/clients').pipe(
    //retry(2)
    retryWhen(err=> err.pipe(
      delay(3000),
      scan(retryCount=>{
        if(retryCount >= 5){
          throw err;
        }else{
          retryCount = retryCount+1;
          console.log(`retryCount is ${retryCount}`);
          this.status = `Retrying Attempt ${retryCount}`
          return retryCount;
        }
      },0)
    ))
  ).subscribe(
    (res)=>{
    console.log(res);
    this.person = res;
    this.fetching = false;
    this.status = 'Data Fetched'
  },
  (err)=>{
    console.log(err);
  this.fetching = false;
  this.status = 'Problem to fetch data'
  })
}
}
