import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PromiceComponent } from './promice/promice.component';
import { ObservableComponent } from './observable/observable.component';
import { ListComponent } from './observable/list/list.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { CustomComponent } from './observable/custom/custom.component';
import { MapComponent } from './observable/map/map.component';
import { PluckComponent } from './observable/pluck/pluck.component';
import { FilterComponent } from './observable/filter/filter.component';
import { TapComponent } from './observable/tap/tap.component';
import { TakeComponent } from './observable/take/take.component';
import { RetrayComponent } from './observable/retray/retray.component';
import { DebounceComponent } from './observable/debounce/debounce.component';
import { SubjectComponent } from './observable/subject/subject.component';
import { ReplaysubjectComponent } from './observable/replaysubject/replaysubject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatMergeComponent } from './observable/concat-merge/concat-merge.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { Switchmap2Component } from './observable/switchmap2/switchmap2.component';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { CombinelatestComponent } from './observable/combinelatest/combinelatest.component';
import { ZipandforkjoinComponent } from './observable/zipandforkjoin/zipandforkjoin.component';
import { CatcherrorandthrowerrorComponent } from './observable/catcherrorandthrowerror/catcherrorandthrowerror.component';


const routes: Routes = [
  {path:'promice',component:PromiceComponent},
  {path:'observable',component:ObservableComponent, children:[
    {path:'list',component:ListComponent},
    {path:'from-event',component:FromEventComponent},
    {path:'interval',component:IntervalComponent},
    {path:'of-from',component:OfFromComponent},
    {path:'toarray',component:ToArrayComponent},
    {path:'custom',component:CustomComponent},
    {path:'map',component:MapComponent},
    {path:'pluck',component:PluckComponent},
    {path:'filter',component:FilterComponent},
    {path:'tap',component:TapComponent},
    {path:'take',component:TakeComponent},
    {path:'retry',component:RetrayComponent},
    {path:'debounce',component:DebounceComponent},
    {path:'subject',component:SubjectComponent},
    {path:'rsubject',component:ReplaysubjectComponent},
    {path:'async-subject',component:AsyncSubjectComponent},
    {path:'concat',component:ConcatMergeComponent},
    {path:'merge',component:MergeComponent},
    {path:'merge-map',component:MergeMapComponent},
    {path:'concat-map',component:ConcatMapComponent},
    {path:'switch-map',component:SwitchMapComponent},
    {path:'switch-map2',component:Switchmap2Component},
    {path:'exhaustMap',component:ExhaustMapComponent},
    {path:'sharereplay',component:ShareReplayComponent},
    {path:'combine',component:CombinelatestComponent},
    {path:'zip',component:ZipandforkjoinComponent},
    {path:'catch',component:CatcherrorandthrowerrorComponent},
    
  ]}  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
