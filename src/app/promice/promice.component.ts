import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promice',
  templateUrl: './promice.component.html',
  styleUrls: ['./promice.component.scss']
})
export class PromiceComponent implements OnInit {
  constructor() { }
  Promiceval;
  dell={
    brand : "Dell",
    ram : "8 GB",
    HDD :  "1TB"
  }

  hp={
    brand : "Hp",
    ram : "8 GB",
    HDD :  "2TB"
  }
  noAvil={
    brand : "Not Availabel",
    status : "Failed"
  }
  DellAvailabel(){
    return true;
  }

  HpAvailabel(){
    return false;
  }
  ngOnInit(): void {
    //     let buyLaptop = new Promise(function(resolve,reject){
    // resolve("promice Resolved");
    //     })
     
    let buyLaptop = new Promise((resolve, reject) => {
      //resolve("Promoice Resolved");
      //reject("Promoice Rejected");
      if(this.DellAvailabel()){
        return setTimeout(()=>{
          resolve(this.dell);
        },3000)
      }else if(this.HpAvailabel()){
        return setTimeout(()=>{
          resolve(this.hp);
        },3000)
      }else{
        return setTimeout(()=>{
          reject(this.noAvil);
        })
        
      }
    })

    buyLaptop.then((res) => {
      console.log("then Code=>", res);
      this.Promiceval =res;
    }).catch((res)=>{
      console.log("catch Code=>", res);
      this.Promiceval =res;
    })

  }


}
