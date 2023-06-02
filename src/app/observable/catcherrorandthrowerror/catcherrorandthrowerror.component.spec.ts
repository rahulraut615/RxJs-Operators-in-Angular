import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatcherrorandthrowerrorComponent } from './catcherrorandthrowerror.component';

describe('CatcherrorandthrowerrorComponent', () => {
  let component: CatcherrorandthrowerrorComponent;
  let fixture: ComponentFixture<CatcherrorandthrowerrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CatcherrorandthrowerrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatcherrorandthrowerrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
