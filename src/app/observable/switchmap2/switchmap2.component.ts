import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from'@angular/forms'
import { map, pluck , debounceTime, distinctUntilChanged, concatMap, switchMap, filter, interval} from 'rxjs';
import { Search } from 'src/app/Interface/search.interface';
import { SearchService } from 'src/app/appServices/search.service';

@Component({
  selector: 'app-switchmap2',
  templateUrl: './switchmap2.component.html',
  styleUrls: ['./switchmap2.component.scss']
})
export class Switchmap2Component implements AfterViewInit {
  constructor(private searchService: SearchService){ }
  searchResult$:any;
  searchCount;
  @ViewChild('searchForm') searchForm : NgForm;
  ngAfterViewInit(): void {
    
   const formValue = this.searchForm.valueChanges;
   formValue.pipe(
   // map(data=>data.searchTerm)
   // map(data=>data['searchTerm'])
   
   filter(()=> this.searchForm.valid),
   pluck('searchTerm'),
   debounceTime(500),
   distinctUntilChanged(),
   switchMap(data=> this.searchService.getSearch(data))

   ).subscribe(res=>{
    console.log(res);
    
      this.searchResult$ = res;
      this.searchCount = Object.keys(res).length;
    
   
   })
 }
}
