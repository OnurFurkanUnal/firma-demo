import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { YeniKayitComponent } from './yeni-kayit.component';

describe('YeniKayitComponent', () => {
  let component: YeniKayitComponent;
  let fixture: ComponentFixture<YeniKayitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YeniKayitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YeniKayitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
