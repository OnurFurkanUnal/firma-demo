import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GirisDogrulamaComponent } from './giris-dogrulama.component';

describe('GirisDogrulamaComponent', () => {
  let component: GirisDogrulamaComponent;
  let fixture: ComponentFixture<GirisDogrulamaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GirisDogrulamaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GirisDogrulamaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
