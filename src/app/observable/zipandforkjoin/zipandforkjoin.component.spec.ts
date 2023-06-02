import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZipandforkjoinComponent } from './zipandforkjoin.component';

describe('ZipandforkjoinComponent', () => {
  let component: ZipandforkjoinComponent;
  let fixture: ComponentFixture<ZipandforkjoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZipandforkjoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZipandforkjoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
