import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KitapdetailComponent } from './kitapdetail.component';

describe('KitapdetailComponent', () => {
  let component: KitapdetailComponent;
  let fixture: ComponentFixture<KitapdetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KitapdetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KitapdetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
