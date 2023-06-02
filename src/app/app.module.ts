import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './includes/header/header.component';
import { PromiceComponent } from './promice/promice.component';
import { ObservableComponent } from './observable/observable.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
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
import { HttpClientModule } from '@angular/common/http';
import { DebounceComponent } from './observable/debounce/debounce.component';
import { StoreModule } from '@ngrx/store';
import { SubjectComponent } from './observable/subject/subject.component';
import { Compo1Component } from './compo/compo1/compo1.component';
import { Compo2Component } from './compo/compo2/compo2.component';
import { Compo3Component } from './compo/compo3/compo3.component';
import { ReplaysubjectComponent } from './observable/replaysubject/replaysubject.component';
import { AsyncSubjectComponent } from './observable/async-subject/async-subject.component';
import { ConcatMergeComponent } from './observable/concat-merge/concat-merge.component';
import { MergeComponent } from './observable/merge/merge.component';
import { MergeMapComponent } from './observable/merge-map/merge-map.component';
import { ConcatMapComponent } from './observable/concat-map/concat-map.component';
import { SwitchMapComponent } from './observable/switch-map/switch-map.component';
import { Switchmap2Component } from './observable/switchmap2/switchmap2.component';
import { ReactiveFormsModule ,FormsModule } from '@angular/forms';
import { ExhaustMapComponent } from './observable/exhaust-map/exhaust-map.component';
import { ShareReplayComponent } from './observable/share-replay/share-replay.component';
import { CombinelatestComponent } from './observable/combinelatest/combinelatest.component';
import { ZipandforkjoinComponent } from './observable/zipandforkjoin/zipandforkjoin.component';
import { CatcherrorandthrowerrorComponent } from './observable/catcherrorandthrowerror/catcherrorandthrowerror.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    PromiceComponent,
    ObservableComponent,
    FromEventComponent,
    ListComponent,
    IntervalComponent,
    OfFromComponent,
    ToArrayComponent,
    CustomComponent,
    MapComponent,
    PluckComponent,
    FilterComponent,
    TapComponent,
    TakeComponent,
    RetrayComponent,
    DebounceComponent,
    SubjectComponent,
    Compo1Component,
    Compo2Component,
    Compo3Component,
    ReplaysubjectComponent,
    AsyncSubjectComponent,
    ConcatMergeComponent,
    MergeComponent,
    MergeMapComponent,
    ConcatMapComponent,
    SwitchMapComponent,
    Switchmap2Component,
    ExhaustMapComponent,
    ShareReplayComponent,
    CombinelatestComponent,
    ZipandforkjoinComponent,
    CatcherrorandthrowerrorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({}, {})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
