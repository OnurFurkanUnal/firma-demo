import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YazarlarComponent } from './yazarlar.component';

describe('YazarlarComponent', () => {
  let component: YazarlarComponent;
  let fixture: ComponentFixture<YazarlarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YazarlarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YazarlarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
