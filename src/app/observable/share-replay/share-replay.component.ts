import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable, map, shareReplay } from 'rxjs';
import { filter, from, toArray } from 'rxjs';




@Component({
  selector: 'app-share-replay',
  templateUrl: './share-replay.component.html',
  styleUrls: ['./share-replay.component.scss']
})
export class ShareReplayComponent implements OnInit {
  constructor(private http:HttpClient){}
url = "http://localhost:3000/products";
allProducts:Observable<any>;
mobile;
laptop;
ngOnInit(): void {
 this.allProducts = this.http.get(this.url).pipe(
  shareReplay()
 )
 this.mobile = this.allProducts.pipe(
  map(res=>res.filter(mobileData=>{
    return mobileData['type']=='mobile'
  }))
 )

 this.laptop = this.allProducts.pipe(
  map(res=>res.filter(laptopData=>{
    return laptopData['type']=='laptop'
  }))
 )
}
}
 