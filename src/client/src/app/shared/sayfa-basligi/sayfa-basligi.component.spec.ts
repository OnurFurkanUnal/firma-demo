import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SayfaBasligiComponent } from './sayfa-basligi.component';

describe('SayfaBasligiComponent', () => {
  let component: SayfaBasligiComponent;
  let fixture: ComponentFixture<SayfaBasligiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SayfaBasligiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SayfaBasligiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
