import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyKarusellComponent } from './my-karusell.component';

describe('MyKarusellComponent', () => {
  let component: MyKarusellComponent;
  let fixture: ComponentFixture<MyKarusellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyKarusellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyKarusellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
