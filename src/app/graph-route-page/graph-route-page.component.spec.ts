import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraphRoutePageComponent } from './graph-route-page.component';

describe('GraphRoutePageComponent', () => {
  let component: GraphRoutePageComponent;
  let fixture: ComponentFixture<GraphRoutePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraphRoutePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraphRoutePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
