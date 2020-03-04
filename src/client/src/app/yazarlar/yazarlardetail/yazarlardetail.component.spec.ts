import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YazarlardetailComponent } from './yazarlardetail.component';

describe('YazarlardetailComponent', () => {
  let component: YazarlardetailComponent;
  let fixture: ComponentFixture<YazarlardetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YazarlardetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YazarlardetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
